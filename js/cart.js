// ==========================================
// CẤU HÌNH & BIẾN TOÀN CỤC
// ==========================================
const SHIPPING_FEE = 30000; // Phí ship: 30k
const FREE_SHIPPING_THRESHOLD = 5000000; // Freeship cho đơn > 5 triệu
const COUPONS = {
    'TECHZONE10': 100000,
    'WELCOME20': 200000,
    'SALE50': 500000,
    'VIP': 1000000
};

let discountAmount = 0;
let appliedCouponCode = '';

// ==========================================
// KHỞI TẠO KHI TẢI TRANG
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    renderCart();
});

// ==========================================
// CÁC HÀM XỬ LÝ DỮ LIỆU GIỎ HÀNG
// ==========================================

// Lấy dữ liệu từ LocalStorage (Đồng bộ với main.js)
function getCartData() {
    return JSON.parse(localStorage.getItem('techzoneCart') || '[]');
}

// Lưu dữ liệu và cập nhật giao diện
function saveCartData(cart) {
    localStorage.setItem('techzoneCart', JSON.stringify(cart));
    
    // Cập nhật badge trên header (nếu main.js đã chạy)
    if (typeof updateCartBadge === 'function') {
        updateCartBadge();
    }
    
    // Render lại bảng giỏ hàng
    renderCart();
}

// ==========================================
// RENDER GIAO DIỆN (VIEW)
// ==========================================
function renderCart() {
    const cart = getCartData();
    const tbody = document.getElementById('cartTableBody');
    const emptyCart = document.getElementById('emptyCart');
    const cartTable = document.getElementById('cartTable');
    const cartSummary = document.getElementById('cartSummary'); // Container chứa tổng tiền

    if (!tbody) return;

    // 1. Xử lý hiển thị khi giỏ hàng trống
    if (cart.length === 0) {
        if(cartTable) cartTable.style.display = 'none';
        if(cartSummary) cartSummary.style.display = 'none';
        if(emptyCart) emptyCart.style.display = 'block';
        
        // Reset discount khi giỏ hàng trống
        discountAmount = 0;
        appliedCouponCode = '';
        updateOrderSummary();
        return;
    }

    // 2. Hiển thị bảng nếu có sản phẩm
    if(cartTable) cartTable.style.display = 'table';
    if(cartSummary) cartSummary.style.display = 'block';
    if(emptyCart) emptyCart.style.display = 'none';

    // 3. Render từng dòng sản phẩm
    tbody.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        return `
            <tr>
                <td class="align-middle">
                    <div class="d-flex align-items-center">
                        <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover;" class="rounded me-3">
                        <div class="d-none d-md-block">
                            <h6 class="mb-0 text-dark">${item.name}</h6>
                            <small class="text-muted">ID: ${item.id}</small>
                        </div>
                    </div>
                </td>
                <td class="align-middle text-center d-md-none">
                     <strong>${item.name}</strong>
                </td>
                <td class="align-middle">
                    <span class="d-md-none text-muted">Giá: </span>
                    <span class="fw-bold text-primary">${formatMoney(item.price)}</span>
                </td>
                <td class="align-middle">
                    <div class="input-group input-group-sm" style="width: 120px;">
                        <button class="btn btn-outline-secondary" type="button" onclick="updateItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <input type="number" class="form-control text-center" value="${item.quantity}" min="1" 
                            onchange="updateItemQuantity(${item.id}, this.value)">
                        <button class="btn btn-outline-secondary" type="button" onclick="updateItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </td>
                <td class="align-middle text-end">
                    <span class="d-md-none text-muted">Tổng: </span>
                    <span class="fw-bold text-danger">${formatMoney(itemTotal)}</span>
                </td>
                <td class="align-middle text-center">
                    <button class="btn btn-link text-danger p-0" onclick="removeItem(${item.id})" title="Xóa">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    // 4. Cập nhật bảng tổng tiền
    updateOrderSummary();
}

function updateOrderSummary() {
    const cart = getCartData();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Tính phí ship
    let shipping = SHIPPING_FEE;
    if (subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0) {
        shipping = 0;
    }

    // Đảm bảo tổng tiền không âm
    const total = Math.max(0, subtotal + shipping - discountAmount);

    // Cập nhật DOM
    setTextContent('subtotal', formatMoney(subtotal));
    setTextContent('shipping', shipping === 0 ? 'Miễn phí' : formatMoney(shipping));
    setTextContent('discount', discountAmount > 0 ? `-${formatMoney(discountAmount)}` : '0₫');
    setTextContent('totalPrice', formatMoney(total));
    
    // Hiển thị mã giảm giá đang dùng (nếu có)
    const couponInput = document.getElementById('couponCode');
    if(couponInput && appliedCouponCode) {
        couponInput.value = appliedCouponCode;
        couponInput.disabled = true; // Khóa input khi đã áp dụng
    }
}

// ==========================================
// CÁC HÀM XỬ LÝ SỰ KIỆN (ACTIONS)
// ==========================================

function updateItemQuantity(productId, newQty) {
    let cart = getCartData();
    const item = cart.find(p => p.id === productId);
    
    if (!item) return;

    const qty = parseInt(newQty);

    if (qty <= 0) {
        // Nếu giảm về 0 thì hỏi xóa
        if (confirm(`Bạn có muốn xóa "${item.name}" khỏi giỏ hàng?`)) {
            removeItem(productId);
        } else {
            // Nếu hủy xóa, render lại để reset số lượng về cũ
            renderCart();
        }
    } else {
        item.quantity = qty;
        saveCartData(cart);
    }
}

function removeItem(productId) {
    if (!confirm('Bạn chắc chắn muốn xóa sản phẩm này?')) return;

    let cart = getCartData();
    cart = cart.filter(p => p.id !== productId);
    
    // Nếu xóa hết sạch thì reset coupon
    if (cart.length === 0) {
        discountAmount = 0;
        appliedCouponCode = '';
        const couponInput = document.getElementById('couponCode');
        if(couponInput) {
            couponInput.value = '';
            couponInput.disabled = false;
        }
    }

    saveCartData(cart);
}

function applyCoupon() {
    const input = document.getElementById('couponCode');
    if (!input) return;

    const code = input.value.trim().toUpperCase();

    if (!code) {
        alert('Vui lòng nhập mã giảm giá!');
        return;
    }

    if (appliedCouponCode === code) {
        alert('Mã giảm giá này đã được áp dụng!');
        return;
    }

    if (COUPONS.hasOwnProperty(code)) {
        discountAmount = COUPONS[code];
        appliedCouponCode = code;
        alert(`✅ Áp dụng mã ${code} thành công! Giảm ${formatMoney(discountAmount)}`);
        renderCart(); // Render lại để cập nhật bảng giá và khóa input
    } else {
        alert('❌ Mã giảm giá không hợp lệ hoặc đã hết hạn.');
        input.value = '';
        input.focus();
    }
}

function checkout() {
    const cart = getCartData();

    // 1. Kiểm tra giỏ hàng
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống!');
        return;
    }

    // 2. Kiểm tra đăng nhập (Lấy user từ localStorage do main.js quản lý)
    const user = JSON.parse(localStorage.getItem('techzoneUser'));
    if (!user) {
        if(confirm('Bạn cần đăng nhập để thanh toán. Đi đến trang đăng nhập ngay?')) {
            // Gọi modal đăng nhập của main.js
            if (typeof showLoginModal === 'function') {
                showLoginModal();
            }
        }
        return;
    }

    // 3. Xử lý thanh toán
    if (confirm('Xác nhận đặt hàng? Đơn hàng sẽ được gửi đến email của bạn.')) {
        // Reset giỏ hàng
        localStorage.removeItem('techzoneCart');
        discountAmount = 0;
        appliedCouponCode = '';
        
        // Cập nhật UI
        if (typeof updateCartBadge === 'function') {
            updateCartBadge();
        }
        renderCart();

        // Unlock coupon input
        const couponInput = document.getElementById('couponCode');
        if(couponInput) {
            couponInput.value = '';
            couponInput.disabled = false;
        }

        alert('Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại TechZone.');
        // Có thể redirect về trang chủ: window.location.href = 'index.html';
    }
}

// ==========================================
// TIỆN ÍCH (HELPER)
// ==========================================
function formatMoney(amount) {
    // Nếu main.js chưa load kịp thì dùng fallback này
    return amount.toLocaleString('vi-VN') + ' ₫';
}

function setTextContent(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}
