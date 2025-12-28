   const SHIPPING_FEE = 30000;
        const FREE_SHIPPING_THRESHOLD = 5000000;
        let discountAmount = 0;

        document.addEventListener('DOMContentLoaded', function() {
            renderCart();
        });

        function renderCart() {
            const tbody = document.getElementById('cartTableBody');
            const emptyCart = document.getElementById('emptyCart');
            const cartTable = document.getElementById('cartTable');

            if (cart.length === 0) {
                cartTable.style.display = 'none';
                emptyCart.style.display = 'block';
                updateCartSummary();
                return;
            }

            cartTable.style.display = 'table';
            emptyCart.style.display = 'none';

            tbody.innerHTML = cart.map(item => `
                <tr>
                    <td>
                        <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover;" class="rounded">
                    </td>
                    <td>
                        <a href="detail.html?id=${item.id}" class="text-decoration-none">
                            <strong>${item.name}</strong>
                        </a>
                    </td>
                    <td>
                        <span class="text-primary fw-bold">${formatPrice(item.price)} ₫</span>
                    </td>
                    <td>
                        <!-- THAY ĐỔI MỚI: Input số lượng với sự kiện onchange để tính toán tự động -->
                        <div class="input-group quantity-input">
                            <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${item.id}, -1)">
                                <i class="fas fa-minus"></i>
                            </button>
                            <input type="number" 
                                   class="form-control form-control-sm text-center" 
                                   value="${item.quantity}" 
                                   min="1" 
                                   onchange="updateItemQuantity(${item.id}, this.value)"
                                   style="width: 60px;">
                            <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${item.id}, 1)">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </td>
                    <td>
                        <!-- THAY ĐỔI MỚI: Thành tiền = Đơn giá x Số lượng -->
                        <strong class="text-danger">${formatPrice(item.price * item.quantity)} ₫</strong>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="removeItem(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `).join('');

            updateCartSummary();
        }

        function changeQuantity(productId, change) {
            const item = cart.find(i => i.id === productId);
            if (item) {
                item.quantity = Math.max(1, item.quantity + change);
                window.techzoneCart = cart;
                updateCartBadge();
                renderCart();
            }
        }

        function updateItemQuantity(productId, newQuantity) {
            const qty = parseInt(newQuantity);
            if (qty < 1) return;
            
            const item = cart.find(i => i.id === productId);
            if (item) {
                item.quantity = qty;
                window.techzoneCart = cart;
                updateCartBadge();
                renderCart();
            }
        }

        function removeItem(productId) {
            if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
                cart = cart.filter(item => item.id !== productId);
                window.techzoneCart = cart;
                updateCartBadge();
                renderCart();
            }
        }

        function updateCartSummary() {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
            const total = subtotal + shipping - discountAmount;

            document.getElementById('subtotal').textContent = formatPrice(subtotal) + ' ₫';
            document.getElementById('shipping').textContent = shipping === 0 ? 'Miễn phí' : formatPrice(shipping) + ' ₫';
            document.getElementById('discount').textContent = discountAmount > 0 ? '-' + formatPrice(discountAmount) + ' ₫' : '0 ₫';
            document.getElementById('totalPrice').textContent = formatPrice(total) + ' ₫';

            if (subtotal > 0 && subtotal < FREE_SHIPPING_THRESHOLD) {
                const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
            }
        }

        function applyCoupon() {
            const code = document.getElementById('couponCode').value.trim().toUpperCase();
            
            const coupons = {
                'TECHZONE10': 100000,
                'WELCOME20': 200000,
                'SALE50': 500000
            };

            if (coupons[code]) {
                discountAmount = coupons[code];
                alert(`Áp dụng mã giảm giá thành công! Giảm ${formatPrice(discountAmount)} ₫`);
                updateCartSummary();
            } else {
                alert('Mã giảm giá không hợp lệ!');
            }
        }
        function checkout() {
            if (cart.length === 0) {
                alert('Giỏ hàng trống! Vui lòng thêm sản phẩm.');
                return;
            }

            if (!currentUser) {
                alert('Vui lòng đăng nhập để thanh toán!');
                showLoginModal();
                return;
            }

            const total = document.getElementById('totalPrice').textContent;
            if (confirm(`Xác nhận thanh toán ${total}?`)) {
                alert('Đặt hàng thành công! Cảm ơn bạn đã mua hàng tại TechZone.');
                cart = [];
                window.techzoneCart = cart;
                updateCartBadge();
                renderCart();
            }
        }