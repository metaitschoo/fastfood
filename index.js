
// =========================================
// 1. BARCHA FAST FOOD MAHSULOTLARI BAZASI (43 TA)
// =========================================
const menuData = [
    // BURGERLAR (6 ta)
    { id: 1, name: "Gamburger", category: "Burgerlar", price: 24000, popular: false, desc: "Yumshoq kunjutli bulochka, 100% mol go‘shtidan kotlet, yangi pomidor, tuzlangan bodring, piyoz va maxsus sous.", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Chizburger", category: "Burgerlar", price: 28000, popular: true, desc: "Suvli mol go‘shti kotleti, eritilgan Cheddar pishlog‘i, aysberg salati, bodring va firmenniy burger sousi.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Double burger", category: "Burgerlar", price: 38000, popular: true, desc: "Ikki qavatli barra mol go‘shti kotleti, ikki hissa pishloq, karamellashgan piyoz va tutunli barbekyu sousi.", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Chicken burger", category: "Burgerlar", price: 25000, popular: false, desc: "Qarsildoq panirovkada qovurilgan tovuq filesi, yangi salat bargi, pomidor va mayin sarimsoqli sous.", img: "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Big Burger", category: "Burgerlar", price: 42000, popular: false, desc: "Katta ochlik uchun maxsus uch qavatli mega-burger, mol go‘shti, pishloq, tuxum va maxsus achchiq-shirin sous.", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Cheeseburger", category: "Burgerlar", price: 30000, popular: false, desc: "Klassik Amerika uslubidagi qo‘sh pishloqli chizburger, xantal, ketchup va yangi sabzavotlar bilan.", img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80" },

    // LAVASHLAR (5 ta)
    { id: 7, name: "Oddiy lavash", category: "Lavashlar", price: 28000, popular: false, desc: "Yupqa tandir lavash xamiri, mol go‘shti bo‘laklari, yangi pomidor, bodring, qarsildoq chips va oq sous.", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Pishloqli lavash", category: "Lavashlar", price: 32000, popular: true, desc: "Issiq eritilgan Golland va Cheddar pishlog‘i, sersuv mol go‘shti, pomidor va maxsus qaymoqli sous.", img: "https://images.unsplash.com/photo-1642783944285-b33b18ef6c3b?auto=format&fit=crop&w=600&q=80" },
    { id: 9, name: "Tovuqli lavash", category: "Lavashlar", price: 26000, popular: false, desc: "Grilda pishirilgan xushbo‘y tovuq filesi, yangi sabzavotlar, chips va sarimsoqli mayonez sousi.", img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80" },
    { id: 10, name: "Mol go‘shtli lavash", category: "Lavashlar", price: 34000, popular: false, desc: "Ko‘p miqdordagi saralangan mol go‘shti, pomidor, tuzlangan bodring va maxsus Andijoncha tomat sousi.", img: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=600&q=80" },
    { id: 11, name: "Mini lavash", category: "Lavashlar", price: 21000, popular: false, desc: "Yengil tamaddi uchun ixcham o‘lchamdagi lavash, mol go‘shti, sabzavotlar va chips bilan.", img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80" },

    // PITSA (6 ta)
    { id: 12, name: "Margarita", category: "Pitsa", price: 55000, popular: false, desc: "Klassik italyan xamiri, cho‘ziluvchan Motsarella pishlog‘i, barra pomidorlar, rayhon va tomat sousi (32 sm).", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80" },
    { id: 13, name: "Pepperoni", category: "Pitsa", price: 68000, popular: true, desc: "Halol dudlangan mol go‘shtli pepperoni kolbasasi, ko‘p miqdorda Motsarella pishlog‘i va oregano (32 sm).", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80" },
    { id: 14, name: "Go‘shtli pitsa", category: "Pitsa", price: 78000, popular: false, desc: "Qovurilgan mol go‘shti qiymasi, dudlangan go‘sht, bulg‘or qalampiri, piyoz va Motsarella pishlog‘i (32 sm).", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80" },
    { id: 15, name: "Tovuqli pitsa", category: "Pitsa", price: 65000, popular: false, desc: "Yumshoq tovuq filesi, qo‘ziqorin, shirin makkajo‘xori, Motsarella va qaymoqli-sarimsoqli sous (32 sm).", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80" },
    { id: 16, name: "Pishloqli pitsa", category: "Pitsa", price: 62000, popular: false, desc: "4 xil pishloq uyg‘unligi: Motsarella, Cheddar, Parmezan va Golland pishloqlari (32 sm).", img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80" },
    { id: 17, name: "Miks pitsa", category: "Pitsa", price: 82000, popular: true, desc: "Mol go‘shti, tovuq go‘shti, kolbasa, qo‘ziqorin, zaytun, pomidor va ikki hissa pishloq (32 sm).", img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=600&q=80" },

    // HOT-DOGLAR (3 ta)
    { id: 18, name: "Oddiy hot-dog", category: "Hot-doglar", price: 16000, popular: false, desc: "Yumshoq bulochka, halol sosiska, koreyscha sabzi, karam salati, ketchup va mayonez.", img: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80" },
    { id: 19, name: "Pishloqli hot-dog", category: "Hot-doglar", price: 20000, popular: false, desc: "Sosiska ustida eritilgan Cheddar pishlog‘i, qovurilgan piyoz, xantal va maxsus pishloqli sous.", img: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=600&q=80" },
    { id: 20, name: "Maxsus hot-dog", category: "Hot-doglar", price: 25000, popular: false, desc: "Qo‘sh sosiskali qirollik hot-dogi, xalapenyu qalampiri, pishloq, tuzlangan bodring va firmenniy sous.", img: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=600&q=80" },

    // SENDVICHLAR (3 ta)
    { id: 21, name: "Club sendvich", category: "Sendvichlar", price: 32000, popular: true, desc: "Uch qavatli qarsildoq tost noni, tovuq filesi, pishloq, pomidor, salat bargi va kartoshka fri bilan.", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80" },
    { id: 22, name: "Chicken sendvich", category: "Sendvichlar", price: 27000, popular: false, desc: "Qovurilgan tovuq go‘shti, yangi bodring, aysberg salati va mayin sezar sousli tost sendvich.", img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80" },
    { id: 23, name: "Go‘shtli sendvich", category: "Sendvichlar", price: 31000, popular: false, desc: "Dudlangan mol go‘shti, Cheddar pishlog‘i, tuzlangan bodring va barbekyu sousli issiq sendvich.", img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80" },

    // FRI VA GAZAKLAR (5 ta)
    { id: 24, name: "Kartoshka fri", category: "Fri va gazaklar", price: 15000, popular: true, desc: "Oltin rangda qarsildoq qilib qovurilgan saralangan kartoshka tayoqchalari (150 gr).", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80" },
    { id: 25, name: "Naggets", category: "Fri va gazaklar", price: 22000, popular: false, desc: "Ichki qismi yumshoq, usti qarsildoq 8 dona halol tovuq naggetslari.", img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80" },
    { id: 26, name: "Pishloqli tayoqchalar", category: "Fri va gazaklar", price: 24000, popular: false, desc: "Cho‘ziluvchan Motsarella pishlog‘idan tayyorlangan 6 dona oltinrang qarsildoq tayoqchalar.", img: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=600&q=80" },
    { id: 27, name: "Piyoz halqalari", category: "Fri va gazaklar", price: 17000, popular: false, desc: "Maxsus xamirda qovurilgan shirin piyoz halqalari (10 dona).", img: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=80" },
    { id: 28, name: "Kroketlar", category: "Fri va gazaklar", price: 19000, popular: false, desc: "Pishloq va ko‘katlar qo‘shilgan mayin kartoshkali qarsildoq kroketlar (8 dona).", img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80" },

    // ICHIMLIKLAR (7 ta)
    { id: 29, name: "Coca-Cola", category: "Ichimliklar", price: 10000, popular: false, desc: "Muzdek gazlangan Coca-Cola ichimligi (0.5 litr shisha/plastik).", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80" },
    { id: 30, name: "Pepsi", category: "Ichimliklar", price: 10000, popular: false, desc: "Tetiklantiruvchi muzdek Pepsi ichimligi (0.5 litr).", img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=600&q=80" },
    { id: 31, name: "Fanta", category: "Ichimliklar", price: 10000, popular: false, desc: "Yorqin apelsin ta'mli gazlangan Fanta ichimligi (0.5 litr).", img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80" },
    { id: 32, name: "Sprite", category: "Ichimliklar", price: 10000, popular: false, desc: "Laym va limon ta'mli salqin Sprite ichimligi (0.5 litr).", img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80" },
    { id: 33, name: "Suv", category: "Ichimliklar", price: 5000, popular: false, desc: "Tozalangan gazsiz ichimlik suvi (0.5 litr).", img: "https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=600&q=80" },
    { id: 34, name: "Sharbat", category: "Ichimliklar", price: 14000, popular: false, desc: "Tabiiy mevali sharbat: olcha, olma yoki apelsin (1 litr).", img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80" },
    { id: 35, name: "Muzli choy", category: "Ichimliklar", price: 11000, popular: false, desc: "Shaftoli va limon ta'mli salqin Fuse Tea muzli choyi (0.5 litr).", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80" },

    // QO'SHIMCHA (8 ta)
    { id: 36, name: "Donar", category: "Qo‘shimcha", price: 36000, popular: false, desc: "Lagan (likopcha)da tortiladigan maxsus donar: mol go‘shti, kartoshka fri, guruch, salat va non.", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80" },
    { id: 37, name: "Shaurma", category: "Qo‘shimcha", price: 27000, popular: false, desc: "Issiq pishirilgan kulcha non ichida mol go‘shti, tuzlangan bodring, pomidor va sarimsoqli sous.", img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80" },
    { id: 38, name: "KFC uslubidagi tovuq", category: "Qo‘shimcha", price: 35000, popular: true, desc: "11 xil ziravorli maxsus qarsildoq panirovkada qovurilgan 5 bo‘lak sersuv tovuq go‘shti.", img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80" },
    { id: 39, name: "Tovuq qanotchalari", category: "Qo‘shimcha", price: 29000, popular: false, desc: "Barbekyu va asal-xantal glazurida pishirilgan 7 dona xushtam tovuq qanotchalari.", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80" },
    { id: 40, name: "Salatlar", category: "Qo‘shimcha", price: 18000, popular: false, desc: "Yangi tayyorlangan Sezar yoki Grekcha sabzavotli salat (200 gr).", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80" },
    { id: 41, name: "Souslar", category: "Qo‘shimcha", price: 4000, popular: false, desc: "Tanlovga ko‘ra: Pishloqli, Sarimsoqli, Barbekyu, Ketchup yoki Achchiq chili sousi.", img: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=600&q=80" },
    { id: 42, name: "Desertlar", category: "Qo‘shimcha", price: 22000, popular: false, desc: "Shokoladli brauni yoki qulupnayli yumshoq chizkeyk bo‘lagi.", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80" },
    { id: 43, name: "Muzqaymoqlar", category: "Qo‘shimcha", price: 14000, popular: false, desc: "Qaymoqli plombir muzqaymog‘i shokoladli yoki karamelli topping bilan.", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80" }
];

// =========================================
// 2. HOLAT (STATE) VA LOCALSTORAGE
// =========================================
let cart = JSON.parse(localStorage.getItem('andijon_fastfood_cart')) || [];
let activeCategory = 'Barchasi';
let searchQuery = '';
let sortBy = 'default';

const DELIVERY_FEE = 12000;
const FREE_DELIVERY_THRESHOLD = 100000;

// Narxni chiroyli formatlash (masalan: 28 000 so‘m)
function formatPrice(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so‘m";
}

// Savatchani localStorage ga saqlash
function saveCart() {
    localStorage.setItem('andijon_fastfood_cart', JSON.stringify(cart));
    updateCartUI();
}

// =========================================
// 3. MENYU VA MASHHUR TAOMLARNI CHIZISH
// =========================================
function createProductCardHTML(item) {
    return `
        <article class="product-card">
            <div class="product-img-box">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
                <span class="product-cat-badge">${item.category}</span>
                ${item.popular ? '<span class="product-hit-badge"><i class="fa-solid fa-fire"></i> Xit</span>' : ''}
            </div>
            <div class="product-body">
                <h3 class="product-title">${item.name}</h3>
                <p class="product-desc">${item.desc}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(item.price)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                        <i class="fa-solid fa-cart-plus"></i> Savatchaga qo‘shish
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderPopularProducts() {
    const popularGrid = document.getElementById('popularProductsGrid');
    const popularItems = menuData.filter(item => item.popular).slice(0, 8);
    popularGrid.innerHTML = popularItems.map(createProductCardHTML).join('');
}

function renderMenu() {
    const grid = document.getElementById('menuProductsGrid');
    const noResults = document.getElementById('noResults');
    const resultsInfo = document.getElementById('resultsInfo');

    let filtered = menuData.filter(item => {
        const matchesCat = activeCategory === 'Barchasi' || item.category === activeCategory;
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch = item.name.toLowerCase().includes(q) || 
                              item.desc.toLowerCase().includes(q) || 
                              item.category.toLowerCase().includes(q);
        return matchesCat && matchesSearch;
    });

    // Saralash
    if (sortBy === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'popular') {
        filtered.sort((a, b) => (b.popular === a.popular) ? 0 : b.popular ? 1 : -1);
    }

    if (filtered.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        resultsInfo.textContent = '0 ta taom topildi';
    } else {
        grid.style.display = 'grid';
        noResults.style.display = 'none';
        resultsInfo.textContent = `Jami ${filtered.length} ta taom ko‘rsatilmoqda`;
        grid.innerHTML = filtered.map(createProductCardHTML).join('');
    }
}

// =========================================
// 4. QIDIRUV VA FILTR FUNKSIYALARI
// =========================================
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const sortSelect = document.getElementById('sortSelect');
const categoryTabs = document.getElementById('categoryTabs');

searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery.length > 0 ? 'block' : 'none';
    renderMenu();
});

clearSearchBtn.addEventListener('click', () => {
    searchQuery = '';
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    renderMenu();
});

sortSelect.addEventListener('change', (e) => {
    sortBy = e.target.value;
    renderMenu();
});

categoryTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;

    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    renderMenu();
});

function quickFilter(category) {
    activeCategory = category;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    renderMenu();
    document.getElementById('menyu').scrollIntoView({ behavior: 'smooth' });
}

function resetFilters() {
    activeCategory = 'Barchasi';
    searchQuery = '';
    sortBy = 'default';
    searchInput.value = '';
    sortSelect.value = 'default';
    clearSearchBtn.style.display = 'none';
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'Barchasi');
    });
    renderMenu();
}

// =========================================
// 5. SAVATCHA FUNKSIYALARI
// =========================================
function addToCart(productId) {
    const product = menuData.find(item => item.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            qty: 1
        });
    }

    saveCart();
    showToast(`"${product.name}" savatchaga qo‘shildi!`);
}

// Aksiya setlarini savatchaga qo'shish
function addPromoToCart(id, name, price, img) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id, name, price, img, qty: 1 });
    }
    saveCart();
    showToast(`"${name}" savatchaga qo‘shildi!`);
    openCart();
}

function changeQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }
    saveCart();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    showToast("Mahsulot savatchadan o‘chirildi");
}

function updateCartUI() {
    const container = document.getElementById('cartItemsContainer');
    const footer = document.getElementById('cartFooter');
    const navCount = document.getElementById('navCartCount');
    const floatingText = document.getElementById('floatingCartText');

    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    navCount.textContent = totalItems;
    floatingText.textContent = `Savatcha (${totalItems})`;

    if (cart.length === 0) {
        footer.style.display = 'none';
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-basket-shopping"></i>
                <h4>Savatchangiz hozircha bo‘sh</h4>
                <p>Mazali taomlarimizdan birini tanlab savatchaga qo‘shing!</p>
                <button class="btn btn-primary" onclick="closeCart(); document.getElementById('menyu').scrollIntoView({behavior:'smooth'})">
                    Menyuga o‘tish
                </button>
            </div>
        `;
        return;
    }

    footer.style.display = 'block';
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
                <div class="cart-qty-controls">
                    <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                    <span class="qty-val">${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="O‘chirish">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    const total = subtotal + delivery;

    const progressEl = document.getElementById('deliveryProgress');
    if (delivery === 0) {
        progressEl.className = 'delivery-progress free';
        progressEl.innerHTML = '<i class="fa-solid fa-circle-check"></i> Tabriklaymiz! Andijon bo‘ylab yetkazib berish BEPUL!';
    } else {
        const diff = FREE_DELIVERY_THRESHOLD - subtotal;
        progressEl.className = 'delivery-progress';
        progressEl.innerHTML = `Yana <strong>${formatPrice(diff)}</strong> lik buyurtma bering va yetkazib berish BEPUL bo‘ladi!`;
    }

    document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
    document.getElementById('cartDeliveryFee').textContent = delivery === 0 ? 'BEPUL (0 so‘m)' : formatPrice(delivery);
    document.getElementById('cartTotal').textContent = formatPrice(total);
}

// Savatchani ochish va yopish
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');

function openCart() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('openCartBtn').addEventListener('click', openCart);
document.getElementById('floatingCartBtn').addEventListener('click', openCart);
document.getElementById('closeCartBtn').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

document.getElementById('clearCartBtn').addEventListener('click', () => {
    cart = [];
    saveCart();
    showToast("Savatcha tozalandi");
});

document.getElementById('heroOrderBtn').addEventListener('click', () => {
    if (cart.length > 0) {
        openCart();
    } else {
        document.getElementById('menyu').scrollIntoView({ behavior: 'smooth' });
        showToast("Avval menyudan taom tanlang!");
    }
});

// =========================================
// 6. BUYURTMA BERISH VA FORMA TEKSHIRUVI
// =========================================
const checkoutModal = document.getElementById('checkoutModal');
const successModal = document.getElementById('successModal');
const orderForm = document.getElementById('orderForm');

document.getElementById('proceedCheckoutBtn').addEventListener('click', () => {
    if (cart.length === 0) return;

    closeCart();
    const listEl = document.getElementById('checkoutItemsList');
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    const total = subtotal + delivery;

    listEl.innerHTML = cart.map(item => `
        <div class="review-row">
            <span>${item.name} × ${item.qty}</span>
            <strong>${formatPrice(item.price * item.qty)}</strong>
        </div>
    `).join('') + `
        <div class="review-row">
            <span>Yetkazib berish (Andijon shahri)</span>
            <strong>${delivery === 0 ? 'BEPUL' : formatPrice(delivery)}</strong>
        </div>
    `;

    document.getElementById('checkoutTotalAmount').textContent = formatPrice(total);
    checkoutModal.classList.add('open');
});

document.getElementById('closeCheckoutModal').addEventListener('click', () => {
    checkoutModal.classList.remove('open');
});

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('customerName');
    const phoneInput = document.getElementById('customerPhone');
    const addressInput = document.getElementById('customerAddress');
    const noteInput = document.getElementById('orderNote');

    const nameErr = document.getElementById('nameError');
    const phoneErr = document.getElementById('phoneError');
    const addressErr = document.getElementById('addressError');

    // Xatolarni tozalash
    nameErr.textContent = '';
    phoneErr.textContent = '';
    addressErr.textContent = '';

    let isValid = true;

    if (nameInput.value.trim().length < 3) {
        nameErr.textContent = 'Iltimos, ism va familiyangizni to‘liq kiriting (kamida 3 ta harf).';
        isValid = false;
    }

    const phoneDigits = phoneInput.value.replace(/\D/g, '');
    if (phoneDigits.length < 9) {
        phoneErr.textContent = 'Iltimos, to‘g‘ri telefon raqamini kiriting (masalan: +998 90 123 45 67).';
        isValid = false;
    }

    if (addressInput.value.trim().length < 5) {
        addressErr.textContent = 'Iltimos, Andijon shahridagi aniq manzilni kiriting.';
        isValid = false;
    }

    if (!isValid) return;

    // Buyurtma muvaffaqiyatli tasdiqlandi
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
    const total = subtotal + delivery;
    const randomOrderNum = '#AND-' + Math.floor(1000 + Math.random() * 9000);

    document.getElementById('confirmedOrderId').textContent = randomOrderNum;
    document.getElementById('confirmedDetails').innerHTML = `
        <p><strong>Mijoz:</strong> ${nameInput.value.trim()}</p>
        <p><strong>Telefon:</strong> ${phoneInput.value.trim()}</p>
        <p><strong>Manzil:</strong> Andijon shahri, ${addressInput.value.trim()}</p>
        ${noteInput.value.trim() ? `<p><strong>Izoh:</strong> ${noteInput.value.trim()}</p>` : ''}
        <p><strong>Jami to‘lov:</strong> <span style="color:#E62E2D; font-weight:800;">${formatPrice(total)}</span></p>
    `;

    checkoutModal.classList.remove('open');
    successModal.classList.add('open');

    // Savatchani va formani tozalash
    cart = [];
    saveCart();
    orderForm.reset();
});

document.getElementById('closeSuccessBtn').addEventListener('click', () => {
    successModal.classList.remove('open');
});

// =========================================
// 7. BILDIRISHNOMA (TOAST) VA NAVBAR
// =========================================
function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Mobil menyu (Hamburger)
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll bo'lganda navbar soyasi va aktiv bo'limni belgilash
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 30);

    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(sec => {
        const top = sec.offsetTop - 130;
        if (window.scrollY >= top) {
            current = sec.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Sahifa yuklanganda ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
    renderPopularProducts();
    renderMenu();
    updateCartUI();
});