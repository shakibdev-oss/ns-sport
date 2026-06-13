// script.js

const WHATSAPP_NUMBER = '7061975082';
const CALL_NUMBER = '7061975082';
const DELIVERY_FEE = 99;
const FREE_DELIVERY_THRESHOLD = 1999;

let currentLang = localStorage.getItem('ns_lang') || 'en';
let cart = JSON.parse(localStorage.getItem('ns_cart')) || [];

// Recently Viewed Management
const RECENT_PRODUCTS_KEY = 'ns_recent_products';
function getRecentProductIds() {
    try {
        const stored = localStorage.getItem(RECENT_PRODUCTS_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}
function addRecentProductId(id) {
    let ids = getRecentProductIds();
    ids = ids.filter(pid => pid !== id); // remove if exists
    ids.unshift(id); // add to top
    if (ids.length > 4) ids.pop(); // keep only max 4
    localStorage.setItem(RECENT_PRODUCTS_KEY, JSON.stringify(ids));
}

document.addEventListener('DOMContentLoaded', () => {
    
    // Language Setup
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('ns_lang', lang);
        
        // Update active class on buttons
        document.getElementById('lang-en').classList.toggle('active', lang === 'en');
        document.getElementById('lang-hi').classList.toggle('active', lang === 'hi');
        
        // Translate HTML text nodes
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if(el.tagName.toLowerCase() === 'input' && el.type === 'text') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerText = translations[lang][key];
                }
            }
        });
        
        // Re-render components
        renderAllGrids();
        renderCartDrawer();
        
        // Re-render product modal if open
        const productDetailModal = document.getElementById('product-detail-modal');
        if (productDetailModal && productDetailModal.style.display === 'block') {
            const currentlyViewed = productDetailModal.getAttribute('data-current-product');
            if (currentlyViewed) {
                openProductDetailModal(currentlyViewed);
            }
        }
    }

    document.getElementById('lang-en').addEventListener('click', () => applyLanguage('en'));
    document.getElementById('lang-hi').addEventListener('click', () => applyLanguage('hi'));

    // Render Logic
    function renderGrid(containerId, productsList) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let html = '';
        const langData = translations[currentLang];

        if (productsList.length === 0) {
            container.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center;">No products found.</p>`;
            return;
        }

        productsList.forEach(product => {
            const localizedProduct = currentLang === 'hi' && product.hi ? { ...product, ...product.hi } : product;
            
            let badgeClass = '';
            if (product.badge === 'Best Seller') badgeClass = 'badge-bestseller';
            else if (product.badge === 'New Arrival') badgeClass = 'badge-newarrival';
            else if (product.badge === 'Top Rated') badgeClass = 'badge-toprated';

            const badgeHtml = product.badge ? `<div class="card-badge ${badgeClass}">${product.badge}</div>` : '';

            html += `
                <div class="product-card">
                    ${badgeHtml}
                    <div class="product-img-container view-product-btn" data-id="${product.id}">
                        <img src="${product.images[0]}" alt="${localizedProduct.name}">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${localizedProduct.category}</div>
                        <h3 class="view-product-btn" data-id="${product.id}">${localizedProduct.name}</h3>
                        
                        <div class="rating-assured-row">
                            <span class="green-rating">${product.rating} <i class="fas fa-star" style="font-size:0.7rem;"></i></span>
                            <span class="rating-count">(${product.reviewsCount} Ratings)</span>
                            <span class="assured-badge"><span class="check"><i class="fas fa-check"></i></span> ${langData.badge_assured || 'Assured'}</span>
                        </div>

                        <div class="price-row">
                            <span class="sale-price">₹${product.price}</span>
                            <span class="orig-price">₹${product.originalPrice}</span>
                            <span class="discount-pct">${product.discount}</span>
                        </div>
                        
                        <div class="stock-urgency">${product.stockUrgency}</div>

                        <div class="product-actions">
                            <button class="btn btn-outline view-product-btn" data-id="${product.id}" style="width: 100%; margin-bottom: 10px;">${langData.prod_view_details}</button>
                            <div class="action-btn-row">
                                <button class="btn btn-primary add-to-cart-btn" data-id="${product.id}">
                                    <i class="fas fa-cart-plus"></i> ${langData.prod_add_cart || 'Add'}
                                </button>
                                <button class="btn btn-whatsapp order-btn" data-id="${product.id}">
                                    <i class="fab fa-whatsapp"></i> ${langData.prod_order_wa || 'Order'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    let searchQuery = "";
    document.getElementById('product-search-input').addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderAllGrids();
    });

    function renderAllGrids() {
        let filteredProducts = searchProducts(searchQuery);
        
        let combos = filteredProducts.filter(p => p.category === 'Combo Offers');
        let bestSellers = filteredProducts.filter(p => p.badge === 'Best Seller' && p.category !== 'Combo Offers');
        let newArrivals = filteredProducts.filter(p => p.badge === 'New Arrival' && p.category !== 'Combo Offers');
        
        renderGrid('combos-products-container', combos);
        renderGrid('bestsellers-products-container', bestSellers);
        renderGrid('newarrivals-products-container', newArrivals);
        
        const recentIds = getRecentProductIds();
        const recentSection = document.getElementById('recently-viewed-section');
        if (recentIds.length > 0 && recentSection) {
            recentSection.style.display = 'block';
            let recentProducts = getProductsByIds(recentIds);
            if (searchQuery) {
                recentProducts = recentProducts.filter(p => 
                    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    p.category.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }
            renderGrid('recent-products-container', recentProducts);
        } else if (recentSection) {
            recentSection.style.display = 'none';
        }
    }

    // Modal Elements
    const orderModal = document.getElementById('order-modal');
    const productDetailModal = document.getElementById('product-detail-modal');
    const reviewModal = document.getElementById('review-modal');
    const orderForm = document.getElementById('order-form');
    const reviewForm = document.getElementById('review-form');
    const productDetailContainer = document.getElementById('product-detail-container');
    const giveReviewBtn = document.getElementById('give-review-btn');

    // Cart Elements
    const cartDrawer = document.getElementById('cart-drawer');
    const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
    const openCartBtn = document.getElementById('open-cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartCountEl = document.getElementById('cart-count');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Initial render
    applyLanguage(currentLang);

    // Close Modals
    document.querySelectorAll('.close-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if(orderModal) orderModal.style.display = 'none';
            if(productDetailModal) {
                productDetailModal.style.display = 'none';
                productDetailModal.removeAttribute('data-current-product');
            }
            if(reviewModal) reviewModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === orderModal) orderModal.style.display = 'none';
        if (e.target === productDetailModal) {
            productDetailModal.style.display = 'none';
            productDetailModal.removeAttribute('data-current-product');
        }
        if (e.target === reviewModal) reviewModal.style.display = 'none';
        if (e.target === cartDrawerOverlay) toggleCartDrawer(false);
    });
    
    // Open Review Modal
    if (giveReviewBtn) {
        giveReviewBtn.addEventListener('click', () => {
            if(reviewModal) reviewModal.style.display = 'block';
        });
    }

    // Cart Drawer Toggle
    function toggleCartDrawer(show) {
        if (show) {
            cartDrawer.classList.add('open');
            cartDrawerOverlay.style.display = 'block';
        } else {
            cartDrawer.classList.remove('open');
            cartDrawerOverlay.style.display = 'none';
        }
    }
    openCartBtn.addEventListener('click', () => toggleCartDrawer(true));
    closeCartBtn.addEventListener('click', () => toggleCartDrawer(false));

    // Cart Logic
    function saveCart() {
        localStorage.setItem('ns_cart', JSON.stringify(cart));
        renderCartDrawer();
    }

    function addToCart(productId) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }
        saveCart();
        showToast(translations[currentLang].toast_add_cart || "Added to cart successfully.");
    }

    function updateCartQuantity(productId, delta) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                cart = cart.filter(i => i.id !== productId);
            }
            saveCart();
        }
    }

    function removeCartItem(productId) {
        cart = cart.filter(i => i.id !== productId);
        saveCart();
    }

    clearCartBtn.addEventListener('click', () => {
        cart = [];
        saveCart();
    });

    function getCartTotals() {
        let subtotal = 0;
        let count = 0;
        cart.forEach(item => {
            const product = getProductById(item.id);
            if (product) {
                subtotal += product.price * item.quantity;
                count += item.quantity;
            }
        });
        
        let delivery = (subtotal > 0 && subtotal < FREE_DELIVERY_THRESHOLD) ? DELIVERY_FEE : 0;
        let total = subtotal + delivery;
        
        return { subtotal, delivery, total, count };
    }

    function renderCartDrawer() {
        const langData = translations[currentLang];
        const totals = getCartTotals();
        
        cartCountEl.innerText = totals.count;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="cart-empty-state">
                    <i class="fas fa-shopping-basket"></i>
                    <p>${langData.cart_empty}</p>
                </div>
            `;
        } else {
            let html = '';
            cart.forEach(item => {
                const product = getProductById(item.id);
                if (!product) return;
                const localizedProduct = currentLang === 'hi' && product.hi ? { ...product, ...product.hi } : product;
                
                html += `
                    <div class="cart-item">
                        <div class="cart-item-img">
                            <img src="${product.images[0]}" alt="">
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-title">${localizedProduct.name}</div>
                            <div class="cart-item-price">₹${product.price}</div>
                            <div class="cart-item-actions">
                                <div class="qty-controls">
                                    <button class="qty-btn dec-qty" data-id="${item.id}">-</button>
                                    <div class="qty-val">${item.quantity}</div>
                                    <button class="qty-btn inc-qty" data-id="${item.id}">+</button>
                                </div>
                                <i class="fas fa-trash-alt remove-btn" data-id="${item.id}"></i>
                            </div>
                        </div>
                    </div>
                `;
            });
            cartItemsContainer.innerHTML = html;
        }

        document.getElementById('cart-subtotal-val').innerText = `₹${totals.subtotal}`;
        
        if (totals.subtotal >= FREE_DELIVERY_THRESHOLD || totals.subtotal === 0) {
            document.getElementById('cart-delivery-val').innerText = langData.cart_free_delivery || `Free (Above ₹1999)`;
            document.getElementById('cart-delivery-val').style.color = "var(--success)";
        } else {
            document.getElementById('cart-delivery-val').innerText = `₹${totals.delivery}`;
            document.getElementById('cart-delivery-val').style.color = "#fff";
        }
        
        document.getElementById('cart-total-val').innerText = `₹${totals.total}`;
        
        // Disable checkout if empty
        checkoutBtn.disabled = cart.length === 0;
        checkoutBtn.style.opacity = cart.length === 0 ? "0.5" : "1";
    }

    // Handle Clicks (Event Delegation)
    document.body.addEventListener('click', function(e) {
        // Add to Cart
        const addToCartBtn = e.target.closest('.add-to-cart-btn');
        if (addToCartBtn) {
            const productId = addToCartBtn.getAttribute('data-id');
            addToCart(productId);
        }

        // Cart Qty Controls
        const decBtn = e.target.closest('.dec-qty');
        if (decBtn) {
            updateCartQuantity(decBtn.getAttribute('data-id'), -1);
        }
        const incBtn = e.target.closest('.inc-qty');
        if (incBtn) {
            updateCartQuantity(incBtn.getAttribute('data-id'), 1);
        }
        const removeBtn = e.target.closest('.remove-btn');
        if (removeBtn) {
            removeCartItem(removeBtn.getAttribute('data-id'));
        }

        // Open Checkout Modal
        const orderBtn = e.target.closest('.order-btn');
        if (orderBtn) {
            const productId = orderBtn.getAttribute('data-id');
            // If they clicked "Order" on a specific product, add it to cart and then checkout
            addToCart(productId);
            openCheckoutModal();
        }

        const checkoutDrawerBtn = e.target.closest('#checkout-btn');
        if (checkoutDrawerBtn && cart.length > 0) {
            toggleCartDrawer(false);
            openCheckoutModal();
        }

        // Open Product Detail Modal
        const viewBtn = e.target.closest('.view-product-btn');
        if (viewBtn) {
            const productId = viewBtn.getAttribute('data-id');
            addRecentProductId(productId);
            renderAllGrids(); 
            openProductDetailModal(productId);
        }

        // Copy Link Action
        const copyBtn = e.target.closest('.action-copy-btn');
        if (copyBtn) {
            const url = window.location.href.split('#')[0] + '#featured'; 
            navigator.clipboard.writeText(url).then(() => {
                showToast(translations[currentLang].toast_copy || "Product link copied successfully.");
            });
        }

        // Share Action
        const shareBtn = e.target.closest('.action-share-btn');
        if (shareBtn) {
            const productName = shareBtn.getAttribute('data-product');
            const url = window.location.href.split('#')[0];
            const text = `Check out this premium cricket gear: ${productName} at NS Sport!`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'NS Sport',
                    text: text,
                    url: url
                }).catch(console.error);
            } else {
                const waUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
                window.open(waUrl, '_blank');
            }
        }
    });

    function showToast(msg) {
        const toast = document.getElementById('toast');
        document.getElementById('toast-msg').innerText = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    function openCheckoutModal() {
        if(orderModal) {
            const paymentRadios = document.querySelectorAll('input[name="payment_method"]');
            paymentRadios.forEach(r => r.checked = false);
            document.getElementById('upi-details-box').style.display = 'none';
            document.getElementById('cod-details-box').style.display = 'none';

            // Generate Summary HTML
            const summaryBox = document.getElementById('checkout-summary-box');
            const totals = getCartTotals();
            let itemsHtml = cart.map(item => {
                const p = getProductById(item.id);
                const lp = currentLang === 'hi' && p.hi ? p.hi : p;
                return `<div style="display:flex; justify-content:space-between; margin-bottom:5px; font-size: 0.95rem;"><span>${item.quantity}x ${lp.name}</span> <span>₹${p.price * item.quantity}</span></div>`;
            }).join('');
            
            summaryBox.innerHTML = `
                ${itemsHtml}
                <hr style="border-color: rgba(255,255,255,0.1); margin: 10px 0;">
                <div style="display:flex; justify-content:space-between; font-size: 0.95rem; color:#bbb;"><span>Subtotal</span> <span>₹${totals.subtotal}</span></div>
                <div style="display:flex; justify-content:space-between; font-size: 0.95rem; color:#bbb;"><span>Delivery</span> <span>₹${totals.delivery}</span></div>
                <div style="display:flex; justify-content:space-between; font-weight:700; margin-top:5px;"><span>Total</span> <span style="color:var(--accent);">₹${totals.total}</span></div>
            `;

            orderModal.style.display = 'block';
            if(productDetailModal) {
                productDetailModal.style.display = 'none';
                productDetailModal.removeAttribute('data-current-product');
            }
        }
    }

    function openProductDetailModal(id) {
        const product = getProductById(id);
        if(!product || !productDetailModal) return;
        
        productDetailModal.setAttribute('data-current-product', id);
        const localizedProduct = currentLang === 'hi' && product.hi ? { ...product, ...product.hi } : product;
        const langData = translations[currentLang];

        let thumbnailsHtml = '';
        product.images.forEach((img, index) => {
            const activeClass = index === 0 ? 'active' : '';
            thumbnailsHtml += `
                <div class="thumbnail ${activeClass}" data-index="${index}" data-img="${img}">
                    <img src="${img}" alt="Thumbnail ${index + 1}" onerror="this.src='https://placehold.co/100x100/141414/FFC107?text=Image+${index+1}'">
                </div>
            `;
        });

        productDetailContainer.innerHTML = `
            <div class="gallery-container">
                <div class="main-image-box" id="main-image-box">
                    <img src="${product.images[0]}" alt="${localizedProduct.name}" id="main-product-image" onerror="this.src='https://placehold.co/600x600/141414/FFC107?text=No+Image'">
                </div>
                <div class="thumbnail-list" id="thumbnail-list">
                    ${thumbnailsHtml}
                </div>
            </div>
            
            <div class="product-detail-info">
                <div class="cat">${localizedProduct.category}</div>
                <h1>${localizedProduct.name}</h1>

                <div class="rating-assured-row" style="margin-bottom: 20px;">
                    <span class="green-rating">${product.rating} <i class="fas fa-star" style="font-size:0.8rem;"></i></span>
                    <span class="rating-count">(${product.reviewsCount} Ratings)</span>
                    <span class="assured-badge" style="font-size: 1rem;"><span class="check"><i class="fas fa-check"></i></span> ${langData.badge_assured || 'Assured'}</span>
                </div>

                <div class="price-row" style="margin-bottom: 20px;">
                    <span class="sale-price" style="font-size: 2.2rem;">₹${product.price}</span>
                    <span class="orig-price" style="font-size: 1.2rem;">₹${product.originalPrice}</span>
                    <span class="discount-pct" style="font-size: 1.2rem;">${product.discount}</span>
                </div>

                <p class="desc">${localizedProduct.description}</p>
                
                <div class="specs-box">
                    <h4>${langData.prod_specs}</h4>
                    <div class="specs-grid">
                        <div class="spec-item"><span class="lbl">${langData.prod_size}</span><span class="val">${localizedProduct.size}</span></div>
                        <div class="spec-item"><span class="lbl">${langData.prod_weight}</span><span class="val">${localizedProduct.weight}</span></div>
                    </div>
                </div>

                <div class="share-action-row">
                    <button class="btn-outline action-share-btn" data-product="${localizedProduct.name}"><i class="fas fa-share-alt"></i> ${langData.prod_share || 'Share'}</button>
                    <button class="btn-outline action-copy-btn"><i class="far fa-copy"></i> ${langData.prod_copy || 'Copy Link'}</button>
                </div>
                
                <div style="display:flex; flex-direction: column; gap:10px;">
                    <div style="display:flex; gap:10px;">
                        <button class="btn btn-primary add-to-cart-btn" style="flex:1; padding:15px; font-size:1.1rem;" data-id="${product.id}">
                            <i class="fas fa-cart-plus"></i> ${langData.prod_add_cart || 'Add to Cart'}
                        </button>
                        <a href="tel:${CALL_NUMBER}" class="btn btn-outline" style="flex:1; padding:15px; font-size:1.1rem; border-color:#fff;">
                            <i class="fas fa-phone-alt"></i> ${langData.prod_call_now || 'Call Now'}
                        </a>
                    </div>
                    <button class="btn btn-whatsapp order-btn" style="padding: 15px; font-size: 1.1rem; width: 100%;" data-id="${product.id}">
                        <i class="fab fa-whatsapp"></i> ${langData.prod_order_wa || 'Order on WhatsApp'}
                    </button>
                </div>
            </div>
        `;

        productDetailModal.style.display = 'block';

        // Setup gallery logic within modal
        const mainImage = document.getElementById('main-product-image');
        const mainImageBox = document.getElementById('main-image-box');
        const thumbnails = productDetailContainer.querySelectorAll('.thumbnail');
        
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                mainImage.src = this.getAttribute('data-img');
            });
        });
        
        mainImageBox.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const xPos = ((e.clientX - rect.left) / rect.width) * 100;
            const yPos = ((e.clientY - rect.top) / rect.height) * 100;
            mainImage.style.transformOrigin = `${xPos}% ${yPos}%`;
            mainImage.style.transform = 'scale(2.5)';
        });
        mainImageBox.addEventListener('mouseleave', function() {
            mainImage.style.transformOrigin = 'center center';
            mainImage.style.transform = 'scale(1)';
        });
    }

    // Handle Payment Method Toggle
    const paymentRadios = document.querySelectorAll('input[name="payment_method"]');
    const upiBox = document.getElementById('upi-details-box');
    const codBox = document.getElementById('cod-details-box');

    paymentRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'upi') {
                upiBox.style.display = 'block';
                codBox.style.display = 'none';
            } else {
                upiBox.style.display = 'none';
                codBox.style.display = 'block';
            }
        });
    });

    // Handle Order Form Submit
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('order-name').value.trim();
            const mobile = document.getElementById('order-mobile').value.trim();
            const email = document.getElementById('order-email').value.trim();
            const address = document.getElementById('order-address').value.trim();
            const city = document.getElementById('order-city').value.trim();
            const state = document.getElementById('order-state').value.trim();
            const pincode = document.getElementById('order-pincode').value.trim();
            
            const selectedPaymentRadio = document.querySelector('input[name="payment_method"]:checked');
            const paymentMethod = selectedPaymentRadio ? (selectedPaymentRadio.value === 'upi' ? 'UPI Payment' : 'Cash on Delivery (COD)') : 'Not Selected';

            const totals = getCartTotals();
            let itemsString = cart.map(item => {
                const p = getProductById(item.id);
                return `- ${p.name} x ${item.quantity}`;
            }).join('\n');

            const message = `Hello NS Sport,

I want to place an order.

Cart Items:
${itemsString}

Subtotal: ₹${totals.subtotal}
Delivery: ${totals.delivery === 0 ? 'Free' : '₹' + totals.delivery}
Total: ₹${totals.total}

Customer Details:
Name: ${name}
Mobile: ${mobile}
Email: ${email || 'N/A'}

Shipping Address:
${address}
City: ${city}
State: ${state}
Pincode: ${pincode}

Payment Method: ${paymentMethod}
${paymentMethod === 'UPI Payment' ? '\nI will complete payment via UPI and send the screenshot.' : ''}`;

            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            
            orderModal.style.display = 'none';
            orderForm.reset();
            cart = []; // clear cart after successful order initialization
            saveCart();
            window.open(whatsappUrl, '_blank');
        });
    }

    // Handle Review Form Submit
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('review-name').value.trim();
            const mobile = document.getElementById('review-mobile').value.trim();
            const product = document.getElementById('review-product').value.trim();
            const rating = document.getElementById('review-rating').value;
            const reviewMsg = document.getElementById('review-message').value.trim();

            const message = `Hello NS Sport,

I want to submit a review:

Customer Name: ${name}
Mobile: ${mobile}
Product Purchased: ${product}
Rating: ${rating}/5

Review:
${reviewMsg}`;

            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            
            reviewModal.style.display = 'none';
            reviewForm.reset();
            window.open(whatsappUrl, '_blank');
        });
    }

    // Utilities
    document.querySelectorAll('.faq-item .faq-question').forEach(q => {
        q.addEventListener('click', (e) => {
            const item = e.target.closest('.faq-item');
            document.querySelectorAll('.faq-item').forEach(other => {
                if(other !== item) other.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.querySelector('i').className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if(!link.closest('.lang-switch-container')) {
                    navLinks.classList.remove('active');
                    hamburger.querySelector('i').className = 'fas fa-bars';
                }
            });
        });
    }
});
