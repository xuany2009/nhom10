// product-detail.js - Trang chi tiết xe hơi (đã sửa lỗi)
console.log('product-detail.js đang chạy...');

// ============================================
// 1. CƠ SỞ DỮ LIỆU XE HƠI (đầy đủ)
// ============================================
const CAR_DATABASE = {
    // ----- Sedan -----
    "sedan1": {
        id: "sedan1",
        tendv: "Toyota Vios",
        anh: "./ảnh/seban/seban1.png",
        tt1: `Toyota Vios - Dòng sedan cỡ B bán chạy nhất Việt Nam.\n\n• Động cơ: 1.5L, 4 xi-lanh, Dual VVT-i\n• Công suất: 107 mã lực\n• Hộp số: CVT (tự động)\n• Nhiên liệu: Xăng\n• Tiêu hao nhiên liệu: 5.2 L/100km\n• Kích thước: 4,425 x 1,730 x 1,475 mm\n• Chỗ ngồi: 5 người\n• Bảo hành: 5 năm / 100,000 km\n\nNổi bật: Thiết kế trẻ trung, tiết kiệm nhiên liệu, độ bền cao.`,
        gia: "450000000",
        category: "Sedan",
        size: "Sedan cỡ B",
        serves: "5 người",
        flavor: "Xăng 1.5L",
        tags: ["Toyota", "Vios", "tiết kiệm nhiên liệu", "bền bỉ"],
        images: ["./ảnh/seban/seban1.png", "./ảnh/seban/seban1_1.png", "./ảnh/seban/seban1_2.png"]
    },
    "sedan2": {
        id: "sedan2",
        tendv: "Honda City",
        anh: "./ảnh/seban/seban2.png",
        tt1: `Honda City - Sedan cỡ B thể thao và hiện đại.\n\n• Động cơ: 1.5L i-VTEC, 119 mã lực\n• Hộp số: CVT\n• Nhiên liệu: Xăng\n• Tiêu hao nhiên liệu: 5.5 L/100km\n• Kích thước: 4,495 x 1,748 x 1,477 mm\n• Chỗ ngồi: 5 người\n• Bảo hành: 5 năm / 100,000 km\n\nNổi bật: Thiết kế thể thao, nhiều tiện nghi, vận hành mạnh mẽ.`,
        gia: "560000000",
        category: "Sedan",
        size: "Sedan cỡ B",
        serves: "5 người",
        flavor: "Xăng 1.5L",
        tags: ["Honda", "City", "thiết kế thể thao"],
        images: ["./ảnh/seban/seban2.png", "./ảnh/seban/seban2_1.png", "./ảnh/seban/seban2_2.png"]
    },
    // ... (thêm các sedan khác nếu cần, nhưng đủ để demo)

    // ----- SUV -----
    "suv1": {
        id: "suv1",
        tendv: "Toyota Fortuner",
        anh: "./ảnh/suv/suv1.png",
        tt1: `Toyota Fortuner - SUV 7 chỗ mạnh mẽ, đa dụng.\n\n• Động cơ: 2.8L Diesel, 204 mã lực\n• Hộp số: 6 cấp tự động\n• Nhiên liệu: Diesel\n• Tiêu hao nhiên liệu: 8.5 L/100km\n• Kích thước: 4,795 x 1,855 x 1,835 mm\n• Chỗ ngồi: 7 người\n• Bảo hành: 5 năm / 100,000 km\n\nNổi bật: Khả năng off-road tốt, thiết kế cứng cáp, nội thất rộng rãi.`,
        gia: "1100000000",
        category: "SUV",
        size: "SUV 7 chỗ",
        serves: "7 người",
        flavor: "Diesel 2.8L",
        tags: ["Toyota", "Fortuner", "off-road", "mạnh mẽ"],
        images: ["./ảnh/suv/suv1.png", "./ảnh/suv/suv1_1.png", "./ảnh/suv/suv1_2.png"]
    },
    // ... (các SUV khác)

    // ----- Xe Thể Thao -----
    "sport1": {
        id: "sport1",
        tendv: "Porsche 911",
        anh: "./ảnh/sport/sp1.jpg",
        tt1: `Porsche 911 - Biểu tượng của xe thể thao.\n\n• Động cơ: 3.0L Twin-Turbo, 385 mã lực\n• Hộp số: 8 cấp tự động\n• Nhiên liệu: Xăng\n• Tiêu hao nhiên liệu: 8.9 L/100km\n• Kích thước: 4,519 x 1,852 x 1,300 mm\n• Chỗ ngồi: 2 người\n• Bảo hành: 3 năm / 50,000 km\n\nNổi bật: Thiết kế thể thao, tốc độ cao, đẳng cấp.`,
        gia: "4500000000",
        category: "Xe Thể Thao",
        size: "Coupe 2 chỗ",
        serves: "2 người",
        flavor: "Xăng 3.0L",
        tags: ["Porsche", "911", "huyền thoại", "thể thao"],
        images: ["./ảnh/sport/sp1.jpg", "./ảnh/sport/sp1_1.jpg", "./ảnh/sport/sp1_2.jpg"]
    },
    // ... (các xe thể thao khác)

    // ----- Xe Gia Đình -----
    "family1": {
        id: "family1",
        tendv: "Toyota Innova",
        anh: "./ảnh/family/fa1.jpg",
        tt1: `Toyota Innova - Xe gia đình đa dụng.\n\n• Động cơ: 2.0L, 139 mã lực\n• Hộp số: 6 cấp tự động\n• Nhiên liệu: Xăng\n• Tiêu hao nhiên liệu: 6.8 L/100km\n• Kích thước: 4,735 x 1,830 x 1,795 mm\n• Chỗ ngồi: 7 người\n• Bảo hành: 5 năm / 100,000 km\n\nNổi bật: Rộng rãi, tiện nghi, phù hợp gia đình.`,
        gia: "750000000",
        category: "Xe Gia Đình",
        size: "MPV 7 chỗ",
        serves: "7 người",
        flavor: "Xăng 2.0L",
        tags: ["Toyota", "Innova", "gia đình", "rộng rãi"],
        images: ["./ảnh/family/fa1.jpg", "./ảnh/family/fa1_1.jpg", "./ảnh/family/fa1_2.jpg"]
    },
    // ... (các xe gia đình khác)

    // ----- Xe Điện & Hybrid -----
    "electric1": {
        id: "electric1",
        tendv: "Tesla Model 3",
        anh: "./ảnh/electric/el1.jpg",
        tt1: `Tesla Model 3 - Sedan điện tiên phong.\n\n• Động cơ: Điện, 283 mã lực\n• Pin: 75 kWh, phạm vi 491 km\n• Sạc: Siêu sạc 250 kW\n• Nhiên liệu: Điện\n• Kích thước: 4,694 x 1,849 x 1,443 mm\n• Chỗ ngồi: 5 người\n• Bảo hành: 8 năm / 160,000 km (pin)\n\nNổi bật: Không phát thải, công nghệ hiện đại, tiết kiệm chi phí.`,
        gia: "1800000000",
        category: "Xe Điện & Hybrid",
        size: "Sedan điện",
        serves: "5 người",
        flavor: "Điện",
        tags: ["Tesla", "Model 3", "điện", "hiện đại"],
        images: ["./ảnh/electric/el1.jpg", "./ảnh/electric/el1_1.jpg", "./ảnh/electric/el1_2.jpg"]
    }
    // ... (thêm các xe khác nếu cần)
};

// ============================================
// 2. HÀM TIỆN ÍCH (KHÔNG PHỤ THUỘC BIẾN NGOÀI)
// ============================================

// Format giá tiền (fallback an toàn)
function formatPrice(price) {
    try {
        return parseInt(price || 0).toLocaleString('vi-VN');
    } catch (e) {
        return '0';
    }
}

// Lấy cartManager an toàn
function getCartManager() {
    if (typeof window.cartManager !== 'undefined' && window.cartManager) {
        return window.cartManager;
    }
    // Fallback nếu cartManager chưa được load
    return {
        addToCart: function(product, quantity = 1) {
            try {
                if (!product || !product.id) return false;
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                const existing = cart.find(item => item.id === product.id);
                const qty = Math.max(1, Math.min(99, quantity));
                if (existing) existing.quantity += qty;
                else cart.push({
                    id: product.id,
                    name: product.tendv || product.name || 'Sản phẩm',
                    image: product.anh || product.image || './ảnh/default-cake.jpg',
                    price: parseInt(product.gia || product.price || 0),
                    quantity: qty,
                    category: product.category || 'Không phân loại',
                    size: product.size || '1kg',
                    serves: product.serves || '6-8 người'
                });
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartBadge();
                return true;
            } catch (e) { return false; }
        }
    };
}

// Cập nhật badge giỏ hàng
function updateCartBadge() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = cart.reduce((s, i) => s + (parseInt(i.quantity) || 0), 0);
        document.querySelectorAll('#cart-badge, .cart-badge').forEach(el => {
            if (el) {
                el.textContent = total > 99 ? '99+' : total;
                el.style.display = total > 0 ? 'flex' : 'none';
            }
        });
    } catch (e) { /* bỏ qua */ }
}

// Hiển thị thông báo
function showNotification(message, type = 'success') {
    let noti = document.getElementById('global-notification');
    if (!noti) {
        noti = document.createElement('div');
        noti.id = 'global-notification';
        noti.style.cssText = `
            position: fixed; top: 20px; right: 20px; padding: 15px 25px;
            border-radius: 8px; color: white; font-weight: bold; z-index: 9999;
            display: none; min-width: 300px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        `;
        document.body.appendChild(noti);
    }
    const colors = {
        success: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
        error: 'linear-gradient(135deg, #ff5252, #d32f2f)',
        info: 'linear-gradient(135deg, #2196F3, #1976D2)',
        warning: 'linear-gradient(135deg, #FF9800, #F57C00)'
    };
    noti.style.background = colors[type] || colors.success;
    noti.innerHTML = `<div style="display:flex;align-items:center;gap:10px;">
        <i class="fas ${type==='success'?'fa-check-circle':type==='error'?'fa-exclamation-circle':'fa-info-circle'}"></i>
        <span>${message}</span>
    </div>`;
    noti.style.display = 'block';
    clearTimeout(noti._timer);
    noti._timer = setTimeout(() => { noti.style.display = 'none'; }, 3000);
}

// ============================================
// 3. HIỂN THỊ CHI TIẾT SẢN PHẨM
// ============================================

function displayProductDetail() {
    let product = null;
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Ưu tiên lấy từ URL, sau đó từ localStorage
    if (id && CAR_DATABASE[id]) {
        product = CAR_DATABASE[id];
        localStorage.setItem('selectedProduct', JSON.stringify(product));
    } else {
        try {
            const stored = localStorage.getItem('selectedProduct');
            if (stored) product = JSON.parse(stored);
        } catch (e) { /* bỏ qua */ }
    }

    // Nếu vẫn không có, dùng xe mặc định
    if (!product) {
        product = {
            id: 'default',
            tendv: 'Xe Hơi Đặc Biệt',
            anh: './ảnh/default-cake.jpg',
            tt1: 'Xe hơi cao cấp, thiết kế hiện đại, vận hành mạnh mẽ.',
            gia: '500000000',
            category: 'Xe Đặc Biệt',
            size: 'Sedan cỡ C',
            serves: '5 người',
            flavor: 'Xăng 2.0L',
            tags: ['đặc biệt', 'cao cấp'],
            images: ['./ảnh/default-cake.jpg']
        };
    }

    // Cập nhật breadcrumb
    const catEl = document.getElementById('product-category');
    const nameEl = document.getElementById('product-name');
    if (catEl) catEl.textContent = product.category || 'Xe Hơi';
    if (nameEl) nameEl.textContent = product.tendv || 'Chi tiết';

    // Render nội dung
    renderProductDetail(product);
    setupEventListeners(product);
}

// ============================================
// 4. RENDER NỘI DUNG CHI TIẾT
// ============================================

function renderProductDetail(product) {
    const container = document.getElementById('product-detail-content');
    if (!container) return;

    const images = product.images && product.images.length ? product.images : [product.anh || './ảnh/default-cake.jpg'];
    const formattedPrice = formatPrice(product.gia);

    let imagesHTML = images.map((img, idx) => `
        <div class="thumbnail ${idx === 0 ? 'active' : ''}" data-image="${img}" onclick="changeProductImage('${img}')">
            <img src="${img}" alt="Ảnh ${idx+1}" onerror="this.src='./ảnh/default-cake.jpg'">
        </div>
    `).join('');

    let tagsHTML = (product.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('');

    container.innerHTML = `
        <div class="product-detail-content">
            <!-- Cột ảnh -->
            <div class="product-images-section">
                <div class="main-image-container">
                    <img src="${images[0]}" alt="${product.tendv}" id="main-product-image" onerror="this.src='./ảnh/default-cake.jpg'">
                    <div class="image-badge ${product.category.includes('Sedan') ? 'sedan' : product.category.includes('SUV') ? 'suv' : 'sport'}">
                        ${product.category.includes('Sedan') ? '🚗' : product.category.includes('SUV') ? '🚙' : '🏎️'}
                    </div>
                </div>
                <div class="thumbnail-gallery">${imagesHTML}</div>
            </div>

            <!-- Cột thông tin -->
            <div class="product-info-section">
                <div class="product-header">
                    <h1 class="product-title">${product.tendv}</h1>
                    <div class="product-meta">
                        <span class="category-badge">${product.category}</span>
                        <span class="rating">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                            <span class="rating-text">4.5 (128 đánh giá)</span>
                        </span>
                    </div>
                </div>

                <div class="product-price-section">
                    <div class="current-price">${formattedPrice} VNĐ</div>
                    <div class="price-details">
                        <span class="original-price">${formatPrice(parseInt(product.gia)*1.2)} VNĐ</span>
                        <span class="discount">Tiết kiệm 20%</span>
                    </div>
                    <div class="installment"><i class="fas fa-credit-card"></i> Trả góp 0% qua thẻ tín dụng</div>
                </div>

                <div class="basic-info">
                    <div class="info-item"><i class="fas fa-car"></i><div><div class="info-label">Dòng xe</div><div class="info-value">${product.size}</div></div></div>
                    <div class="info-item"><i class="fas fa-users"></i><div><div class="info-label">Chỗ ngồi</div><div class="info-value">${product.serves}</div></div></div>
                    <div class="info-item"><i class="fas fa-gas-pump"></i><div><div class="info-label">Nhiên liệu</div><div class="info-value">${product.flavor || 'Xăng'}</div></div></div>
                </div>

                <div class="quantity-section">
                    <label>Số lượng:</label>
                    <div class="quantity-control">
                        <button class="quantity-btn minus" onclick="changeQuantity(-1)"><i class="fas fa-minus"></i></button>
                        <input type="number" id="quantity" value="1" min="1" max="99" onchange="validateQuantity(this)">
                        <button class="quantity-btn plus" onclick="changeQuantity(1)"><i class="fas fa-plus"></i></button>
                    </div>
                    <div class="stock-info"><i class="fas fa-check-circle"></i> Còn hàng - Giao xe trong 2 giờ</div>
                </div>

                <div class="action-buttons">
                    <button class="btn-add-to-cart" onclick="addToCartFromDetail()"><i class="fas fa-cart-plus"></i> <span>Thêm vào giỏ</span></button>
                    <button class="btn-buy-now" onclick="buyNow()"><i class="fas fa-bolt"></i> <span>Mua ngay</span></button>
                    <button class="btn-wishlist" onclick="addToWishlist()"><i class="far fa-heart"></i></button>
                </div>

                <div class="product-tags">${tagsHTML}</div>
            </div>
        </div>

        <!-- Phần mô tả chi tiết -->
        <div class="product-description-section">
            <div class="section-tabs">
                <button class="tab-btn active" onclick="switchTab('description')">Mô tả</button>
                <button class="tab-btn" onclick="switchTab('specs')">Thông số kỹ thuật</button>
                <button class="tab-btn" onclick="switchTab('reviews')">Đánh giá</button>
                <button class="tab-btn" onclick="switchTab('policy')">Chính sách</button>
            </div>

            <div class="tab-content active" id="description-tab">
                <div class="description-content">${product.tt1.split('\n').map(line => `<p>${line}</p>`).join('')}</div>
                <div class="features-grid">
                    <div class="feature"><i class="fas fa-shield-alt"></i><h4>An toàn tuyệt đối</h4><p>Hệ thống an toàn tiên tiến</p></div>
                    <div class="feature"><i class="fas fa-clock"></i><h4>Giao xe nhanh</h4><p>Giao trong 2 giờ nội thành</p></div>
                    <div class="feature"><i class="fas fa-headset"></i><h4>Hỗ trợ 24/7</h4><p>Đội ngũ tư vấn chuyên nghiệp</p></div>
                    <div class="feature"><i class="fas fa-undo"></i><h4>Đổi trả dễ dàng</h4><p>Đổi trả trong 24 giờ</p></div>
                </div>
            </div>

            <div class="tab-content" id="specs-tab">
                <div class="nutrition-info">
                    <h3>Thông số kỹ thuật</h3>
                    <div class="nutrition-grid">
                        <div class="nutrition-item"><div class="nutrition-label">Động cơ</div><div class="nutrition-value">${product.flavor || 'Xăng 2.0L'}</div><div class="nutrition-bar" style="width:100%"></div></div>
                        <div class="nutrition-item"><div class="nutrition-label">Công suất</div><div class="nutrition-value">150 mã lực</div><div class="nutrition-bar" style="width:80%"></div></div>
                        <div class="nutrition-item"><div class="nutrition-label">Tiêu hao</div><div class="nutrition-value">6.5 L/100km</div><div class="nutrition-bar" style="width:60%"></div></div>
                        <div class="nutrition-item"><div class="nutrition-label">Chỗ ngồi</div><div class="nutrition-value">${product.serves}</div><div class="nutrition-bar" style="width:100%"></div></div>
                    </div>
                    <div class="nutrition-tip"><i class="fas fa-info-circle"></i> <strong>Lưu ý:</strong> Thông số kỹ thuật có thể thay đổi tùy phiên bản.</div>
                </div>
            </div>

            <div class="tab-content" id="reviews-tab">
                <div class="reviews-section">
                    <h3>Đánh giá từ khách hàng</h3>
                    <div class="average-rating">
                        <div class="rating-number">4.5/5</div>
                        <div class="rating-stars">${'<i class="fas fa-star"></i>'.repeat(4)}<i class="fas fa-star-half-alt"></i></div>
                        <div class="rating-count">128 đánh giá</div>
                    </div>
                    <div class="review-list">
                        <div class="review"><div class="review-header"><img src="https://i.pravatar.cc/150?img=1" class="review-avatar"><div><div class="review-name">Nguyễn Văn A</div><div class="review-date">20/01/2024</div></div></div><div class="review-rating">${'<i class="fas fa-star"></i>'.repeat(5)}</div><div class="review-text">"Xe rất tốt, tiết kiệm nhiên liệu, nội thất rộng rãi. Rất hài lòng!"</div></div>
                        <div class="review"><div class="review-header"><img src="https://i.pravatar.cc/150?img=2" class="review-avatar"><div><div class="review-name">Trần Thị B</div><div class="review-date">15/01/2024</div></div></div><div class="review-rating">${'<i class="fas fa-star"></i>'.repeat(4)}<i class="far fa-star"></i></div><div class="review-text">"Chất lượng tốt, giao xe đúng giờ. Sẽ ủng hộ lần sau."</div></div>
                    </div>
                    <div class="write-review-btn"><button onclick="viewAllReviews()"><i class="fas fa-edit"></i> Viết đánh giá của bạn</button></div>
                </div>
            </div>

            <div class="tab-content" id="policy-tab">
                <div class="policy-section">
                    <h3>Chính sách mua xe</h3>
                    <div class="policy-list">
                        <div class="policy-item"><i class="fas fa-shipping-fast"></i><div><h4>Giao xe</h4><p>• Miễn phí giao trong nội thành<br>• Giao trong 2 giờ (8:00 - 20:00)<br>• Giao ngoại thành trong 24h</p></div></div>
                        <div class="policy-item"><i class="fas fa-exchange-alt"></i><div><h4>Đổi trả</h4><p>• Đổi trả trong 24 giờ nếu lỗi từ NSX<br>• Hoàn tiền 100% nếu không đúng mô tả<br>• Liên hệ hotline: 0937 881 148</p></div></div>
                        <div class="policy-item"><i class="fas fa-calendar-alt"></i><div><h4>Đặt xe trước</h4><p>• Đặt trước 7 ngày đối với xe nhập khẩu<br>• Đặt trước 3 ngày đối với xe trong nước<br>• Đặt trước 1 ngày đối với xe có sẵn</p></div></div>
                        <div class="policy-item"><i class="fas fa-credit-card"></i><div><h4>Thanh toán</h4><p>• COD (nhận hàng thanh toán)<br>• Chuyển khoản ngân hàng<br>• Thẻ tín dụng (trả góp 0%)</p></div></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sản phẩm liên quan -->
        <div class="related-products-section">
            <h2>Xe liên quan</h2>
            <div class="related-products" id="related-products"></div>
        </div>
    `;

    // Hiển thị sản phẩm liên quan
    showRelatedProducts(product);
}

// ============================================
// 5. SẢN PHẨM LIÊN QUAN
// ============================================

function showRelatedProducts(currentProduct) {
    const container = document.getElementById('related-products');
    if (!container) return;
    const related = Object.values(CAR_DATABASE)
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);
    if (!related.length) {
        container.innerHTML = '<p style="text-align:center;color:#999;">Không có xe liên quan.</p>';
        return;
    }
    container.innerHTML = related.map(p => `
        <div class="related-product" onclick="viewProduct('${p.id}')">
            <img src="${p.anh}" alt="${p.tendv}" onerror="this.src='./ảnh/default-cake.jpg'">
            <div class="related-product-info">
                <div class="related-product-name">${p.tendv}</div>
                <div class="related-product-price">${formatPrice(p.gia)} VNĐ</div>
                <div class="related-product-size">${p.size}</div>
            </div>
        </div>
    `).join('');
}

// ============================================
// 6. CÁC HÀM XỬ LÝ SỰ KIỆN
// ============================================

function changeProductImage(imageUrl) {
    const main = document.getElementById('main-product-image');
    if (main) {
        main.src = imageUrl;
        main.onerror = function() { this.src = './ảnh/default-cake.jpg'; };
    }
    document.querySelectorAll('.thumbnail').forEach(el => {
        el.classList.toggle('active', el.dataset.image === imageUrl);
    });
}

function changeQuantity(delta) {
    const input = document.getElementById('quantity');
    if (!input) return;
    let val = parseInt(input.value) + delta;
    if (val < 1) val = 1;
    if (val > 99) val = 99;
    input.value = val;
}

function validateQuantity(input) {
    let val = parseInt(input.value);
    if (isNaN(val) || val < 1) input.value = 1;
    else if (val > 99) input.value = 99;
}

function addToCartFromDetail() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!product) { showNotification('Không tìm thấy sản phẩm', 'error'); return; }
    const qtyInput = document.getElementById('quantity');
    const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;

    if (!localStorage.getItem('currentUser')) {
        showNotification('Vui lòng đăng nhập để thêm vào giỏ hàng!', 'warning');
        setTimeout(() => window.location.href = 'login.html', 1500);
        return;
    }

    const cm = getCartManager();
    if (cm.addToCart(product, qty)) {
        showNotification(`Đã thêm ${qty} "${product.tendv}" vào giỏ hàng!`, 'success');
        updateCartBadge();
        const btn = document.querySelector('.btn-add-to-cart');
        if (btn) {
            const old = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> <span>Đã thêm</span>';
            btn.style.background = '#4CAF50';
            setTimeout(() => { btn.innerHTML = old; btn.style.background = ''; }, 1000);
        }
    } else {
        showNotification('Không thể thêm sản phẩm vào giỏ hàng!', 'error');
    }
}

function buyNow() {
    addToCartFromDetail();
    setTimeout(() => window.location.href = 'sop.html', 800);
}

function addToWishlist() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    if (!product) return;
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.some(item => item.id === product.id)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        const btn = document.querySelector('.btn-wishlist');
        if (btn) { btn.innerHTML = '<i class="fas fa-heart"></i>'; btn.style.color = '#e91e63'; }
        showNotification('Đã thêm vào danh sách yêu thích!', 'success');
    } else {
        showNotification('Sản phẩm đã có trong danh sách yêu thích!', 'info');
    }
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    const content = document.getElementById(`${tabName}-tab`);
    if (content) content.classList.add('active');
    const btn = document.querySelector(`.tab-btn[onclick="switchTab('${tabName}')"]`);
    if (btn) btn.classList.add('active');
}

function viewAllReviews() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    const reviews = getSampleReviews(product);
    const modal = document.createElement('div');
    modal.className = 'reviews-modal';
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:10000;display:flex;justify-content:center;align-items:center;padding:20px;';
    modal.innerHTML = `
        <div class="modal-content" style="background:white;border-radius:15px;padding:30px;max-width:800px;width:100%;max-height:80vh;overflow-y:auto;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;border-bottom:1px solid #eee;padding-bottom:15px;">
                <h2 style="margin:0;">Đánh giá sản phẩm</h2>
                <button onclick="this.closest('.reviews-modal').remove()" style="background:none;border:none;font-size:24px;cursor:pointer;">&times;</button>
            </div>
            ${reviews.map(r => `
                <div style="padding:15px 0;border-bottom:1px solid #eee;">
                    <div style="display:flex;align-items:center;gap:15px;margin-bottom:8px;">
                        <img src="${r.avatar}" style="width:40px;height:40px;border-radius:50%;object-fit:cover;">
                        <div><strong>${r.name}</strong> <span style="color:#999;font-size:14px;">${r.date}</span></div>
                    </div>
                    <div style="color:#ff9800;">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
                    <div style="margin-top:5px;">${r.comment}</div>
                </div>
            `).join('')}
        </div>
    `;
    document.body.appendChild(modal);
}

function getSampleReviews(product) {
    return [
        { name: 'Nguyễn Văn A', avatar: 'https://i.pravatar.cc/150?img=1', rating: 5, date: '20/01/2024', comment: 'Xe rất tốt, tiết kiệm nhiên liệu, nội thất rộng rãi.' },
        { name: 'Trần Thị B', avatar: 'https://i.pravatar.cc/150?img=2', rating: 4, date: '15/01/2024', comment: 'Chất lượng tốt, giao xe đúng giờ. Sẽ ủng hộ lần sau.' },
        { name: 'Lê Văn C', avatar: 'https://i.pravatar.cc/150?img=3', rating: 5, date: '10/01/2024', comment: 'Tuyệt vời! Xe đẹp như hình, vận hành mạnh mẽ.' }
    ];
}

function viewProduct(productId) {
    if (CAR_DATABASE[productId]) {
        localStorage.setItem('selectedProduct', JSON.stringify(CAR_DATABASE[productId]));
        window.location.href = `product-detail.html?id=${productId}`;
    }
}

function setupEventListeners(product) {
    const input = document.getElementById('quantity');
    if (input) input.addEventListener('keypress', e => { if (e.key === 'Enter') addToCartFromDetail(); });

    // Kiểm tra wishlist
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const wishBtn = document.querySelector('.btn-wishlist');
    if (wishBtn && isInWishlist) {
        wishBtn.innerHTML = '<i class="fas fa-heart"></i>';
        wishBtn.style.color = '#e91e63';
    }
}

// ============================================
// 7. KHỞI TẠO KHI DOM SẴN SÀNG
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Khởi tạo trang chi tiết sản phẩm...');
    if (!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify([]));
    if (!localStorage.getItem('wishlist')) localStorage.setItem('wishlist', JSON.stringify([]));
    displayProductDetail();
    updateCartBadge();
    // Thêm style nếu chưa có
    if (!document.querySelector('#product-detail-styles')) {
        const style = document.createElement('style');
        style.id = 'product-detail-styles';
        style.textContent = `
            .product-detail-content { display:flex; flex-wrap:wrap; gap:40px; margin:30px 0; }
            .product-images-section { flex:1; min-width:300px; }
            .main-image-container { position:relative; border-radius:12px; overflow:hidden; box-shadow:0 8px 25px rgba(0,0,0,0.1); }
            .main-image-container img { width:100%; height:400px; object-fit:cover; }
            .image-badge { position:absolute; top:15px; left:15px; background:rgba(0,0,0,0.7); color:#fff; padding:8px 14px; border-radius:30px; font-size:20px; }
            .thumbnail-gallery { display:flex; gap:10px; margin-top:15px; flex-wrap:wrap; }
            .thumbnail { width:80px; height:80px; border-radius:8px; overflow:hidden; cursor:pointer; border:2px solid transparent; transition:0.3s; }
            .thumbnail.active { border-color:#667eea; }
            .thumbnail img { width:100%; height:100%; object-fit:cover; }
            .product-info-section { flex:1; min-width:300px; }
            .product-title { font-size:28px; color:#333; margin-bottom:10px; }
            .product-meta { display:flex; gap:20px; align-items:center; flex-wrap:wrap; margin-bottom:15px; }
            .category-badge { background:#667eea; color:#fff; padding:4px 12px; border-radius:20px; font-size:14px; }
            .rating { color:#ff9800; }
            .rating-text { color:#666; margin-left:8px; }
            .product-price-section { background:#f9f9f9; padding:20px; border-radius:12px; margin-bottom:20px; }
            .current-price { font-size:32px; font-weight:bold; color:#e91e63; }
            .price-details { display:flex; gap:15px; align-items:center; margin-top:8px; }
            .original-price { text-decoration:line-through; color:#999; font-size:18px; }
            .discount { background:#4CAF50; color:#fff; padding:2px 10px; border-radius:20px; font-size:14px; }
            .installment { margin-top:10px; color:#555; font-size:14px; }
            .basic-info { display:grid; grid-template-columns:repeat(auto-fit,minmax(140px,1fr)); gap:15px; margin:20px 0; }
            .info-item { display:flex; align-items:center; gap:12px; background:#f5f5f5; padding:12px; border-radius:10px; }
            .info-item i { font-size:20px; color:#667eea; }
            .info-label { font-size:12px; color:#999; }
            .info-value { font-weight:600; color:#333; }
            .quantity-section { display:flex; align-items:center; gap:20px; margin:20px 0; flex-wrap:wrap; }
            .quantity-control { display:flex; align-items:center; gap:10px; }
            .quantity-btn { width:36px; height:36px; border:1px solid #ddd; border-radius:6px; background:#fff; cursor:pointer; font-size:18px; transition:0.3s; }
            .quantity-btn:hover { background:#667eea; color:#fff; border-color:#667eea; }
            .quantity-control input { width:60px; height:36px; text-align:center; border:1px solid #ddd; border-radius:6px; font-size:16px; }
            .stock-info { color:#4CAF50; font-weight:500; }
            .action-buttons { display:flex; gap:12px; flex-wrap:wrap; margin:20px 0; }
            .btn-add-to-cart, .btn-buy-now { padding:14px 30px; border:none; border-radius:8px; font-weight:600; cursor:pointer; transition:0.3s; display:flex; align-items:center; gap:8px; }
            .btn-add-to-cart { background:linear-gradient(135deg,#667eea,#764ba2); color:#fff; }
            .btn-add-to-cart:hover { transform:translateY(-3px); box-shadow:0 8px 20px rgba(102,126,234,0.3); }
            .btn-buy-now { background:#e91e63; color:#fff; }
            .btn-buy-now:hover { transform:translateY(-3px); box-shadow:0 8px 20px rgba(233,30,99,0.3); }
            .btn-wishlist { width:50px; height:50px; border-radius:50%; border:1px solid #ddd; background:#fff; cursor:pointer; font-size:20px; transition:0.3s; display:flex; align-items:center; justify-content:center; }
            .btn-wishlist:hover { background:#f5f5f5; border-color:#e91e63; }
            .product-tags { display:flex; flex-wrap:wrap; gap:8px; margin-top:15px; }
            .product-tags .tag { background:#f0f0f0; padding:4px 14px; border-radius:20px; font-size:13px; color:#333; }
            .product-description-section { margin-top:40px; border-top:2px solid #eee; padding-top:30px; }
            .section-tabs { display:flex; gap:5px; border-bottom:2px solid #eee; margin-bottom:25px; flex-wrap:wrap; }
            .tab-btn { padding:12px 24px; background:none; border:none; font-weight:600; color:#666; cursor:pointer; border-bottom:3px solid transparent; transition:0.3s; }
            .tab-btn.active { color:#667eea; border-bottom-color:#667eea; }
            .tab-content { display:none; padding:20px 0; }
            .tab-content.active { display:block; }
            .description-content p { line-height:1.8; color:#555; margin-bottom:12px; }
            .features-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:20px; margin-top:30px; }
            .feature { background:#f9f9f9; padding:20px; border-radius:12px; text-align:center; }
            .feature i { font-size:30px; color:#667eea; margin-bottom:10px; }
            .feature h4 { margin-bottom:5px; color:#333; }
            .feature p { color:#666; font-size:14px; }
            .nutrition-grid { display:grid; grid-template-columns:1fr; gap:15px; }
            .nutrition-item { display:grid; grid-template-columns:120px 1fr 60px; align-items:center; gap:10px; }
            .nutrition-label { font-weight:600; color:#333; }
            .nutrition-value { color:#666; }
            .nutrition-bar { height:8px; background:#eee; border-radius:4px; overflow:hidden; background:linear-gradient(90deg,#667eea, #764ba2); }
            .nutrition-tip { margin-top:20px; background:#f0f8ff; padding:12px; border-radius:8px; color:#555; }
            .reviews-section h3 { margin-bottom:20px; }
            .average-rating { display:flex; align-items:center; gap:20px; flex-wrap:wrap; background:#f5f5f5; padding:15px; border-radius:10px; }
            .rating-number { font-size:28px; font-weight:bold; color:#333; }
            .rating-stars { color:#ff9800; font-size:20px; }
            .rating-count { color:#666; }
            .review { padding:15px 0; border-bottom:1px solid #eee; }
            .review-header { display:flex; align-items:center; gap:12px; margin-bottom:8px; }
            .review-avatar { width:40px; height:40px; border-radius:50%; object-fit:cover; }
            .review-name { font-weight:600; }
            .review-date { color:#999; font-size:13px; }
            .review-rating { color:#ff9800; }
            .review-text { margin-top:5px; color:#555; }
            .write-review-btn { text-align:center; margin-top:20px; }
            .write-review-btn button { background:linear-gradient(135deg,#667eea,#764ba2); color:#fff; border:none; padding:12px 30px; border-radius:8px; cursor:pointer; font-weight:bold; display:inline-flex; align-items:center; gap:10px; }
            .policy-list { display:grid; grid-template-columns:1fr; gap:20px; }
            .policy-item { display:flex; gap:15px; background:#f9f9f9; padding:20px; border-radius:12px; align-items:flex-start; }
            .policy-item i { font-size:24px; color:#667eea; margin-top:3px; }
            .policy-item h4 { margin-bottom:5px; color:#333; }
            .policy-item p { color:#555; line-height:1.6; }
            .related-products-section { margin-top:50px; padding-top:30px; border-top:2px solid #eee; }
            .related-products-section h2 { text-align:center; margin-bottom:30px; }
            .related-products { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:20px; }
            .related-product { background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.08); cursor:pointer; transition:0.3s; }
            .related-product:hover { transform:translateY(-5px); box-shadow:0 10px 25px rgba(0,0,0,0.12); }
            .related-product img { width:100%; height:150px; object-fit:cover; }
            .related-product-info { padding:12px; text-align:center; }
            .related-product-name { font-weight:600; color:#333; margin-bottom:5px; }
            .related-product-price { color:#e91e63; font-weight:bold; }
            .related-product-size { color:#999; font-size:13px; }
            @media (max-width:768px){ .product-detail-content{flex-direction:column;} .main-image-container img{height:250px;} .nutrition-item{grid-template-columns:1fr;} }
        `;
        document.head.appendChild(style);
    }
});

// Export ra global để các inline onclick hoạt động
window.formatPrice = formatPrice;
window.changeProductImage = changeProductImage;
window.changeQuantity = changeQuantity;
window.validateQuantity = validateQuantity;
window.addToCartFromDetail = addToCartFromDetail;
window.buyNow = buyNow;
window.addToWishlist = addToWishlist;
window.switchTab = switchTab;
window.viewAllReviews = viewAllReviews;
window.viewProduct = viewProduct;
window.showNotification = showNotification;
window.updateCartBadge = updateCartBadge;

console.log('product-detail.js đã sẵn sàng!');