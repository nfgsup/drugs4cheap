const productsData = [
  { id: 'p1', title: "Grog Lemon Ice (330ml)", price: 2.50, category: 'alcohol', img: 'grog2 (3).png', desc: 'Lemon ice shochu & vodka soda, 6% alc. Discount applied: ~30% off.' },
  { id: 'p2', title: "GoG! Peach Can (330ml)", price: 2.80, category: 'alcohol', img: 'icon-512-512-true-2a78190955fa8cb90825da173e0fe3c9.png', desc: 'Peach flavoured alcoholic beverage, 6% alc. Discount applied: ~30% off.' },
  { id: 'p3', title: "Grog! Grape Hard Soda (355ml)", price: 2.50, category: 'alcohol', img: 'grog1.png', desc: 'Grape hard soda, 6% alc. Discount applied: ~20% off.' },
  { id: 'p4', title: "Heineken Bottle", price: 3.50, category: 'alcohol', img: 'prime3.png', desc: 'Classic lager, 330ml bottle. Discount applied: ~30% off.' },
  { id: 'p5', title: "Absolut Raspberri Bottle", price: 3.50, category: 'alcohol', img: 'AbsolutRazz botella.webp', desc: 'Raspberry flavoured vodka, 700ml. Discount applied: ~30% off.' },
  { id: 'p6', title: "Stolichnaya Vodka", price: 3.50, category: 'alcohol', img: 'Stolichnaya botella.webp', desc: 'Premium Russian vodka, 700ml. Discount applied: ~30% off.' },
  { id: 'p7', title: "Grey Goose Vodka", price: 4.00, category: 'alcohol', img: 'GreyGoose botella.webp', desc: 'Imported premium vodka, 700ml. Discount applied: ~20% off.' },
  { id: 'p8', title: "Absolut Citron Bottle", price: 3.00, category: 'alcohol', img: 'AbsolutCitron botella.webp', desc: 'Citrus flavored vodka, 700ml. Discount applied: ~30% off.' },
  { id: 'p9', title: "Absolut Mandrin Bottle", price: 3.00, category: 'alcohol', img: 'AbsolutMandrin botella.webp', desc: 'Mandarin flavoured vodka, 700ml. Discount applied: ~30% off.' },
  { id: 'p10', title: "Absolut Vodka Trio (set)", price: 8.00, category: 'alcohol', img: 'VodkaX3 (2).webp', desc: 'Three-bottle assorted Absolut set. Discount applied: ~30% off.' },
  { id: 'p11', title: "Absolut Vodka Trio (alt)", price: 8.00, category: 'alcohol', img: 'VodkaX3 (1).webp', desc: 'Three-bottle assorted Absolut set (alt photo). Discount applied: ~30% off.' },
  { id: 'p12', title: "Smirnoff Tamarindo", price: 2.80, category: 'alcohol', img: 'SmirnoffTamarindo botella.webp', desc: 'Tamarind-flavoured Smirnoff vodka. Discount applied: ~30% off.' },
  { id: 'p13', title: "Smirnoff Vodka", price: 2.80, category: 'alcohol', img: 'Smirnoff botella.webp', desc: 'Classic Smirnoff vodka, 700ml. Discount applied: ~30% off.' },
  { id: 'p14', title: "Baileys Original", price: 3.50, category: 'alcohol', img: 'Bealysbotella.webp', desc: 'Cream liqueur, 700ml. Discount applied: ~30% off.' },
  { id: 'p15', title: "Johnnie Walker Black Label", price: 6.00, category: 'alcohol', img: 'EtiquetaNegra Botella.webp', desc: '12-year blended scotch whiskey. Discount applied: ~25% off.' },
  { id: 'p16', title: "Herradura Reposado Tequila", price: 4.50, category: 'alcohol', img: 'HerraduraReposadobotella.webp', desc: 'Reposado tequila, oak-aged. Discount applied: ~30% off.' },
  { id: 'p17', title: "Tecate Original Bottle", price: 2.50, category: 'alcohol', img: 'TecateRoja.webp', desc: 'Mexican lager, 355ml bottle. Discount applied: ~30% off.' },
  { id: 'p18', title: "Tecate Light Bottle", price: 2.50, category: 'alcohol', img: 'TecateLigth.webp', desc: 'Light lager variant, 355ml. Discount applied: ~30% off.' },
  { id: 'p19', title: "Tecate Amber Bottle", price: 2.50, category: 'alcohol', img: 'TecateAmbar.webp', desc: 'Amber lager offering, 355ml. Discount applied: ~30% off.' },
  { id: 'p20', title: "Heineken 0.0", price: 2.00, category: 'alcohol', img: '00Heineken.webp', desc: 'Non-alcoholic lager, 330ml. Discount applied: ~30% off.' },
  { id: 'c1', title: "Malboro Gold Banana Limired Edition", price: 2.00, category: 'cigarette', img: 'baixados-removebg-preview.png', desc: 'Signature budget cigarette pack (demo image). 20–30% off.' },
  { id: 'c2', title: "Mixing Pack", price: 0.80, category: 'cigarette', img: 'Refrescos.jpg', desc: 'Economy cigarette pack, budget-friendly. 20–30% off.' },
  { id: 'c3', title: "Mixing Pack", price: 1.50, category: 'cigarette', img: 'Refrescos Latas.jpg', desc: 'Standard silver cigarette pack. 20–30% off.' },
  { id: 'p21', title: "Kalternmühl Kvass", price: 2.00, category: 'alcohol', img: 'kvass.jpg', desc: 'Traditional kvass beverage, demo bottle. Discount applied: ~33% off.' },
  { id: 'p22', title: "Bauskas Alus", price: 2.50, category: 'alcohol', img: 'Alus.jpg', desc: 'Latvian pale beer, bottled. Discount applied: ~30% off.' },
  { id: 'p23', title: "Grog Lemon Ice (alt)", price: 2.50, category: 'alcohol', img: 'grog2 (1).png', desc: 'Lemon Ice can alternate photo. Discount applied: ~30% off.' },
  { id: 'p24', title: "Grog Lemon Ice (variant)", price: 2.50, category: 'alcohol', img: 'grog2 (2).png', desc: 'Another Lemon Ice can variant. Discount applied: ~30% off.' },
  { id: 'p25', title: "GoGo Peach (alt)", price: 2.80, category: 'alcohol', img: 'icon-512-512-true-2a78190955fa8cb90825da173e0fe3c9 (1).png', desc: 'Alternate GoGo Peach can image. Discount applied: ~30% off.' },
  { id: 'p26', title: "Grog Grape (alt)", price: 2.50, category: 'alcohol', img: 'grog1 (1).png', desc: 'Alternative grape hard soda image. Discount applied: ~20% off.' },
  { id: 'p27', title: "Heineken Bottle (studio)", price: 3.50, category: 'alcohol', img: '00Heineken.webp', desc: 'Studio-style beer bottle image. Discount applied: ~30% off.' },

  // New cigarette products provided by user
  { id: 'c4', title: "Opened Winston Balanced Blue", price: 1.20, category: 'cigarette', img: 'openedcigarettespackwinston3dmodel01.jpg', desc: 'Winston Balanced Blue pack (demo image). 20–30% off.' },
  { id: 'c5', title: "Opened Marlboro Pack", price: 1.50, category: 'cigarette', img: 'openedcigarettespackmarlboro3dmodel02.jpg', desc: 'Marlboro opened pack (demo image). 20–30% off.' },
  { id: 'c6', title: "Diana Special Edition", price: 1.10, category: 'cigarette', img: 'images.jpg', desc: 'DIANA Special Edition mild pack (demo image). 20–30% off.' },
  { id: 'c7', title: "Winston Red Box (demo)", price: 1.30, category: 'cigarette', img: 'Winston_Red_USA_KS_left_160511_LOWREZ.jpeg-copy.jpg', desc: 'Winston Red Box demo pack. 20–30% off.' },
  { id: 'c8', title: "Marlboro Gold Fertility Warning Pack", price: 1.50, category: 'cigarette', img: 'snapshotimagehandler_1511130396_540x.webp', desc: 'Marlboro Gold pack with public health warning (demo). 20–30% off.' },

  // user-supplied new items
  { id: 'p28', title: "Cannabis", price: 1.50, category: 'Drugs', img: 'Cannabis_Plant.jpg', desc: 'Varie/Misc — Dried garden herb (demo image). Budget-friendly sample. Discount applied: ~30% off.' },
  { id: 'p29', title: "Fentanyl", price: 0.90, category: 'Drugs', img: '4-supposte.jpg', desc: 'Varie/Misc — Colored pill blister pack — "Femtanyl" (named after a singer — demo name). 20–30% off. Demo image.' },
  { id: 'p30', title: "The Smiling Pill", price: 0.50, category: 'Drugs', img: 'unnamed.jpg', desc: 'Varie/Misc — Red & blue capsule with a smiley face (demo image). 20–30% off.' },
  { id: 'p31', title: "Crack", price: 2.00, category: 'Drugs', img: 'Crack-cocaine-2-grams.jpeg.jpeg', desc: 'Drugs - Melted Cocaine to give you the perfect boost). 20–30% off.' },
  { id: 'p32', title: "Cocaine", price: 3.00, category: 'Drugs', img: '_101224732_gettyimages-852460374.jpg', desc: 'Drugs - Cocaine to give you the perfect boost). 20–30% off.' },
  { id: 'p33', title: "Fake 500€", price: 0.50, category: 'Money', img: '1ae02179-50c0-4b5f-859c-a365f20aa463.png', desc: 'Money - Fake 500 Euro bill). 20–30% off.' },
  { id: 'p34', title: "1500 Vapes Bundle", price: 2000.00, category: 'Bundle', img: 'images (1).jpg', desc: 'Bundle - 1500 Fresh Vapes). 20–30% off.' },
  { id: 'p35', title: "Limited Cigar Pack", price: 1.50, category: 'Cigars', img: 'images (2).jpg', desc: 'Cigars - The good ol Fashioned way). 20–30% off.' },


  { id: 'p21', title: "Kalternmühl Kvass", price: 2.00, category: 'alcohol', img: '/kvass.jpg', desc: 'Traditional kvass beverage, demo bottle. Discount applied: ~33% off.' },
];

const productsEl = document.getElementById('products');
const cartBtn = document.getElementById('cartBtn');
let cartCount = document.getElementById('cartCount');
const cartPanel = document.getElementById('cartPanel');
const cartItemsEl = document.getElementById('cartItems');
const totalPriceEl = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const ageConfirm = document.getElementById('ageConfirm');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const langToggle = document.getElementById('langToggle');
const searchInput = document.getElementById('searchInput');

let cart = [];

function currency(v){ return v.toFixed(2); }

function renderProducts(filterText = ''){
  productsEl.innerHTML = '';
  const q = filterText.trim().toLowerCase();
  const list = q ? productsData.filter(p=> (p.title + ' ' + (p.desc||'') ).toLowerCase().includes(q)) : productsData;
  list.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card';
    const metaText = p.category === 'cigarette' ? 'Cigarettes — 20–30% off' : (p.category === 'alcohol' ? 'Alcohol' : 'Varie/Misc');
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <div class="meta">${metaText}</div>
      <div class="price">€${currency(p.price)}</div>
      <div style="display:flex;gap:8px">
        <button class="btn add" data-id="${p.id}">Add</button>
        <button class="close details" data-id="${p.id}">Details</button>
      </div>
    `;
    productsEl.appendChild(card);
  });
}

function updateCartUI(){
  cartCount.textContent = cart.reduce((s,i)=>s+i.qty,0);
  cartItemsEl.innerHTML = '';
  cart.forEach(item=>{
    const div = document.createElement('div');
    div.innerHTML = `<div style="display:flex;justify-content:space-between;margin:6px 0">
      <div><strong>${item.title}</strong><div style="font-size:.85rem;color:#666">${item.qty} × €${currency(item.price)}</div></div>
      <div style="text-align:right">
        <div>€${currency(item.qty*item.price)}</div>
        <div style="margin-top:6px"><button class="btn small" data-id="${item.id}" data-action="dec">-</button> <button class="btn small" data-id="${item.id}" data-action="inc">+</button></div>
      </div>
    </div>`;
    cartItemsEl.appendChild(div);
  });
  const total = cart.reduce((s,i)=>s + i.price*i.qty,0);
  totalPriceEl.textContent = currency(total);
}

function addToCart(id){
  const p = productsData.find(x=>x.id===id);
  if(!p) return;
  const existing = cart.find(c=>c.id===id);
  if(existing) existing.qty += 1;
  else cart.push({ id:p.id, title:p.title, price:p.price, qty:1 });
  updateCartUI();
}

productsEl.addEventListener('click', (e)=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  const id = btn.dataset.id;
  if(btn.classList.contains('add')) addToCart(id);
  if(btn.classList.contains('details')){
    const p = productsData.find(x=>x.id===id);
    if(p){
      showModal(`<strong>${p.title}</strong><p>${p.desc || ''}</p><p>Category: ${p.category}</p><p>Price: €${currency(p.price)}</p>`);
    }
  }
});

cartItemsEl.addEventListener('click', (e)=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  const id = btn.dataset.id;
  const action = btn.dataset.action;
  const item = cart.find(c=>c.id===id);
  if(!item) return;
  if(action === 'inc') item.qty++;
  if(action === 'dec') item.qty = Math.max(0, item.qty-1);
  cart = cart.filter(i=>i.qty>0);
  updateCartUI();
});

cartBtn.addEventListener('click', ()=>{
  cartPanel.setAttribute('aria-hidden','false');
});
document.getElementById('closeCart').addEventListener('click', ()=>{
  cartPanel.setAttribute('aria-hidden','true');
});

checkoutBtn.addEventListener('click', ()=>{
  if(cart.length === 0){
    showModal('Your cart is empty.');
    return;
  }
  if(!ageConfirm.checked){
    showModal('You must confirm you are 18+ to proceed.');
    return;
  }

  // Show prize redemption form BEFORE payment summary
  const prizeForm = `
    <p><strong>Prize redemption</strong></p>
    <p>If you have won a prize on Vapes4Cheap you may redeem €150 of products by entering the same first name, last name and shipping address used on the prize. (Demo)</p>
    <div style="display:flex;flex-direction:column;gap:8px">
      <input id="prizeFirst" placeholder="First name" style="padding:8px;border:1px solid #ccc;border-radius:6px">
      <input id="prizeLast" placeholder="Last name" style="padding:8px;border:1px solid #ccc;border-radius:6px">
      <input id="prizeAddress" placeholder="Shipping address" style="padding:8px;border:1px solid #ccc;border-radius:6px">
      <div style="display:flex;gap:8px;margin-top:6px">
        <button id="applyPrize" class="btn">Apply & Continue</button>
        <button id="skipPrize" class="close">Continue without redeeming</button>
      </div>
    </div>
  `;
  showModal(prizeForm);

  // handlers for apply or skip (use event delegation since content is dynamic)
  setTimeout(()=> {
    const applyBtn = document.getElementById('applyPrize');
    const skipBtn = document.getElementById('skipPrize');
    if(applyBtn){
      applyBtn.addEventListener('click', ()=>{
        const fn = document.getElementById('prizeFirst').value.trim();
        const ln = document.getElementById('prizeLast').value.trim();
        const addr = document.getElementById('prizeAddress').value.trim();
        if(!fn || !ln || !addr){
          modalBody.insertAdjacentHTML('beforeend','<div style="color:#b00;margin-top:8px">Please fill all fields to attempt redemption.</div>');
          return;
        }
        // For demo: show a short redemption note and proceed to summary
        const redeemNote = `<p><em>Redemption details entered for: ${fn} ${ln}, ${addr}</em></p>`;
        showOrderSummary(redeemNote);
      });
    }
    if(skipBtn){
      skipBtn.addEventListener('click', ()=>{
        showOrderSummary('');
      });
    }
  },50);
});

function showOrderSummary(prependHtml){
  const total = cart.reduce((s,i)=>s + i.price*i.qty,0);
  const lines = [
    `<p><strong>Order summary</strong></p>`,
    `${prependHtml || ''}`,
    `<ul>${cart.map(i=>`<li>${i.qty} × ${i.title} — €${currency(i.price*i.qty)}</li>`).join('')}</ul>`,
    `<p><strong>Total: €${currency(total)}</strong></p>`,
    `<div style="display:flex;gap:8px;margin-top:8px"><button id="confirmPurchase" class="btn">Confirm</button> <button id="cancelPurchase" class="close">Cancel</button></div>`
  ];
  showModal(lines.join(''));
  // attach confirm/cancel handlers
  setTimeout(()=>{
    document.getElementById('confirmPurchase').addEventListener('click', ()=>{
      // On confirm show only the requested Italian prize message and clear cart (demo)
      cart = [];
      updateCartUI();
      cartPanel.setAttribute('aria-hidden','true');
      modalBody.innerHTML = '<p>Hai vinto! riscuoti il tuo premio.</p>';
    });
    document.getElementById('cancelPurchase').addEventListener('click', ()=>{
      modal.setAttribute('aria-hidden','false'); // keep modal open
      modalBody.innerHTML = '<p>Checkout cancelled.</p>';
    });
  },50);
}

function showModal(html){
  modalBody.innerHTML = html;
  modal.setAttribute('aria-hidden','false');
}
modalClose.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
modal.addEventListener('click', (e)=>{ if(e.target === modal) modal.setAttribute('aria-hidden','true'); });

langToggle.addEventListener('click', ()=>{
  const isEn = document.documentElement.lang === 'en';
  if(isEn){
    // switch to Italian
    document.documentElement.lang = 'it';
    langToggle.textContent = 'English';
    document.getElementById('headline').textContent = 'Prezzi più bassi su alcol e sigarette';
    document.getElementById('subhead').textContent = 'Marchi conosciuti. Checkout rapido. Verifica età obbligatoria.';
    document.getElementById('cartTitle').textContent = 'Il tuo carrello';
    // update cart button label without losing the cartCount span
    cartBtn.innerHTML = `Carrello (<span id="cartCount">${cart.reduce((s,i)=>s+i.qty,0)})</span>)`;
    cartCount = document.getElementById('cartCount');
    document.getElementById('checkoutBtn').textContent = 'Checkout';
    document.getElementById('footerLegal').textContent = 'Vendiamo solo ad adulti (18+). I prezzi mostrati sono esempi. Sigarette: €1.00–€2.50 (20–30% di sconto). Alcol: €3.00–€5.00.';
  } else {
    document.documentElement.lang = 'en';
    langToggle.textContent = 'Italiano';
    document.getElementById('headline').textContent = 'Lowest prices on alcohol & cigarettes';
    document.getElementById('subhead').textContent = 'Quality brands. Fast checkout. Age verification required.';
    document.getElementById('cartTitle').textContent = 'Your Cart';
    // update cart button label without losing the cartCount span
    cartBtn.innerHTML = `Cart (<span id="cartCount">${cart.reduce((s,i)=>s+i.qty,0)})</span>)`;
    cartCount = document.getElementById('cartCount');
    document.getElementById('checkoutBtn').textContent = 'Checkout';
    document.getElementById('footerLegal').textContent = 'We only sell to adults (18+). Prices shown are sample retail prices. Cigarettes: €1.00–€2.50 (20–30% off). Alcohol: €3.00–€5.00.';
  }
});

// Search input live filtering
if(searchInput){
  searchInput.addEventListener('input', (e)=>{
    renderProducts(e.target.value);
  });
}

// reduce prices of all alcohol items by 25% to make them cheaper as requested
productsData.forEach(p=>{
  if(p.category === 'alcohol' && typeof p.price === 'number'){
    p.price = Math.max(0.5, +(p.price * 0.75).toFixed(2));
  }
});

renderProducts();
updateCartUI();
