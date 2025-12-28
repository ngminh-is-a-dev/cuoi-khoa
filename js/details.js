   let currentProduct = null;

        document.addEventListener('DOMContentLoaded', function() {
            const productId = getQueryParam('id');
            if (productId) {
                currentProduct = getProductById(parseInt(productId));
                if (currentProduct) {
                    renderProductDetail(currentProduct);
                    renderRelatedProducts(currentProduct.category);
                } else {
                    alert('Không tìm thấy sản phẩm!');
                    window.location.href = 'products.html';
                }
            } else {
                window.location.href = 'products.html';
            }
        });

        function renderProductDetail(product) {
            document.getElementById('productBreadcrumb').textContent = product.name;
            
            document.title = `${product.name} - TechZone`;

            const mainImage = document.getElementById('mainImage');
            mainImage.src = product.images[0];
            mainImage.alt = product.name;

            const thumbnailContainer = document.getElementById('thumbnailContainer');
            thumbnailContainer.innerHTML = product.images.map((img, index) => `
                <img src="${img}" 
                     class="thumbnail-img ${index === 0 ? 'active' : ''}" 
                     onclick="changeMainImage('${img}', event)"
                     alt="Thumbnail ${index + 1}">
            `).join('');

            // Render product info
            document.getElementById('productInfo').innerHTML = `
                <h2 class="mb-3">${product.name}</h2>
                <div class="mb-3">
                    <span class="text-warning">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </span>
                    <span class="ms-2 text-muted">(5 đánh giá)</span>
                </div>
                <div class="mb-4">
                    <h3 class="price mb-2">${formatPrice(product.price)} ₫</h3>
                    ${product.oldPrice ? `<p class="mb-0"><del class="text-muted">${formatPrice(product.oldPrice)} ₫</del> <span class="badge bg-danger">-${Math.round((1 - product.price/product.oldPrice) * 100)}%</span></p>` : ''}
                </div>

                <div class="mb-4">
                    <h5 class="mb-3">Chính sách bán hàng</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i> Bảo hành chính hãng 12 tháng</li>
                        <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i> 1 đổi 1 trong 30 ngày</li>
                        <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i> Miễn phí giao hàng toàn quốc</li>
                        <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i> Trả góp 0% lãi suất</li>
                    </ul>
                </div>

                <div class="mb-4">
                    <label class="form-label fw-bold">Số lượng:</label>
                    <div class="input-group" style="width: 150px;">
                        <button class="btn btn-outline-secondary" type="button" onclick="decreaseQuantity()">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" class="form-control text-center" id="quantityInput" value="1" min="1">
                        <button class="btn btn-outline-secondary" type="button" onclick="increaseQuantity()">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>

                <div class="d-grid gap-2">
                    <button class="btn btn-primary btn-lg" onclick="addProductToCart()">
                        <i class="fas fa-cart-plus me-2"></i>Thêm vào giỏ hàng
                    </button>
                    <button class="btn btn-success btn-lg" onclick="buyNow()">
                        <i class="fas fa-shopping-bag me-2"></i>Mua ngay
                    </button>
                </div>

                <div class="mt-4 p-3 bg-light rounded">
                    <p class="mb-0"><i class="fas fa-phone-alt text-primary me-2"></i> Gọi ngay: <strong>1900-xxxx</strong> để được tư vấn</p>
                </div>
            `;

            document.getElementById('productDescription').textContent = product.description;

            const specsTable = document.getElementById('specsTable');
            specsTable.innerHTML = Object.entries(product.specs).map(([key, value]) => `
                <tr>
                    <td class="fw-bold" style="width: 30%;">${getSpecLabel(key)}</td>
                    <td>${value}</td>
                </tr>
            `).join('');
        }

        function changeMainImage(imgSrc, event) {
            document.getElementById('mainImage').src = imgSrc;
            
            // Update active state
            document.querySelectorAll('.thumbnail-img').forEach(img => {
                img.classList.remove('active');
            });
            event.target.classList.add('active');
        }

        function getSpecLabel(key) {
            const labels = {
                screen: 'Màn hình',
                cpu: 'Chip xử lý',
                ram: 'RAM',
                storage: 'Bộ nhớ',
                camera: 'Camera',
                battery: 'Pin',
                gpu: 'Card đồ họa',
                type: 'Loại',
                chip: 'Chip',
                charging: 'Sạc',
                features: 'Tính năng',
                waterproof: 'Chống nước'
            };
            return labels[key] || key;
        }

        // Quantity controls
        function increaseQuantity() {
            const input = document.getElementById('quantityInput');
            input.value = parseInt(input.value) + 1;
        }

        function decreaseQuantity() {
            const input = document.getElementById('quantityInput');
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
            }
        }

        function addProductToCart() {
            const quantity = parseInt(document.getElementById('quantityInput').value);
            
            for (let i = 0; i < quantity; i++) {
                addToCart(currentProduct.id);
            }
        }

        // Buy now function
        function buyNow() {
            addProductToCart();
            window.location.href = 'cart.html';
        }

        // THAY ĐỔI MỚI: Render sản phẩm liên quan (cùng category)
        function renderRelatedProducts(category) {
            const related = productsData.filter(p => 
                p.category === category && p.id !== currentProduct.id
            ).slice(0, 3);

            const container = document.getElementById('relatedProducts');
            container.innerHTML = related.map(product => `
                <div class="col-md-4">
                    <div class="card product-card shadow-sm">
                        <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <div class="mb-3">
                                <span class="price">${formatPrice(product.price)} ₫</span>
                            </div>
                            <a href="detail.html?id=${product.id}" class="btn btn-primary w-100">
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                </div>
            `).join('');
        }