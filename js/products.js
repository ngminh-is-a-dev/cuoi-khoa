        let currentCategory = 'all';
        let currentPriceRange = 'all';
        let currentSort = 'default';
        let filteredProducts = [...productsData];

        document.addEventListener('DOMContentLoaded', function() {
            const categoryParam = getQueryParam('category');
            if (categoryParam) {
                currentCategory = categoryParam;
                filterByCategory(categoryParam);
            } else {
                renderProducts();
            }
        });

        function renderProducts() {
            const grid = document.getElementById('productsGrid');
            const count = document.getElementById('productCount');
            
            filteredProducts = productsData.filter(p => {
                let matchCategory = currentCategory === 'all' || p.category === currentCategory;
                let matchPrice = true;
                
                if (currentPriceRange !== 'all') {
                    const [min, max] = currentPriceRange.split('-').map(n => parseInt(n) * 1000000);
                    matchPrice = p.price >= min && p.price < max;
                }
                
                return matchCategory && matchPrice;
            });

            if (currentSort === 'price-asc') {
                filteredProducts.sort((a, b) => a.price - b.price);
            } else if (currentSort === 'price-desc') {
                filteredProducts.sort((a, b) => b.price - a.price);
            } else if (currentSort === 'name-asc') {
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            }

            count.textContent = filteredProducts.length;

            grid.innerHTML = filteredProducts.map(product => `
                <div class="col-md-4">
                    <div class="card product-card shadow-sm">
                        <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <div class="mb-3">
                                <span class="price">${formatPrice(product.price)} ₫</span>
                                ${product.oldPrice ? `<span class="old-price ms-2">${formatPrice(product.oldPrice)} ₫</span>` : ''}
                            </div>
                            <div class="d-grid gap-2">
                                <a href="detail.html?id=${product.id}" class="btn btn-outline-primary">
                                    <i class="fas fa-eye"></i> Chi tiết
                                </a>
                                <button class="btn btn-primary" onclick="addToCart(${product.id})">
                                    <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function filterByCategory(category) {
            currentCategory = category;
            
            document.querySelectorAll('.list-group-item').forEach(item => {
                item.classList.remove('active');
            });
            event.target.classList.add('active');
            
            renderProducts();
        }

        function filterByPrice(range) {
            currentPriceRange = range;
            renderProducts();
        }

        function sortProducts(sortType) {
            currentSort = sortType;
            renderProducts();
        }

        function searchProducts() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const grid = document.getElementById('productsGrid');
            const count = document.getElementById('productCount');
            
            const searched = filteredProducts.filter(p => 
                p.name.toLowerCase().includes(query)
            );

            count.textContent = searched.length;

            grid.innerHTML = searched.map(product => `
                <div class="col-md-4">
                    <div class="card product-card shadow-sm">
                        <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <div class="mb-3">
                                <span class="price">${formatPrice(product.price)} ₫</span>
                                ${product.oldPrice ? `<span class="old-price ms-2">${formatPrice(product.oldPrice)} ₫</span>` : ''}
                            </div>
                            <div class="d-grid gap-2">
                                <a href="detail.html?id=${product.id}" class="btn btn-outline-primary">
                                    <i class="fas fa-eye"></i> Chi tiết
                                </a>
                                <button class="btn btn-primary" onclick="addToCart(${product.id})">
                                    <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }