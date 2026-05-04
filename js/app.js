/* ============================================================
   VOLT — Telegram Mini App JS
   ============================================================ */

/* ===== TELEGRAM ===== */
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  tg.setHeaderColor('#0B0B12');
  tg.setBackgroundColor('#0B0B12');
}

/* ===== DATA ===== */
const CATS = [
  { id: 'all',         name: 'Все',         icon: '⚡' },
  { id: 'phones',      name: 'Смартфоны',   icon: '📱' },
  { id: 'audio',       name: 'Наушники',    icon: '🎧' },
  { id: 'smarthome',   name: 'Умный дом',   icon: '🏠' },
  { id: 'accessories', name: 'Аксессуары',  icon: '⌚' },
  { id: 'sale',        name: 'Уценка',      icon: '🔖' },
];

const CAT_NAMES = { phones: 'Смартфоны', audio: 'Наушники', smarthome: 'Умный дом', accessories: 'Аксессуары', sale: 'Уценка' };

const CAT_GRAD = {
  phones:      'linear-gradient(145deg,#0D1B4B,#1E3A8A)',
  audio:       'linear-gradient(145deg,#1E0A3C,#6B21A8)',
  smarthome:   'linear-gradient(145deg,#022C22,#065F46)',
  accessories: 'linear-gradient(145deg,#1C0A00,#78350F)',
  sale:        'linear-gradient(145deg,#1C0505,#7F1D1D)',
};

const PRODUCTS = [
  // Смартфоны
  { id:1,  cat:'phones',      icon:'📱', name:'iPhone 15 Pro',             desc:'A17 Pro · 48 Мп · USB-C · Titanium · IP68',      price:89990, oldPrice:99990, badge:'hit',  rating:4.9, reviews:234 },
  { id:2,  cat:'phones',      icon:'📱', name:'Samsung Galaxy S24 Ultra',  desc:'Snapdragon 8 Gen 3 · 200 Мп · S Pen · AI-функции', price:109990,             badge:'new',  rating:4.8, reviews:187 },
  { id:3,  cat:'phones',      icon:'📱', name:'Xiaomi 14 Pro',             desc:'Snapdragon 8 Gen 3 · Leica · 120W · 50 Мп',       price:74990, oldPrice:84990,             rating:4.7, reviews:156 },
  { id:4,  cat:'phones',      icon:'📱', name:'Google Pixel 8 Pro',        desc:'Tensor G3 · AI-камера · Android 14 · 7 лет поддержки', price:79990,          badge:'hit',  rating:4.8, reviews:143 },
  { id:5,  cat:'phones',      icon:'📱', name:'OnePlus 12 5G',             desc:'Snapdragon 8 Gen 3 · Hasselblad · 100W · 5400 мА·ч', price:59990, oldPrice:69990, rating:4.6, reviews:98 },
  // Наушники
  { id:6,  cat:'audio',       icon:'🎧', name:'AirPods Pro 2',             desc:'ANC нового поколения · Spatial Audio · MagSafe · до 30ч', price:19990, badge:'hit', rating:4.9, reviews:312 },
  { id:7,  cat:'audio',       icon:'🎧', name:'Sony WH-1000XM5',           desc:'Лучший ANC · LDAC Hi-Res · 30 ч · Auto Pause',   price:27990, oldPrice:34990,             rating:4.9, reviews:267 },
  { id:8,  cat:'audio',       icon:'🎧', name:'Samsung Galaxy Buds3 Pro',  desc:'ANC · 360° Audio · IP57 · до 30 ч с кейсом',     price:12490,              badge:'new',  rating:4.6, reviews:89  },
  { id:9,  cat:'audio',       icon:'🎧', name:'Bose QuietComfort 45',      desc:'Legendary ANC · TriPort · 24 ч · USB-C · складные', price:24990,            rating:4.8, reviews:201 },
  { id:10, cat:'audio',       icon:'🎧', name:'Nothing Ear (2)',            desc:'Hi-Res Audio · 11.6 мм · Dual ANC · до 36 ч',    price:9990,                             rating:4.5, reviews:134 },
  // Умный дом
  { id:11, cat:'smarthome',   icon:'🔊', name:'Яндекс Станция Макс 2',    desc:'Алиса 2.0 · Zigbee · HDMI · 65W · Умный дом',    price:14990,              badge:'hit',  rating:4.8, reviews:178 },
  { id:12, cat:'smarthome',   icon:'🤖', name:'Xiaomi Robot Vacuum X20+',  desc:'4000 Па · Лидар · Автоочистка базы · MOP',        price:34990, oldPrice:44990,             rating:4.7, reviews:95  },
  { id:13, cat:'smarthome',   icon:'🔊', name:'Apple HomePod mini',        desc:'360° аудио · Siri · Thread · Matter · голосовые сценарии', price:11990,      rating:4.6, reviews:123 },
  { id:14, cat:'smarthome',   icon:'💡', name:'Govee LED Strip 10 м',      desc:'RGBIC · Matter · App Control · 16 млн цветов',   price:3490,               badge:'new',  rating:4.5, reviews:211 },
  // Аксессуары
  { id:15, cat:'accessories', icon:'⌚', name:'Apple Watch Series 9',      desc:'S9 SiP · Always-On · ЭКГ · Crash Detection · 18ч', price:34990,            badge:'hit',  rating:4.9, reviews:289 },
  { id:16, cat:'accessories', icon:'⌚', name:'Samsung Galaxy Watch 6 Classic', desc:'Поворотный безель · ЭКГ · 40 ч · Wear OS 4', price:27990,             rating:4.7, reviews:167 },
  { id:17, cat:'accessories', icon:'🔋', name:'Anker Power Bank 26800',    desc:'65W PD · 3 порта · PowerIQ 3.0 · авиакласс',    price:5490,               badge:'hit',  rating:4.8, reviews:445 },
  { id:18, cat:'accessories', icon:'⚡', name:'MagSafe Duo Charger',       desc:'iPhone + Watch · 15W MagSafe · оригинал Apple',  price:7990,                             rating:4.6, reviews:98  },
  // Уценка
  { id:19, cat:'sale',        icon:'📱', name:'Samsung Galaxy A55',        desc:'Вскрытая упаковка · гарантия 1 год · 256GB',     price:19990, oldPrice:29990, badge:'sale', rating:4.4, reviews:56 },
  { id:20, cat:'sale',        icon:'🔊', name:'JBL Charge 5',              desc:'Витринный образец · IP67 · 20 ч · гарантия 6 мес', price:8990, oldPrice:14990, badge:'sale', rating:4.5, reviews:72 },
  { id:21, cat:'sale',        icon:'📱', name:'Redmi Note 13 Pro',         desc:'Уценка: царапина корпуса · 256GB · 5G · гарантия', price:16990, oldPrice:24990, badge:'sale', rating:4.3, reviews:43 },
];

const BANNERS = [
  {
    bg:    'linear-gradient(135deg,#0D1540,#1a237e,#1565C0)',
    tag:   'Флагманы 2024',
    title: 'Топ смартфонов',
    sub:   'iPhone, Samsung, Xiaomi — лучшие цены',
    deco:  '📱',
    cat:   'phones',
  },
  {
    bg:    'linear-gradient(135deg,#1a0533,#4a0080,#7b1fa2)',
    tag:   'Premium Audio',
    title: 'Звук без\nкомпромиссов',
    sub:   'Sony, AirPods, Bose — слышишь разницу',
    deco:  '🎧',
    cat:   'audio',
  },
  {
    bg:    'linear-gradient(135deg,#1a0000,#7f1d1d,#b91c1c)',
    tag:   'Горячие скидки',
    title: 'До −40% 🔥',
    sub:   'Уценённые товары с гарантией',
    deco:  '🔖',
    cat:   'sale',
  },
];

const PROMOS = { VOLT10: .10, TECH15: .15 };

/* ===== STATE ===== */
const S = {
  screen:     'home',
  activeCat:  'all',
  catQuery:   '',
  cart:       {},     // id → qty
  favorites:  new Set(),
  sheetId:    null,
  sheetQty:   1,
  promoCode:  '',
  promoDisc:  0,
  bannerIdx:  0,
};

/* ===== PERSISTENCE ===== */
function saveState() {
  try {
    localStorage.setItem('volt_cart', JSON.stringify(S.cart));
    localStorage.setItem('volt_favs', JSON.stringify([...S.favorites]));
    localStorage.setItem('volt_promo', JSON.stringify({ code: S.promoCode, disc: S.promoDisc }));
  } catch {}
}
function loadState() {
  try {
    const cart = JSON.parse(localStorage.getItem('volt_cart') || '{}');
    Object.assign(S.cart, cart);
    const favs = JSON.parse(localStorage.getItem('volt_favs') || '[]');
    favs.forEach(id => S.favorites.add(id));
    const promo = JSON.parse(localStorage.getItem('volt_promo') || '{}');
    if (promo.code) { S.promoCode = promo.code; S.promoDisc = promo.disc; }
  } catch {}
}

/* ===== HELPERS ===== */
const fmt = n => n.toLocaleString('ru-RU') + ' ₽';
const stars = r => '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));
const byId  = id => PRODUCTS.find(p => p.id === id);

function cartCount() {
  return Object.values(S.cart).reduce((a, b) => a + b, 0);
}
function cartSubtotal() {
  return Object.entries(S.cart).reduce((sum, [id, qty]) => {
    const p = byId(+id); return sum + (p ? p.price * qty : 0);
  }, 0);
}

function badgeClass(badge) {
  if (!badge) return '';
  if (badge === 'hit')  return 'card-badge';
  if (badge === 'new')  return 'card-badge b-new';
  if (badge === 'sale') return 'card-badge b-sale';
  return 'card-badge b-sale';
}
function badgeLabel(badge) {
  if (!badge) return '';
  if (badge === 'hit')  return 'Хит';
  if (badge === 'new')  return 'Новинка';
  if (badge === 'sale') return badge; // already like −33%
  return badge;
}
function getBadge(p) {
  // For sale items auto-calculate discount %
  if (p.cat === 'sale' && p.oldPrice) {
    const pct = Math.round((1 - p.price / p.oldPrice) * 100);
    return { cls: 'card-badge b-sale', lbl: `−${pct}%` };
  }
  if (!p.badge) return null;
  const map = { hit: { cls:'card-badge', lbl:'Хит' }, new: { cls:'card-badge b-new', lbl:'Новинка' } };
  return map[p.badge] || null;
}

/* ===== RENDER: CARD ===== */
function cardHTML(p, inRow = false) {
  const badge = getBadge(p);
  const inCart = !!S.cart[p.id];
  const isFav  = S.favorites.has(p.id);
  return `
    <div class="product-card${inRow ? '' : ''}" data-id="${p.id}">
      <div class="card-art" style="background:${CAT_GRAD[p.cat]}">
        ${badge ? `<span class="${badge.cls}">${badge.lbl}</span>` : ''}
        <button class="card-fav${isFav ? ' faved' : ''}" data-fav="${p.id}">${isFav ? '❤️' : '🤍'}</button>
        <span>${p.icon}</span>
      </div>
      <div class="card-info">
        <div class="card-name">${p.name}</div>
        <div class="card-rating">
          <span class="stars">${stars(p.rating)}</span>
          <span class="review-count">${p.reviews}</span>
        </div>
        <div class="card-prices">
          <span class="card-price">${fmt(p.price)}</span>
          ${p.oldPrice ? `<span class="card-old">${fmt(p.oldPrice)}</span>` : ''}
        </div>
        <button class="card-add${inCart ? ' in-cart' : ''}" data-add="${p.id}">
          ${inCart ? '✓ В корзине' : '+ В корзину'}
        </button>
      </div>
    </div>`;
}

/* ===== SCREEN: HOME ===== */
function renderHome() {
  const hits     = PRODUCTS.filter(p => p.badge === 'hit');
  const newItems = PRODUCTS.filter(p => p.badge === 'new');

  const bannerSlides = BANNERS.map((b, i) => `
    <div class="banner-slide${i === S.bannerIdx ? ' active' : ''}" style="background:${b.bg}" data-banner="${i}">
      <div class="banner-deco">${b.deco}</div>
      <div class="banner-tag">${b.tag}</div>
      <div class="banner-title">${b.title.replace('\n','<br>')}</div>
      <div class="banner-sub">${b.sub}</div>
    </div>`).join('');

  const dots = BANNERS.map((_, i) =>
    `<div class="banner-dot${i === S.bannerIdx ? ' active' : ''}" data-dot="${i}"></div>`
  ).join('');

  const catPills = CATS.map(c =>
    `<div class="cat-pill${S.activeCat === c.id ? ' active' : ''}" data-cat="${c.id}">${c.icon} ${c.name}</div>`
  ).join('');

  return `<div class="screen-anim">
    <div class="banner-wrap">
      <div class="banner">${bannerSlides}</div>
      <div class="banner-dots">${dots}</div>
    </div>
    <div class="cats-row">${catPills}</div>
    <div class="section">
      <div class="section-head">
        <span class="section-title">🔥 Хиты продаж</span>
        <span class="section-link" data-goto="catalog" data-filter="hit">Все →</span>
      </div>
      <div class="row">${hits.map(p => cardHTML(p, true)).join('')}</div>
    </div>
    <div class="section" style="padding-bottom:8px">
      <div class="section-head">
        <span class="section-title">✨ Новинки</span>
        <span class="section-link" data-goto="catalog" data-filter="new">Все →</span>
      </div>
      <div class="row">${newItems.map(p => cardHTML(p, true)).join('')}</div>
    </div>
  </div>`;
}

/* ===== SCREEN: CATALOG ===== */
function renderCatalog() {
  const catPills = CATS.map(c =>
    `<div class="cat-pill${S.activeCat === c.id ? ' active' : ''}" data-cat="${c.id}">${c.icon} ${c.name}</div>`
  ).join('');

  let filtered = PRODUCTS.filter(p => {
    const catOk = S.activeCat === 'all' || p.cat === S.activeCat;
    const qOk   = !S.catQuery || p.name.toLowerCase().includes(S.catQuery.toLowerCase())
                             || p.desc.toLowerCase().includes(S.catQuery.toLowerCase());
    return catOk && qOk;
  });

  const grid = filtered.length
    ? `<div class="grid">${filtered.map(p => cardHTML(p)).join('')}</div>`
    : `<div class="no-results"><div class="no-results-icon">🔍</div>Ничего не нашли — попробуй другой запрос</div>`;

  return `<div class="screen-anim">
    <div class="catalog-search">
      <input class="cat-search-input" id="catSearch" type="search"
        placeholder="Поиск по каталогу..." value="${S.catQuery}">
    </div>
    <div class="cats-row" style="padding-top:12px">${catPills}</div>
    ${grid}
    <div style="height:12px"></div>
  </div>`;
}

/* ===== SCREEN: CART ===== */
function renderCart() {
  const items = Object.entries(S.cart).map(([id, qty]) => byId(+id)).filter(Boolean);

  if (!items.length) {
    return `<div class="screen-anim">
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <div class="cart-empty-title">Корзина пуста</div>
        <div class="cart-empty-sub">Добавьте что-нибудь из каталога</div>
        <button class="cart-empty-btn" data-goto="catalog">Перейти в каталог</button>
      </div>
    </div>`;
  }

  const itemsHTML = items.map(p => {
    const qty = S.cart[p.id];
    return `
      <div class="cart-item">
        <div class="cart-art" style="background:${CAT_GRAD[p.cat]}">${p.icon}</div>
        <div class="cart-info">
          <div class="cart-name">${p.name}</div>
          <div class="cart-price">${fmt(p.price * qty)}</div>
        </div>
        <div class="qty-ctrl">
          <button class="qty-btn" data-qty-dec="${p.id}">−</button>
          <span class="qty-num">${qty}</span>
          <button class="qty-btn" data-qty-inc="${p.id}">+</button>
        </div>
      </div>`;
  }).join('');

  const sub  = cartSubtotal();
  const disc = Math.round(sub * S.promoDisc);
  const total = sub - disc;

  const discRow = disc
    ? `<div class="sum-row"><span>Промокод ${S.promoCode}</span><span class="sum-discount">−${fmt(disc)}</span></div>`
    : '';

  return `<div class="screen-anim">
    <div class="cart-wrap">
      ${itemsHTML}
      <div class="promo-row">
        <input class="promo-input${S.promoCode ? ' valid' : ''}" id="promoInput"
          type="text" placeholder="Промокод" maxlength="10"
          value="${S.promoCode}" autocomplete="off">
        <button class="promo-apply" id="promoApply">Применить</button>
      </div>
      <div class="cart-summary">
        <div class="sum-row"><span>Товары (${cartCount()} шт.)</span><span>${fmt(sub)}</span></div>
        ${discRow}
        <div class="sum-row"><span>Доставка</span><span style="color:var(--success)">Бесплатно</span></div>
        <div class="sum-row total"><span>Итого</span><span>${fmt(total)}</span></div>
      </div>
      <div class="demo-note">
        <strong>Демо-режим.</strong> В реальном боте здесь подключена оплата через ЮKassa или Stripe.
        Попробуй промокод <strong>VOLT10</strong> — скидка 10% 🎁
      </div>
    </div>
  </div>`;
}

/* ===== SCREEN: FAVORITES ===== */
function renderFavorites() {
  const items = PRODUCTS.filter(p => S.favorites.has(p.id));
  if (!items.length) {
    return `<div class="screen-anim">
      <div class="favs-empty">
        <div class="favs-empty-icon">🤍</div>
        <div class="favs-empty-title">Нет избранного</div>
        <div class="favs-empty-sub">Нажми 🤍 на карточке товара, чтобы добавить</div>
      </div>
    </div>`;
  }
  return `<div class="screen-anim favs-wrap">
    <div class="grid" style="padding-top:16px">${items.map(p => cardHTML(p)).join('')}</div>
    <div style="height:12px"></div>
  </div>`;
}

/* ===== PRODUCT SHEET ===== */
function openSheet(id) {
  const p = byId(id);
  if (!p) return;
  S.sheetId  = id;
  S.sheetQty = 1;

  const badge = getBadge(p);
  const inCart = !!S.cart[p.id];
  const isFav  = S.favorites.has(p.id);

  document.getElementById('sheetBody').innerHTML = `
    <div class="sheet-art" style="background:${CAT_GRAD[p.cat]}">
      ${p.icon}
      <button class="sheet-fav${isFav ? ' faved' : ''}" id="sheetFavBtn">${isFav ? '❤️' : '🤍'}</button>
    </div>
    <span class="sheet-cat">${CAT_NAMES[p.cat]}</span>
    ${badge ? `<span class="${badge.cls.replace('card-','')}" style="margin-left:6px;vertical-align:middle">${badge.lbl}</span>` : ''}
    <div class="sheet-name">${p.name}</div>
    <div class="sheet-rating">
      <span class="stars" style="font-size:.85rem">${stars(p.rating)}</span>
      <span style="font-size:.8rem;color:var(--text2)">${p.rating} · ${p.reviews} отзывов</span>
    </div>
    <div class="sheet-desc">${p.desc}</div>
    <div class="sheet-prices">
      <span class="sheet-price">${fmt(p.price)}</span>
      ${p.oldPrice ? `<span class="sheet-old-price">${fmt(p.oldPrice)}</span>` : ''}
    </div>
    <div class="sheet-qty-wrap">
      <span class="sheet-qty-label">Количество</span>
      <div class="sheet-qty">
        <button class="sheet-qty-btn" id="sheetQtyDec">−</button>
        <span class="sheet-qty-num" id="sheetQtyNum">${S.sheetQty}</span>
        <button class="sheet-qty-btn" id="sheetQtyInc">+</button>
      </div>
    </div>
    <button class="sheet-add-btn${inCart ? ' in-cart' : ''}" id="sheetAddBtn">
      ${inCart ? '✓ Уже в корзине' : `В корзину — ${fmt(p.price * S.sheetQty)}`}
    </button>`;

  document.getElementById('sheetBackdrop').classList.add('open');
  document.getElementById('productSheet').classList.add('open');
}

function closeSheet() {
  document.getElementById('sheetBackdrop').classList.remove('open');
  document.getElementById('productSheet').classList.remove('open');
  S.sheetId = null;
}

function updateSheetBtn() {
  const p = byId(S.sheetId);
  if (!p) return;
  const btn = document.getElementById('sheetAddBtn');
  const num = document.getElementById('sheetQtyNum');
  if (num) num.textContent = S.sheetQty;
  if (btn) {
    const inCart = !!S.cart[p.id];
    btn.className = 'sheet-add-btn' + (inCart ? ' in-cart' : '');
    btn.textContent = inCart ? '✓ Уже в корзине' : `В корзину — ${fmt(p.price * S.sheetQty)}`;
  }
}

/* ===== CART OPERATIONS ===== */
function addToCart(id, qty = 1) {
  S.cart[id] = (S.cart[id] || 0) + qty;
  saveState(); updateBadges(); refreshCartBtn(id);
}
function setCartQty(id, qty) {
  if (qty <= 0) { delete S.cart[id]; }
  else          { S.cart[id] = qty; }
  saveState(); updateBadges();
}
function refreshCartBtn(id) {
  // Update all "В корзину" buttons for this product on screen
  document.querySelectorAll(`[data-add="${id}"]`).forEach(btn => {
    const inCart = !!S.cart[id];
    btn.className = 'card-add' + (inCart ? ' in-cart' : '');
    btn.textContent = inCart ? '✓ В корзине' : '+ В корзину';
  });
  updateSheetBtn();
}

/* ===== FAVORITES ===== */
function toggleFavorite(id) {
  if (S.favorites.has(id)) S.favorites.delete(id);
  else                      S.favorites.add(id);
  saveState();
  // Update all fav buttons for this product
  document.querySelectorAll(`[data-fav="${id}"]`).forEach(btn => {
    const faved = S.favorites.has(id);
    btn.className = 'card-fav' + (faved ? ' faved' : '');
    btn.textContent = faved ? '❤️' : '🤍';
  });
  if (S.sheetId === id) {
    const btn = document.getElementById('sheetFavBtn');
    if (btn) {
      const faved = S.favorites.has(id);
      btn.className = 'sheet-fav' + (faved ? ' faved' : '');
      btn.textContent = faved ? '❤️' : '🤍';
    }
  }
  if (S.screen === 'favorites') render();
}

/* ===== BADGES ===== */
function updateBadges() {
  const cnt = cartCount();
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = cnt > 0 ? cnt : '';
  updateMainButton();
}

/* ===== NAVIGATION ===== */
function goTo(screen, opts = {}) {
  S.screen = screen;
  if (opts.cat) S.activeCat = opts.cat;
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === screen);
  });
  render();
  closeSheet();
  window.scrollTo(0, 0);
}

/* ===== RENDER ===== */
function render() {
  const el = document.getElementById('content');
  if (!el) return;
  switch (S.screen) {
    case 'home':      el.innerHTML = renderHome();      break;
    case 'catalog':   el.innerHTML = renderCatalog();   initCatSearch(); break;
    case 'cart':      el.innerHTML = renderCart();      initPromo(); break;
    case 'favorites': el.innerHTML = renderFavorites(); break;
  }
  updateMainButton();
}

/* ===== CATALOG SEARCH (live) ===== */
function initCatSearch() {
  const inp = document.getElementById('catSearch');
  if (!inp) return;
  inp.focus();
  inp.addEventListener('input', () => {
    S.catQuery = inp.value;
    const grid = document.querySelector('.grid, .no-results');
    const filtered = PRODUCTS.filter(p => {
      const catOk = S.activeCat === 'all' || p.cat === S.activeCat;
      const qOk   = !S.catQuery || p.name.toLowerCase().includes(S.catQuery.toLowerCase())
                               || p.desc.toLowerCase().includes(S.catQuery.toLowerCase());
      return catOk && qOk;
    });
    const parent = grid?.parentElement || document.getElementById('content').firstChild;
    const existingGrid = parent.querySelector('.grid, .no-results');
    if (existingGrid) existingGrid.remove();
    const newEl = document.createElement('div');
    if (filtered.length) {
      newEl.className = 'grid';
      newEl.innerHTML = filtered.map(p => cardHTML(p)).join('');
    } else {
      newEl.className = 'no-results';
      newEl.innerHTML = '<div class="no-results-icon">🔍</div>Ничего не нашли — попробуй другой запрос';
    }
    parent.insertBefore(newEl, parent.querySelector('div[style]') || null);
    parent.appendChild(newEl);
  });
}

/* ===== PROMO CODE ===== */
function initPromo() {
  const inp = document.getElementById('promoInput');
  const btn = document.getElementById('promoApply');
  if (!inp || !btn) return;
  btn.addEventListener('click', () => {
    const code = inp.value.trim().toUpperCase();
    if (PROMOS[code]) {
      S.promoCode = code;
      S.promoDisc = PROMOS[code];
      inp.classList.add('valid'); inp.classList.remove('invalid');
      saveState(); render();
    } else if (code) {
      inp.classList.add('invalid'); inp.classList.remove('valid');
    }
  });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') btn.click(); });
}

/* ===== BANNER AUTO-ROTATE ===== */
let bannerTimer;
function startBannerTimer() {
  clearInterval(bannerTimer);
  bannerTimer = setInterval(() => {
    S.bannerIdx = (S.bannerIdx + 1) % BANNERS.length;
    const slides = document.querySelectorAll('.banner-slide');
    const dots   = document.querySelectorAll('.banner-dot');
    slides.forEach((s, i) => s.classList.toggle('active', i === S.bannerIdx));
    dots.forEach((d, i)   => d.classList.toggle('active', i === S.bannerIdx));
  }, 4000);
}

/* ===== CHECKOUT (Telegram MainButton) ===== */
function updateMainButton() {
  if (!tg?.MainButton) return;
  const items = Object.entries(S.cart).map(([id, qty]) => byId(+id)).filter(Boolean);
  if (S.screen === 'cart' && items.length) {
    const sub   = cartSubtotal();
    const disc  = Math.round(sub * S.promoDisc);
    const total = sub - disc;
    tg.MainButton.setText(`Оформить заказ — ${fmt(total)}`);
    tg.MainButton.show();
    tg.MainButton.enable();
  } else {
    tg.MainButton.hide();
  }
}

function sendOrder() {
  const items = Object.entries(S.cart).map(([id, qty]) => {
    const p = byId(+id);
    return { id: +id, name: p.name, price: p.price, qty };
  }).filter(Boolean);
  const sub   = cartSubtotal();
  const disc  = Math.round(sub * S.promoDisc);
  const total = sub - disc;

  const order = { type: 'volt_order', items, subtotal: sub, promo: S.promoCode, discount: disc, total };

  if (tg?.sendData) {
    tg.sendData(JSON.stringify(order));
  } else {
    // Browser fallback
    alert(`✅ Заказ оформлен!\n\nИтого: ${fmt(total)}\nТоваров: ${items.length}\n\n(В Telegram бот получит данные и пришлёт подтверждение)`);
  }
}

/* ===== EVENT DELEGATION ===== */
document.addEventListener('click', e => {
  const t = e.target;

  // Nav buttons
  const navBtn = t.closest('.nav-btn');
  if (navBtn) { goTo(navBtn.dataset.screen); return; }

  // Banner dot
  const dot = t.closest('.banner-dot');
  if (dot) {
    S.bannerIdx = +dot.dataset.dot;
    document.querySelectorAll('.banner-slide').forEach((s,i) => s.classList.toggle('active', i===S.bannerIdx));
    document.querySelectorAll('.banner-dot').forEach((d,i)   => d.classList.toggle('active', i===S.bannerIdx));
    clearInterval(bannerTimer); startBannerTimer(); return;
  }

  // Banner click → go to category
  const bannerSlide = t.closest('.banner-slide');
  if (bannerSlide && !dot) {
    const cat = BANNERS[S.bannerIdx]?.cat;
    if (cat) { S.activeCat = cat; goTo('catalog'); } return;
  }

  // Category pill
  const pill = t.closest('.cat-pill');
  if (pill) {
    S.activeCat = pill.dataset.cat;
    if (S.screen === 'home') { goTo('catalog'); }
    else { render(); initCatSearch(); } return;
  }

  // "Все →" links
  const goto = t.closest('[data-goto]');
  if (goto) { const cat = goto.dataset.filter; if(cat) S.activeCat='all'; goTo(goto.dataset.goto); return; }

  // Favorite toggle (card)
  const favBtn = t.closest('[data-fav]');
  if (favBtn) { e.stopPropagation(); toggleFavorite(+favBtn.dataset.fav); return; }

  // Add to cart (card)
  const addBtn = t.closest('[data-add]');
  if (addBtn) { e.stopPropagation(); addToCart(+addBtn.dataset.add, 1); return; }

  // Product card → open sheet
  const card = t.closest('.product-card');
  if (card) { openSheet(+card.dataset.id); return; }

  // Sheet backdrop → close
  if (t.id === 'sheetBackdrop') { closeSheet(); return; }

  // Sheet fav
  if (t.id === 'sheetFavBtn') { toggleFavorite(S.sheetId); return; }

  // Sheet qty
  if (t.id === 'sheetQtyDec') { S.sheetQty = Math.max(1, S.sheetQty - 1); updateSheetBtn(); return; }
  if (t.id === 'sheetQtyInc') { S.sheetQty = Math.min(10, S.sheetQty + 1); updateSheetBtn(); return; }

  // Sheet add to cart
  if (t.id === 'sheetAddBtn') {
    if (!S.cart[S.sheetId]) addToCart(S.sheetId, S.sheetQty);
    updateSheetBtn(); return;
  }

  // Cart qty buttons
  const qtyDec = t.closest('[data-qty-dec]');
  if (qtyDec) { const id = +qtyDec.dataset.qtyDec; setCartQty(id, (S.cart[id]||1)-1); render(); initPromo(); return; }
  const qtyInc = t.closest('[data-qty-inc]');
  if (qtyInc) { const id = +qtyInc.dataset.qtyInc; setCartQty(id, (S.cart[id]||0)+1); render(); initPromo(); return; }

  // Cart empty → catalog
  if (t.closest('.cart-empty-btn')) { goTo('catalog'); return; }

  // Search toggle
  if (t.id === 'btnSearch') {
    const bar = document.getElementById('searchBar');
    const hdr = document.getElementById('appHeader');
    bar.classList.toggle('open');
    hdr.classList.toggle('search-open');
    if (bar.classList.contains('open')) document.getElementById('searchInput').focus();
    return;
  }
  if (t.id === 'btnSearchClear') {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchBar').classList.remove('open');
    document.getElementById('appHeader').classList.remove('search-open');
    return;
  }
});

/* Global search input */
document.addEventListener('input', e => {
  if (e.target.id === 'searchInput') {
    const q = e.target.value.trim().toLowerCase();
    if (q.length >= 1) {
      S.activeCat = 'all';
      S.catQuery  = q;
      goTo('catalog');
      setTimeout(() => {
        const ci = document.getElementById('catSearch');
        if (ci) { ci.value = q; ci.dispatchEvent(new Event('input')); }
      }, 50);
    }
  }
});

/* ===== TELEGRAM MAIN BUTTON ===== */
if (tg?.MainButton) {
  tg.MainButton.onClick(sendOrder);
  tg.MainButton.color = '#F5A623';
  tg.MainButton.textColor = '#000000';
}

/* ===== INIT ===== */
function init() {
  loadState();
  render();
  updateBadges();
  startBannerTimer();
}

document.addEventListener('DOMContentLoaded', init);
