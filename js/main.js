// ==========================================
// 1. DỮ LIỆU SẢN PHẨM (DATABASE MÔ PHỎNG)
// ==========================================
const productsData = [
    { 
        id: 1, 
        name: 'iPhone 15 Pro', 
        price: 25000000, 
        oldPrice: 29000000, 
        image: 'https://images.unsplash.com/photo-1696446702094-826a58ef4e8a?w=400',
        images: ['https://images.unsplash.com/photo-1696446702094-826a58ef4e8a?w=400','https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400','https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400'], 
        category: 'phone', 
        featured: true, 
        description: 'iPhone 15 Pro với chip A17 Pro mạnh mẽ, camera 48MP và thiết kế Titanium cao cấp.', 
        specs: { screen: '6.1 inch, Super Retina XDR', cpu: 'Apple A17 Pro', ram: '8GB', storage: '256GB', camera: '48MP + 12MP + 12MP', battery: '3274mAh' }
    },
    { 
        id: 2, 
        name: 'Samsung Galaxy S24', 
        price: 22000000, 
        oldPrice: 25000000, 
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
        images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400','https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400','https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400'], 
        category: 'phone', 
        featured: true, 
        description: 'Galaxy S24 với AI thế hệ mới, camera 50MP và màn hình Dynamic AMOLED 2X sắc nét.', 
        specs: { screen: '6.2 inch, Dynamic AMOLED 2X', cpu: 'Snapdragon 8 Gen 3', ram: '8GB', storage: '256GB', camera: '50MP + 12MP + 10MP', battery: '4000mAh' }
    },
    { 
        id: 3, 
        name: 'MacBook Pro M3', 
        price: 45000000, 
        oldPrice: 50000000, 
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
        images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400','https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400','https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400'], 
        category: 'laptop', 
        featured: true, 
        description: 'MacBook Pro M3 với hiệu năng vượt trội, màn hình Liquid Retina XDR và thời lượng pin đến 22 giờ.', 
        specs: { screen: '14 inch, Liquid Retina XDR', cpu: 'Apple M3', ram: '16GB', storage: '512GB SSD', gpu: '10-core GPU', battery: 'Lên đến 22 giờ' }
    },
    { 
        id: 4, 
        name: 'Dell XPS 15', 
        price: 35000000, 
        oldPrice: 40000000, 
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400',
        images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400','https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400','https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400'], 
        category: 'laptop', 
        featured: true, 
        description: 'Dell XPS 15 với màn hình OLED 4K, hiệu năng mạnh mẽ cho đồ họa.', 
        specs: { screen: '15.6 inch OLED 4K', cpu: 'Intel Core i7-13700H', ram: '16GB', storage: '512GB SSD', gpu: 'RTX 4050', battery: '10 giờ' }
    },
    { 
        id: 5, 
        name: 'iPad Pro', 
        price: 28000000, 
        oldPrice: 32000000, 
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
        images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400','https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400','https://images.unsplash.com/photo-1585790050230-5dd28404f754?w=400'], 
        category: 'tablet', 
        featured: true, 
        description: 'iPad Pro với chip M2 và màn hình Liquid Retina XDR.', 
        specs: { screen: '12.9 inch', cpu: 'Apple M2', ram: '8GB', storage: '256GB', battery: '10 giờ' }
    },
    { 
        id: 6, 
        name: 'AirPods Pro', 
        price: 6000000, 
        oldPrice: 7000000, 
        image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400',
        images: ['https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400','https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400','https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400'], 
        category: 'accessory', 
        featured: true, 
        description: 'AirPods Pro chống ồn chủ động.', 
        specs: { chip: 'Apple H2', battery: '6 giờ', waterproof: 'IPX4' }
    },
    { 
        id: 7, 
        name: 'Xiaomi 14 Ultra', 
        price: 24000000, 
        oldPrice: 27000000, 
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
        images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400','https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'], 
        category: 'phone', 
        featured: false, 
        description: 'Xiaomi flagship Leica.', 
        specs: { cpu: 'Snapdragon 8 Gen 3', ram: '12GB', battery: '5000mAh' }
    },
    { 
        id: 8, 
        name: 'HP Envy 13', 
        price: 22000000, 
        oldPrice: 25000000, 
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
        images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400','https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400'], 
        category: 'laptop', 
        featured: false, 
        description: 'HP Envy mỏng nhẹ.', 
        specs: { cpu: 'Intel i5', ram: '8GB', battery: '12 giờ' }
    },
    { 
        id: 9, 
        name: 'Samsung Galaxy Tab S9', 
        price: 18000000, 
        oldPrice: 21000000, 
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400',
        images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400','https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400'], 
        category: 'tablet', 
        featured: false, 
        description: 'Galaxy Tab S9 AMOLED.', 
        specs: { cpu: 'Snapdragon 8 Gen 2', battery: '8400mAh' }
    }
];

// ==========================================
// 2. KHỞI TẠO STATE & UTILS
// ==========================================
let users = JSON.parse(localStorage.getItem('techzoneUsers') || '[]');
let currentUser = JSON.parse(localStorage.getItem('techzoneUser') || 'null');

document.addEventListener('DOMContentLoaded', () => {
    updateUserSection();
    updateCartBadge();
    
    // Auto slide carousel nếu có (cho trang chủ)
    const carousel = document.getElementById('heroCarousel');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 3000,
            ride: 'carousel'
        });
    }
});

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + '₫';
}

function getProductById(id) {
    return productsData.find(p => p.id === parseInt(id));
}

// ==========================================
// 3. LOGIC GIỎ HÀNG (CART SYSTEM)
// ==========================================
function getCart() {
    return JSON.parse(localStorage.getItem('techzoneCart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('techzoneCart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const cart = getCart();
    const item = cart.find(p => p.id === productId);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    alert(`✅ Đã thêm "${product.name}" vào giỏ hàng`);
}

function updateQuantity(productId, newQuantity) {
    let cart = getCart();
    const item = cart.find(i => i.id === productId);
    
    if (item) {
        const qty = parseInt(newQuantity);
        if (qty > 0) {
            item.quantity = qty;
        } else {
            // Nếu số lượng <= 0, hỏi user có muốn xóa không
            if(confirm('Bạn có muốn xóa sản phẩm này không?')) {
                cart = cart.filter(i => i.id !== productId);
            } else {
                // Nếu hủy xóa, reset về 1 (hoặc số cũ)
                // Cần render lại UI nếu ở trang cart
                return; 
            }
        }
        
        saveCart(cart);
        
        // Nếu hàm renderCart tồn tại (ở trang cart.html), gọi lại để cập nhật UI
        if (typeof renderCart === 'function') {
            renderCart();
        }
    }
}

function removeFromCart(productId) {
    if(!confirm('Bạn chắc chắn muốn xóa sản phẩm này?')) return;
    
    let cart = getCart();
    cart = cart.filter(p => p.id !== productId);
    saveCart(cart);
    
    // Cập nhật UI nếu ở trang cart
    if (typeof renderCart === 'function') {
        renderCart();
    }
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;

    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-block' : 'none';
}

// ==========================================
// 4. LOGIC TÀI KHOẢN (AUTH SYSTEM)
// ==========================================
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validatePassword(password) {
    // Tối thiểu 8 ký tự, 1 hoa, 1 thường, 1 số, 1 ký tự đặc biệt
    if (password.length < 8) return false;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[@$!%*#?&]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumber && hasSpecial;
}

// --- Modal Controls ---
function showLoginModal() {
    // Ẩn modal register nếu đang mở
    const regModalEl = document.getElementById('registerModal');
    if(regModalEl && bootstrap.Modal.getInstance(regModalEl)) {
        bootstrap.Modal.getInstance(regModalEl).hide();
    }
    
    clearLoginForm();
    new bootstrap.Modal(document.getElementById('loginModal')).show();
}

function showRegisterModal() {
    // Ẩn modal login nếu đang mở
    const loginModalEl = document.getElementById('loginModal');
    if(loginModalEl && bootstrap.Modal.getInstance(loginModalEl)) {
        bootstrap.Modal.getInstance(loginModalEl).hide();
    }

    clearRegisterForm();
    new bootstrap.Modal(document.getElementById('registerModal')).show();
}

function switchToRegister() {
    showRegisterModal();
}

function switchToLogin() {
    showLoginModal();
}

// --- Form Clearing ---
function clearLoginForm() {
    if(document.getElementById('loginEmail')) document.getElementById('loginEmail').value = '';
    if(document.getElementById('loginPassword')) document.getElementById('loginPassword').value = '';
    if(document.getElementById('loginEmailError')) document.getElementById('loginEmailError').textContent = '';
    if(document.getElementById('loginPasswordError')) document.getElementById('loginPasswordError').textContent = '';
    if(document.getElementById('loginError')) document.getElementById('loginError').classList.add('d-none');
}

function clearRegisterForm() {
    if(document.getElementById('registerEmail')) document.getElementById('registerEmail').value = '';
    if(document.getElementById('registerPassword')) document.getElementById('registerPassword').value = '';
    if(document.getElementById('registerConfirmPassword')) document.getElementById('registerConfirmPassword').value = '';
    if(document.getElementById('registerEmailError')) document.getElementById('registerEmailError').textContent = '';
    if(document.getElementById('registerPasswordError')) document.getElementById('registerPasswordError').textContent = '';
    if(document.getElementById('registerConfirmError')) document.getElementById('registerConfirmError').textContent = '';
    if(document.getElementById('registerError')) document.getElementById('registerError').classList.add('d-none');
}

// --- Auth Handlers ---
function handleLogin() {
    const emailEl = document.getElementById('loginEmail');
    const passEl = document.getElementById('loginPassword');
    
    if(!emailEl || !passEl) return;

    const email = emailEl.value;
    const password = passEl.value;
    let hasError = false;

    // Reset errors
    document.getElementById('loginEmailError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';
    document.getElementById('loginError').classList.add('d-none');

    if (!email) {
        document.getElementById('loginEmailError').textContent = 'Email không được để trống';
        hasError = true;
    } else if (!validateEmail(email)) {
        document.getElementById('loginEmailError').textContent = 'Email không hợp lệ';
        hasError = true;
    }

    if (!password) {
        document.getElementById('loginPasswordError').textContent = 'Mật khẩu không được để trống';
        hasError = true;
    }

    if (hasError) return;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem('techzoneUser', JSON.stringify(user));
        
        // Hide modal
        const modalInstance = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        if(modalInstance) modalInstance.hide();
        
        updateUserSection();
        alert('Đăng nhập thành công!');
    } else {
        const errEl = document.getElementById('loginError');
        errEl.textContent = 'Email hoặc mật khẩu không đúng';
        errEl.classList.remove('d-none');
    }
}

function handleRegister() {
    const emailEl = document.getElementById('registerEmail');
    const passEl = document.getElementById('registerPassword');
    const confirmEl = document.getElementById('registerConfirmPassword');

    if(!emailEl || !passEl || !confirmEl) return;

    const email = emailEl.value;
    const password = passEl.value;
    const confirmPassword = confirmEl.value;
    let hasError = false;

    // Reset Errors
    document.getElementById('registerEmailError').textContent = '';
    document.getElementById('registerPasswordError').textContent = '';
    document.getElementById('registerConfirmError').textContent = '';
    document.getElementById('registerError').classList.add('d-none');

    if (!email) {
        document.getElementById('registerEmailError').textContent = 'Email không được để trống';
        hasError = true;
    } else if (!validateEmail(email)) {
        document.getElementById('registerEmailError').textContent = 'Email không hợp lệ';
        hasError = true;
    }

    if (!password) {
        document.getElementById('registerPasswordError').textContent = 'Mật khẩu không được để trống';
        hasError = true;
    } else if (!validatePassword(password)) {
        document.getElementById('registerPasswordError').textContent = 'Mật khẩu yếu (Cần 8 ký tự, Hoa, thường, số, ký tự đặc biệt)';
        hasError = true;
    }

    if (password !== confirmPassword) {
        document.getElementById('registerConfirmError').textContent = 'Mật khẩu xác nhận không khớp';
        hasError = true;
    }

    if (hasError) return;

    if (users.find(u => u.email === email)) {
        const errEl = document.getElementById('registerError');
        errEl.textContent = 'Email đã được sử dụng';
        errEl.classList.remove('d-none');
        return;
    }

    // Register success
    const newUser = { id: Date.now(), email, password };
    users.push(newUser);
    localStorage.setItem('techzoneUsers', JSON.stringify(users));
    
    // Hide register modal
    const modalInstance = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    if(modalInstance) modalInstance.hide();
    
    alert('Đăng ký thành công! Vui lòng đăng nhập.');
    showLoginModal();
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('techzoneUser');
    updateUserSection();
    
    // Nếu đang ở trang cần đăng nhập thì chuyển về home (tùy chọn)
    // window.location.href = 'index.html';
    
    alert('Đã đăng xuất!');
}

function updateUserSection() {
    const section = document.getElementById('userSection');
    if (!section) return;
    
    if (currentUser) {
        section.innerHTML = `
            <div class="dropdown">
                <button class="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <i class="fas fa-user-circle"></i> ${currentUser.email.split('@')[0]}
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">Thông tin tài khoản</a></li>
                    <li><a class="dropdown-item" href="#">Đơn hàng của tôi</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item text-danger" href="#" onclick="handleLogout()">Đăng xuất</a></li>
                </ul>
            </div>
        `;
    } else {
        section.innerHTML = `
            <button class="btn btn-light" onclick="showLoginModal()">
                <i class="fas fa-user"></i> <span class="d-none d-md-inline">Đăng nhập</span>
            </button>
        `;
    }
}
