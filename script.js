import games from './data.js';

let cart = JSON.parse(localStorage.getItem('gameStoreCart')) || [];
let currentPlatformFilter = 'All';

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderAllSections();
    
    updateCartUI();
    setupCartToggle();
    setupCarousel();
    setupModal();
    setupFilters();
});

function renderAllSections() {
    // Filter by platform first if any
    const filteredGames = currentPlatformFilter === 'All' 
        ? games 
        : games.filter(g => g.platform === currentPlatformFilter);

    // 1. Tendencias (status: trending)
    renderGamesToGrid(filteredGames.filter(g => g.status === 'trending'), 'trending-grid');

    // 2. Recargas y Gift Cards (categories: Recarga, Tarjeta)
    renderGamesToGrid(filteredGames.filter(g => ['Recarga', 'Tarjeta'].includes(g.category)), 'special-grid');

    // 3. Recomendaciones (Category filter)
    updateCategoryRecommendations();

    // 4. Más Vendidos y Recientes (status: best_seller, recent)
    renderGamesToGrid(filteredGames.filter(g => ['best_seller', 'recent'].includes(g.status)), 'status-grid');

    // 5. Próximos (status: upcoming)
    renderGamesToGrid(filteredGames.filter(g => g.status === 'upcoming'), 'upcoming-grid');
}

function renderGamesToGrid(gamesList, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = '';

    if (gamesList.length === 0) {
        grid.innerHTML = '<p style="color:var(--text-secondary); grid-column: 1/-1; text-align: center; padding: 2rem;">No hay productos disponibles por el momento.</p>';
        return;
    }

    gamesList.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div class="card-media-container">
                <a href="product.html?id=${game.id}">
                    ${game.discount > 0 ? `<div class="discount-badge">-${game.discount}%</div>` : ''}
                    <img src="${game.image}" alt="${game.title}" class="card-img">
                    ${game.hoverVideo ? `
                        <video class="hover-video" muted loop playsinline preload="none">
                            <source src="${game.hoverVideo}" type="video/webm">
                        </video>
                    ` : ''}
                </a>
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-platform">${game.platform} - ${game.category}</p>
                <div class="game-price-container">
                    <span class="game-price">Bs${game.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" data-id="${game.id}">Añadir</button>
                </div>
            </div>
        `;

        // Hover logic for video
        const video = card.querySelector('.hover-video');
        if (video) {
            card.addEventListener('mouseenter', () => {
                video.style.opacity = '1';
                video.play().catch(e => console.log("Autoplay blocked or video error", e));
            });
            card.addEventListener('mouseleave', () => {
                video.style.opacity = '0';
                video.pause();
                video.currentTime = 0;
            });
        }

        grid.appendChild(card);
    });

    // Event listeners for buttons
    grid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            addToCart(id);
        });
    });
}

function updateCategoryRecommendations() {
    const activeBtn = document.querySelector('.filter-btn.active');
    if (!activeBtn) return;
    
    const category = activeBtn.dataset.category;
    const filteredGames = currentPlatformFilter === 'All' 
        ? games 
        : games.filter(g => g.platform === currentPlatformFilter);
        
    renderGamesToGrid(filteredGames.filter(g => g.category === category), 'category-grid');
}

function setupFilters() {
    // Platform Filters in Nav
    const platformLinks = document.querySelectorAll('#platform-filters a');
    platformLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentPlatformFilter = link.dataset.platform;
            renderAllSections();
            
            // Hide hero if filtering by platform to focus on results
            const hero = document.querySelector('.hero');
            if (currentPlatformFilter !== 'All') {
                hero.style.display = 'none';
            } else {
                hero.style.display = 'block';
            }
        });
    });

    // Category Filters in Recommendations
    const categoryBtns = document.querySelectorAll('#category-filters .filter-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateCategoryRecommendations();
        });
    });
}

function addToCart(id) {
    const game = games.find(g => g.id === id);
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({
            ...game,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    openCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('gameStoreCart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total-amount');

    if (cartCount) {
        cartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    if (cartItems) {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p>${item.quantity} x Bs${item.price.toFixed(2)}</p>
                    <button onclick="removeFromCart(${item.id})" 
                    style="background:none; border:1px solid #FF0000; color:#ff4d4d; cursor:pointer; 
                    font-size:0.8rem; margin-top:5px;">Eliminar</button>
                </div>
            `;
            cartItems.appendChild(itemElement);
        });

        if (cartTotal) {
            cartTotal.innerText = `Bs${total.toFixed(2)}`;
        }
    }
}

window.removeFromCart = removeFromCart;

function setupCartToggle() {
    const cartBtn = document.querySelector('.cart-icon');
    const closeBtn = document.querySelector('.close-cart');
    const drawer = document.querySelector('.cart-drawer');

    if (cartBtn && drawer) {
        cartBtn.addEventListener('click', () => drawer.classList.add('active'));
    }

    if (closeBtn && drawer) {
        closeBtn.addEventListener('click', () => drawer.classList.remove('active'));
    }
}

function openCart() {
    const drawer = document.querySelector('.cart-drawer');
    if (drawer) drawer.classList.add('active');
}

// Carousel Logic
function setupCarousel() {
    const inner = document.querySelector('.carousel-inner');
    if (!inner) return;

    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        const offset = -currentIndex * (100 / totalSlides);
        inner.style.transform = `translateX(${offset}%)`;
    }, 5000);
}

// Modal Logic
function setupModal() {
    const modal = document.getElementById('checkout-modal');
    const openModalBtn = document.getElementById('open-checkout-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const checkoutForm = document.getElementById('checkout-form');

    if (!modal || !openModalBtn) return;

    openModalBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("El carrito está vacío. ¡Añade algunos juegos primero!");
            return;
        }
        modal.classList.add('active');
        document.querySelector('.cart-drawer').classList.remove('active');
    });

    closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('customer-name').value;
            const phone = document.getElementById('customer-phone').value;
            performCheckout(name, phone);
        });
    }
}

function performCheckout(name, phone) {
    let subtotal = 0;
    let productsList = "";

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        productsList += `• ${item.title} - ${item.quantity} un. - Bs${item.price.toFixed(2)}\n`;
    });

    const total = subtotal;

    const message = `¡Hola! 👏 Acabo de realizar el siguiente Pedido:

📲 Información de contacto:
Nombre: ${name}
Teléfono: ${phone}

🛒 Pedido:
${productsList}
💰 Precio original: Bs${subtotal.toFixed(2)}
Total: Bs${total.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/59177920302?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}
