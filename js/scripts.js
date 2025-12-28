
const productsData = [
    { 
        id: 1, 
        name: 'iPhone 15 Pro', 
        price: 25000000, 
        oldPrice: 29000000, 
        image: 'https://images.unsplash.com/photo-1696446702094-826a58ef4e8a?w=400',
        images: [
            'https://images.unsplash.com/photo-1696446702094-826a58ef4e8a?w=400',
            'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400',
            'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400'
        ],
        category: 'phone', 
        featured: true,
        description: 'iPhone 15 Pro với chip A17 Pro mạnh mẽ, camera 48MP và thiết kế Titanium cao cấp.',
        specs: {
            screen: '6.1 inch, Super Retina XDR',
            cpu: 'Apple A17 Pro',
            ram: '8GB',
            storage: '256GB',
            camera: '48MP + 12MP + 12MP',
            battery: '3274mAh'
        }
    },
    { 
        id: 2, 
        name: 'Samsung Galaxy S24', 
        price: 22000000, 
        oldPrice: 25000000, 
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
        images: [
            'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400'
        ],
        category: 'phone', 
        featured: true,
        description: 'Galaxy S24 với AI thế hệ mới, camera 50MP và màn hình Dynamic AMOLED 2X sắc nét.',
        specs: {
            screen: '6.2 inch, Dynamic AMOLED 2X',
            cpu: 'Snapdragon 8 Gen 3',
            ram: '8GB',
            storage: '256GB',
            camera: '50MP + 12MP + 10MP',
            battery: '4000mAh'
        }
    },
    { 
        id: 3, 
        name: 'MacBook Pro M3', 
        price: 45000000, 
        oldPrice: 50000000, 
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
        images: [
            'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
            'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400',
            'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400'
        ],
        category: 'laptop', 
        featured: true,
        description: 'MacBook Pro M3 với hiệu năng vượt trội, màn hình Liquid Retina XDR và thời lượng pin đến 22 giờ.',
        specs: {
            screen: '14 inch, Liquid Retina XDR',
            cpu: 'Apple M3 (8-core)',
            ram: '16GB',
            storage: '512GB SSD',
            gpu: '10-core GPU',
            battery: 'Lên đến 22 giờ'
        }
    },
    { 
        id: 4, 
        name: 'Dell XPS 15', 
        price: 35000000, 
        oldPrice: 40000000, 
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400',
        images: [
            'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400',
            'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400',
            'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400'
        ],
        category: 'laptop', 
        featured: true,
        description: 'Dell XPS 15 với màn hình OLED 4K, hiệu năng mạnh mẽ cho công việc đồ họa và video.',
        specs: {
            screen: '15.6 inch, OLED 4K',
            cpu: 'Intel Core i7-13700H',
            ram: '16GB',
            storage: '512GB SSD',
            gpu: 'NVIDIA RTX 4050',
            battery: 'Lên đến 10 giờ'
        }
    },
    { 
        id: 5, 
        name: 'iPad Pro', 
        price: 28000000, 
        oldPrice: 32000000, 
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
        images: [
            'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
            'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400',
            'https://images.unsplash.com/photo-1585790050230-5dd28404f754?w=400'
        ],
        category: 'tablet', 
        featured: true,
        description: 'iPad Pro với chip M2, màn hình Liquid Retina XDR và hỗ trợ Apple Pencil thế hệ 2.',
        specs: {
            screen: '12.9 inch, Liquid Retina XDR',
            cpu: 'Apple M2',
            ram: '8GB',
            storage: '256GB',
            camera: '12MP Wide + 10MP Ultra Wide',
            battery: 'Lên đến 10 giờ'
        }
    },
    { 
        id: 6, 
        name: 'AirPods Pro', 
        price: 6000000, 
        oldPrice: 7000000, 
        image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400',
        images: [
            'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400',
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400',
            'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400'
        ],
        category: 'accessory', 
        featured: true,
        description: 'AirPods Pro với khử tiếng ồn chủ động, âm thanh không gian và chống nước IPX4.',
        specs: {
            type: 'Tai nghe không dây',
            chip: 'Apple H2',
            battery: 'Lên đến 6 giờ',
            charging: 'MagSafe, Wireless',
            features: 'ANC, Transparency Mode',
            waterproof: 'IPX4'
        }
    },
    // THAY ĐỔI: Thêm sản phẩm mới để có đủ cho trang products
    { 
        id: 7, 
        name: 'Xiaomi 14 Ultra', 
        price: 24000000, 
        oldPrice: 27000000, 
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
        images: [
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'
        ],
        category: 'phone', 
        featured: false,
        description: 'Xiaomi 14 Ultra với camera Leica, sạc nhanh 90W và màn hình AMOLED 120Hz.',
        specs: {
            screen: '6.73 inch, AMOLED 120Hz',
            cpu: 'Snapdragon 8 Gen 3',
            ram: '12GB',
            storage: '512GB',
            camera: '50MP Leica (4 camera)',
            battery: '5000mAh, sạc 90W'
        }
    },
    { 
        id: 8, 
        name: 'HP Envy 13', 
        price: 22000000, 
        oldPrice: 25000000, 
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
        images: [
            'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
            'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400'
        ],
        category: 'laptop', 
        featured: false,
        description: 'HP Envy 13 mỏng nhẹ, thiết kế kim loại cao cấp và pin trâu.',
        specs: {
            screen: '13.3 inch, Full HD',
            cpu: 'Intel Core i5-1335U',
            ram: '8GB',
            storage: '256GB SSD',
            gpu: 'Intel Iris Xe',
            battery: 'Lên đến 12 giờ'
        }
    },
    { 
        id: 9, 
        name: 'Samsung Galaxy Tab S9', 
        price: 18000000, 
        oldPrice: 21000000, 
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400',
        images: [
            'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400',
            'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400'
        ],
        category: 'tablet', 
        featured: false,
        description: 'Galaxy Tab S9 với màn hình AMOLED, S Pen và chống nước IP68.',
        specs: {
            screen: '11 inch, Dynamic AMOLED 2X',
            cpu: 'Snapdragon 8 Gen 2',
            ram: '8GB',
            storage: '256GB',
            camera: '13MP + 8MP',
            battery: '8400mAh'
        }
    }
];

// ==================== GLOBAL VARIABLES ====================
let currentUser = null;
let cart = [];
let users = [];

document.addEventListener('DOMContentLoaded', function() {
    if (window.techzoneUser) currentUser = window.techzoneUser;
    if (window.techzoneCart) cart = window.techzoneCart;
    if (window.techzoneUsers) users = window.techzoneUsers;
    
    updateUserSection();
    updateCartBadge();
    
    // Auto slide carousel nếu có
    const carousel = document.getElementById('heroCarousel');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 3000,
            ride: 'carousel'
        });
    }
});

function formatPrice(price) {
    return price.toLocaleString('vi-VN');
}

function getProductById(id) {
    return productsData.find(p => p.id === parseInt(id));
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validatePassword(password) {
    if (password.length < 8) return false;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[@$!%*#?&]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumber && hasSpecial;
}

// ==================== AUTHENTICATION ====================
function showLoginModal() {
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    clearLoginForm();
    modal.show();
}

function showRegisterModal() {
    const modal = new bootstrap.Modal(document.getElementById('registerModal'));
    clearRegisterForm();
    modal.show();
}

function switchToRegister() {
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
    setTimeout(() => showRegisterModal(), 300);
}

function switchToLogin() {
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    setTimeout(() => showLoginModal(), 300);
}

function clearLoginForm() {
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginEmailError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';
    document.getElementById('loginError').classList.add('d-none');
}

function clearRegisterForm() {
    document.getElementById('registerEmail').value = '';
    document.getElementById('registerPassword').value = '';
    document.getElementById('registerConfirmPassword').value = '';
    document.getElementById('registerEmailError').textContent = '';
    document.getElementById('registerPasswordError').textContent = '';
    document.getElementById('registerConfirmError').textContent = '';
    document.getElementById('registerError').classList.add('d-none');
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    let hasError = false;

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
        window.techzoneUser = user;
        bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        updateUserSection();
        alert('Đăng nhập thành công!');
    } else {
        document.getElementById('loginError').textContent = 'Email hoặc mật khẩu không đúng';
        document.getElementById('loginError').classList.remove('d-none');
    }
}

function handleRegister() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    let hasError = false;

    document.getElementById('registerEmailError').textContent = '';
    document.getElementById('registerPasswordError').textContent = '';
    document.getElementById('registerConfirmError').textContent = '';
    document.getElementById('registerError').classList.add('d-none');

    if (!email) {
        document.getElementById('registerEmailError').textContent = 'Email không được để trống';
        hasError = true;
    } else if (!validateEmail(email)) {
        document.getElementById('registerEmailError').textContent = 'Email không hợp lệ (ví dụ: abc@gmail.com)';
        hasError = true;
    }

    if (!password) {
        document.getElementById('registerPasswordError').textContent = 'Mật khẩu không được để trống';
        hasError = true;
    } else if (!validatePassword(password)) {
        document.getElementById('registerPasswordError').textContent = 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ HOA, chữ thường, số và ký tự đặc biệt';
        hasError = true;
    }

    if (password !== confirmPassword) {
        document.getElementById('registerConfirmError').textContent = 'Mật khẩu xác nhận không khớp';
        hasError = true;
    }

    if (hasError) return;

    if (users.find(u => u.email === email)) {
        document.getElementById('registerError').textContent = 'Email đã được sử dụng';
        document.getElementById('registerError').classList.remove('d-none');
        return;
    }

    users.push({ id: Date.now(), email, password });
    window.techzoneUsers = users;
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    alert('Đăng ký thành công! Vui lòng đăng nhập.');
    setTimeout(() => showLoginModal(), 300);
}

function updateUserSection() {
    const section = document.getElementById('userSection');
    if (!section) return;
    
    if (currentUser) {
        section.innerHTML = `
            <span class="text-white me-2 d-none d-md-inline">${currentUser.email}</span>
            <button class="btn btn-danger btn-sm" onclick="handleLogout()">
                <i class="fas fa-sign-out-alt"></i> Đăng xuất
            </button>
        `;
    } else {
        section.innerHTML = `
            <button class="btn btn-light" onclick="showLoginModal()">
                <i class="fas fa-user"></i> <span class="d-none d-md-inline">Đăng nhập</span>
            </button>
        `;
    }
}

function handleLogout() {
    currentUser = null;
    window.techzoneUser = null;
    updateUserSection();
    alert('Đăng xuất thành công!');
}

function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;
    
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    window.techzoneCart = cart;
    updateCartBadge();
    alert(`✅ Đã thêm "${product.name}" vào giỏ hàng!`);
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-block' : 'none';
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    window.techzoneCart = cart;
    updateCartBadge();
    
    // Nếu đang ở trang giỏ hàng thì render lại
    if (typeof renderCart === 'function') {
        renderCart();
    }
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity = Math.max(1, parseInt(newQuantity));
        window.techzoneCart = cart;
        updateCartBadge();
        
        // Nếu đang ở trang giỏ hàng thì render lại
        if (typeof renderCart === 'function') {
            renderCart();
        }
    }
}

function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}