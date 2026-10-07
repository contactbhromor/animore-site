// ===== Settings =====
// Your Vercel backend address (no slash at the end), e.g. https://animore-api.vercel.app
const API_BASE = 'https://animore-api.vercel.app';
// =====================

const IMG = Array.from({length:67}, (_, i) => `images/${i}.jpg`);
const LOGO = "images/logo.png";

// Catalogue data taken from the document. Category text is the document's wording (spelling tidied);
// per-saree descriptions are written from each photo.
const CATEGORIES = [
 {name:"Uppada Soft Silk with Allover Pochampally Ikkat Designs",
  about:"New Uppada soft silk with allover Pochampally ikkat designs, double kanchi borders, contrast pallu and plain blouse.",
  tags:["Uppada soft silk","Pochampally ikkat","Double kanchi border","Contrast pallu","Plain blouse"],
  items:[
   ["USSP4001",[37,36],"Emerald green ikkat body with a rani pink pallu and a plum border woven in gold zari."],
   ["USSP4002",[39,38],"Navy blue with olive-gold ikkat florals, a hot pink pallu and a gold temple border."],
   ["USSP4003",[41,40],"Violet ikkat body with a lime-yellow pallu and a plum border in silver-gold zari."],
   ["USSP4004",[43,42],"Bottle green ikkat with a bright pink pallu and a plum double kanchi border."],
   ["USSP4005",[45,44],"Fresh aqua ikkat with a pink-red pallu and a lilac border in silver zari."],
   ["USSP4006",[47,46],"Dusky lilac-grey ikkat with a rose pink pallu and a violet temple border."],
   ["USSP4007",[49,48],"Soft pistachio ikkat with a coral-red ikkat pallu and a grey-silver border."],
   ["USSP4008",[51,50],"Peach and rose-gold ikkat with a deep green pallu and a gold-woven border."]]},
 {name:"Mangalagiri Silk Kanchi Border with Buta Sarees",
  about:"Good quality Mangalagiri silk with kanchi border, self BB buta and running blouse.",
  tags:["Mangalagiri silk","Kanchi border","Self buta","Running blouse"],
  items:[
   ["MG5404",[32],"Bright orange with a red kanchi border and gold buttas."],
   ["MG5401",[33],"Royal blue with silver buttas and a silver kanchi border."],
   ["MG5402",[34],"Turquoise blue with silver buttas and border."],
   ["MG5405",[35],"Teal blue with gold buttas and a contrast border."]]},
 {name:"Mangalagiri Tissue Kuppadam Sarees",
  about:"Pure half fine zari, allover zari butta, contrast rich pallu and plain blouse.",
  tags:["Half fine zari","Allover zari butta","Contrast pallu","Plain blouse"],
  items:[
   ["MT6001",[22],"Tangerine tissue with gold buttas and a dark brown zari border."],
   ["MT6003",[23],"Baby pink with a green zari border and contrast pallu."],
   ["MT6004",[24],"Sky blue with a purple zari border and contrast pallu."],
   ["MT6005",[25],"Parrot green with a wine zari border and rich pallu."]]},
 {name:"Pure Tussar Kosa Alfi Border Design Saree",
  about:"Rich pallu and blouse, jamdani pallu.",
  tags:["Pure tussar silk","Silk Mark certified","Jamdani pallu","Quality assured"],
  items:[
   ["TK6501",[26],"Olive green kosa with a gold alfi border."],
   ["TK6502",[27],"Chocolate brown with a gold alfi border and patterned pallu."],
   ["TK6503",[28],"Magenta purple with a wide gold border and pallu."],
   ["TK6504",[29],"Royal blue with a silver-grey woven border and pallu."]]},
 {name:"Semi Raw Silk Handloom Tribal Figure Art Saree",
  about:"Hand border design with heavy pallu and blouse. Ready to dispatch.",
  tags:["Art silk","Handloom weave","Handloom tag","Best quality"],
  items:[
   ["AS4002",[30],"Navy checks with a gold tribal-figure border and heavy pallu."],
   ["AS4001",[31],"Deep blue with a silver-grey tribal-figure border and pallu."]]},
 {name:"Ikkat Cotton Silk Sequence Saree with Running Blouse Piece",
  about:"New ikkat cotton silk with sequence work. Super quality and comfortable.",
  tags:["Cotton silk","Ikkat","Sequence work","Running blouse"],
  items:[
   ["Ikkat Cotton Silk",[21],"White body with a red ikkat border and pallu, dotted with red paisley buttis."]]},
 {name:"Pure Gachi Tussar Jamdani Sarees with Blouse Piece", comingSoon:true,
  about:"Allover handwoven original tussar jamdani sarees.",
  tags:["Pure gachi tussar","Handwoven jamdani","Blouse piece included"],
  items:[
   ["GTJS6501",[0,52],"Brick red tussar scattered with ivory jamdani motifs, finished with a figurative woven pallu and tasselled edge."],
   ["GTJ6502",[1,53],"Olive khaki body with ivory woven figures and a broad geometric pallu in cream and gold."],
   ["GTJ6503",[2,54],"Soft dove blue with white jamdani buttis and a bold lattice pallu."],
   ["GTJ6504",[3,55],"Deep plum with ivory buttis and a striking geometric pallu with tassels."],
   ["GTJ6505",[65,66],"Coffee brown tussar with ivory leaf-and-vine jamdani flowing over the whole drape."]]},
 {name:"Pure Gachi Tussar Jamdani Sarees with Blouse Piece", comingSoon:true,
  about:"Our most requested tussar jamdani. Allover handwoven, super soft, light weight and premium quality.",
  tags:["Pure gachi tussar","Super soft","Light weight","Blouse piece included"],
  items:[
   ["TJS7001",[5,56],"Midnight navy with a bronze woven border and a richly patterned pallu."]]},
 {name:"Crash Tissue Linen Sarees with Running Blouse Piece", comingSoon:true,
  about:"Tissue by linen with inch border. Premium quality with a super soft fabric.",
  tags:["Tissue by linen","Inch border","Running blouse"],
  items:[
   ["TL1501",[6,57],"Steel blue with a warm gold tissue sheen and fine zari stripes through the pallu."],
   ["TL1502",[7,58],"Clear aqua with silver tissue stripes; cool and airy."],
   ["TL1503",[8,59],"Silver grey crash tissue with a striped, checked pallu."],
   ["TL1504",[9,60],"Peach rose with gold tissue shimmer and a striped pallu."],
   ["TL1505",[10,61],"Dusky mauve with a soft gold glow and woven stripes."]]},
 {name:"Linen Zari Weaving Work Saree with Blouse Piece", comingSoon:true,
  about:"Linen sarees with zari weaving work.",
  tags:["Linen","Zari weaving","Blouse piece included"],
  items:[
   ["NZW2501",[11,62],"Espresso brown checks with a floral zari pallu and gold-striped border."],
   ["NZW2502",[12,63],"Wine maroon with woven florals on the pallu and a gold border."],
   ["NZW2503",[13,64],"Peacock blue checks with large ivory florals and a silver-gold pallu."]]},
 {name:"Gachi Tussar Muga Silk Sarees with Kanjivaram Border", comingSoon:true,
  about:"Exclusive new gachi tussar muga silk with kanjivaram design border. Gorgeous tussar colour, premium quality and light weight. Beautiful designer blouse piece available.",
  tags:["Gachi tussar muga silk","Kanjivaram border","Designer blouse"],
  items:[
   ["GTMS2001",[14],"Natural beige tussar with a deep red kanjivaram border and a red woven pallu."],
   ["GTMS2002",[16,15],"Ivory muga with a red temple border, red buttis and a rich red pallu."],
   ["GMTS2003",[17],"Cream body with a turquoise temple border and matching pallu."],
   ["GMTS2004",[18],"Cream with a red kanjivaram border and striped red pallu."],
   ["GMTS2005",[19],"Cream with a maroon kanjivaram border and striped pallu."],
   ["GMTS2006",[20],"Cream with a black kanjivaram border for a sharp contrast."]]}
];

const liked = new Set();
const basket = new Map(); // code -> qty
// Keep basket and saved sarees between visits, and across the round trip to Stripe
const STORE_KEY = 'animore-state-v1';
function saveState(){
  try { localStorage.setItem(STORE_KEY, JSON.stringify({basket:[...basket], liked:[...liked]})); } catch (e) {}
}
function loadState(){
  try {
    const s = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
    (s.basket || []).forEach(([c,q]) => { if (byCode[c] && !byCode[c].comingSoon && Number.isInteger(q) && q > 0) basket.set(c, Math.min(q, 10)); });
    (s.liked || []).forEach(c => { if (byCode[c]) liked.add(c); });
  } catch (e) {}
}
const byCode = {};
const $ = s => document.querySelector(s);
const heartSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 7.9 3.6 4.5 7 4.5c2 0 3.6 1.1 5 3 1.4-1.9 3-3 5-3 3.4 0 5.6 3.4 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2z"/></svg>';
const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const slug = s => s.replace(/\s+/g,'-');
// Price = 4th and 3rd digits from the end of the code, e.g. GTJS6501 -> £65
// Collections with a set price (price: in CATEGORIES) use that instead. Keep api/checkout.js in step.
const priceOf = code => { const m = code.match(/(\d)(\d)\d\d$/); return m ? +(m[1]+m[2]) : null; };
const gbp = n => '£' + (Number.isInteger(n) ? n.toLocaleString('en-GB') : n.toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2}));
$('#brandLogo').src = LOGO;

const isCert = t => /silk\s*mark/i.test(t);
const CERT_IC = '<svg class="cert-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
// Build index and catalogue
let idx = '', html = '';
CATEGORIES.forEach((c, i) => {
  const n = i + 1;
  idx += `<li><a href="#cat-${n}"><span class="n">${n}</span><span class="nm">${esc(c.name)}</span><span class="q">${c.items.length}</span></a></li>`;
  html += `<section class="cat" id="cat-${n}" aria-labelledby="h-${n}">
    <div class="cat-head"><span class="cat-num" aria-hidden="true">${n}</span><h2 id="h-${n}">${esc(c.name)}</h2><p>${esc(c.about)}</p></div>
    <div class="weave" aria-hidden="true"></div>`;
  c.items.forEach(([code, imgs, desc]) => {
    const price = c.price != null ? c.price : priceOf(code); // collection price overrides the code rule
    byCode[code] = {code, cat:c.name, n, img:imgs[0], price, desc, tags:c.tags, about:c.about, order:Object.keys(byCode).length, comingSoon:c.comingSoon||false};
    const id = slug(code);
    html += `<article class="item" data-code="${esc(code)}" id="s-${id}">
      <div class="info">
        <p class="cname">${n}. ${esc(c.name)}</p>
        <p class="code">${esc(code)}</p>
        <h3 class="desc">${esc(desc)}</h3>
        <ul>${c.tags.map(t => isCert(t) ? `<li class="cert">${CERT_IC}${esc(t)}</li>` : `<li>${esc(t)}</li>`).join('')}</ul>
        <div class="actions">
          <button class="heart" data-act="like" aria-pressed="false" aria-label="Save ${esc(code)}">${heartSvg}</button>
          <button class="add" data-act="add"${c.comingSoon ? ' disabled aria-disabled="true"' : ''}>${c.comingSoon ? 'Coming soon' : 'Add to basket'}</button>
          <span class="inb" hidden></span>
        </div>
      </div>
      <figure class="pic">
        <div class="frame">
          <img src="${IMG[imgs[0]]}" alt="${esc(code)}: ${esc(desc)}" loading="lazy" data-act="zoom">
          <img class="wm" src="${LOGO}" alt="">
          <div class="tag"><span>${esc(code)}  - ${c.comingSoon ? 'Coming soon' : price != null ? gbp(price) : 'Price on request'}</span></div>
        </div>
        ${imgs.length > 1 ? `<div class="views">${imgs.map((k,j)=>`<button data-act="view" data-img="${k}" aria-label="View ${j+1}" aria-current="${j===0}"><img src="${IMG[k]}" alt=""></button>`).join('')}</div>` : ''}
      </figure>
    </article>`;
  });
  html += `</section>`;
});
$('#index').innerHTML = idx;
$('#trio').innerHTML = [37,32,26].map(k=>`<img src="${IMG[k]}" alt="">`).join('');
$('#catalog').innerHTML = html;
loadState();

// UI helpers
function bump(el){ el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
let tt;
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(tt); tt=setTimeout(()=>t.classList.remove('show'),2200); }
const qtyTotal = () => [...basket.values()].reduce((a,b)=>a+b,0);

function renderCounts(){
  saveState();
  $('#savedCount').textContent = liked.size;
  $('#basketCount').textContent = qtyTotal();
  document.querySelectorAll('.item').forEach(el => {
    const code = el.dataset.code, q = basket.get(code) || 0, inb = el.querySelector('.inb');
    el.classList.toggle('liked', liked.has(code));
    const h = el.querySelector('.heart');
    h.setAttribute('aria-pressed', liked.has(code));
    h.setAttribute('aria-label', (liked.has(code)?'Remove ':'Save ')+code+(liked.has(code)?' from saved':''));
    inb.hidden = !q;
    if (q) inb.innerHTML = `${q} in basket. <button data-act="open">View basket</button>`;
  });
  document.querySelectorAll('.cat').forEach(s => s.classList.toggle('has-liked', !!s.querySelector('.item.liked')));
  document.body.classList.toggle('none-saved', liked.size === 0);
}

const lines = () => [...basket].map(([code,q]) => ({...byCode[code], q, total: byCode[code].price != null ? byCode[code].price*q : null}));
const subtotal = () => lines().reduce((a,l) => a + (l.total || 0), 0);
const hasPOR = () => lines().some(l => l.price == null);
// Offer: 5% off the order when two or more sarees are bought
const PROMO_MIN = 2, PROMO_RATE = 0.05;
const discount = () => qtyTotal() >= PROMO_MIN ? Math.round(subtotal()*PROMO_RATE*100)/100 : 0;
const payable = () => subtotal() - discount();
function setView(v){ $('#drawer').dataset.view = v; $('#dtitle').textContent = {basket:'Your basket', checkout:'Checkout', done:'Order placed'}[v]; }
function sumHtml(){
  const d = discount();
  return lines().map(l => `<li><span>${esc(l.code)} × ${l.q}</span><span>${l.total != null ? gbp(l.total) : 'Price on request'}</span></li>`).join('')
    + (d ? `<li><span>5% two-saree discount</span><span>−${gbp(d)}</span></li>` : '')
    + `<li><span>UK delivery</span><span>Free</span></li>`
    + `<li><span>Total</span><span>${gbp(payable())}${hasPOR() ? ' + price on request' : ''}</span></li>`;
}
function renderBasket(){
  const list = $('#dlist');
  if (!basket.size){
    list.innerHTML = `<li class="dempty" style="display:block;border:0"><strong>Your basket is empty</strong>Add a saree from any collection and it will appear here.</li>`;
    $('#dfoot').hidden = true; return;
  }
  $('#dfoot').hidden = false;
  list.innerHTML = [...basket].map(([code,q]) => { const s = byCode[code]; return `
    <li data-code="${esc(code)}">
      <img src="${IMG[s.img]}" alt="">
      <div><div class="c">${esc(code)}</div><div class="k">${s.n}. ${esc(s.cat)}</div>
        <div class="pr">${s.price != null ? gbp(s.price) + ' each' : 'Price on request'}</div>
        <div class="qty"><button data-act="dec" aria-label="One fewer ${esc(code)}">&minus;</button><span>${q}</span><button data-act="inc" aria-label="One more ${esc(code)}">+</button></div></div>
      <div class="end"><span class="lt">${s.price != null ? gbp(s.price*q) : ''}</span><button class="rm" data-act="rm">Remove</button></div>
    </li>`; }).join('');
  $('#dcount').textContent = qtyTotal();
  const d = discount(), q = qtyTotal();
  $('#dsub').textContent = gbp(subtotal());
  $('#ddiscRow').hidden = !d;
  $('#ddisc').textContent = d ? '−' + gbp(d) : '';
  const nu = $('#nudge');
  nu.hidden = q !== 1;
  nu.textContent = 'Add one more saree to receive 5% off your order.';
  $('#dtotal').textContent = gbp(payable());
  $('#porNote').hidden = !hasPOR();
}

let lastFocus;
function openDrawer(){ lastFocus=document.activeElement; setView('basket'); renderBasket(); $('#shell').classList.add('open'); $('#drawer').setAttribute('aria-hidden','false'); $('#basketBtn').setAttribute('aria-expanded','true'); $('#closeDrawer').focus(); }
function closeDrawer(){ $('#shell').classList.remove('open'); $('#drawer').setAttribute('aria-hidden','true'); $('#basketBtn').setAttribute('aria-expanded','false'); lastFocus && lastFocus.focus(); }

// Catalogue actions
$('#catalog').addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const item = b.closest('.item'), code = item && item.dataset.code;
  switch (b.dataset.act){
    case 'like':
      liked.has(code) ? liked.delete(code) : liked.add(code);
      bump($('#savedCount')); renderCounts(); break;
    case 'add':
      basket.set(code, (basket.get(code)||0) + 1);
      bump($('#basketCount')); renderCounts(); toast(`Added ${code}${byCode[code].price != null ? ' ('+gbp(byCode[code].price)+')' : ''} to basket`); break;
    case 'open': openDrawer(); break;
    case 'view':
      item.querySelector('.frame img').src = IMG[b.dataset.img];
      item.querySelectorAll('.views button').forEach(x => x.setAttribute('aria-current', x===b)); break;
    case 'zoom':
      lastFocus=b; $('#lbImg').src=b.src; $('#lbImg').alt=b.alt; $('#lb').classList.add('show'); $('#lbClose').focus(); break;
  }
});

// Drawer actions
$('#dlist').addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const code = b.closest('li').dataset.code, q = basket.get(code);
  if (b.dataset.act==='inc') basket.set(code, q+1);
  if (b.dataset.act==='dec') q>1 ? basket.set(code, q-1) : basket.delete(code);
  if (b.dataset.act==='rm') basket.delete(code);
  renderBasket(); renderCounts();
});
$('#toCheckout').addEventListener('click', () => {
  $('#coSum').innerHTML = sumHtml();
  $('#coTotal').textContent = gbp(payable());
  const por = hasPOR();
  $('#coPor').hidden = !por;
  $('#payBtn').disabled = por;
  $('#coErr').hidden = true;
  setView('checkout'); $('.p-checkout .back').focus();
});
document.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => { setView(b.dataset.go); $('#toCheckout').focus(); }));

// Sends only codes and quantities. The server sets every price, so prices can't be changed in the browser.
$('#payBtn').addEventListener('click', async () => {
  const btn = $('#payBtn'), err = $('#coErr');
  err.hidden = true;
  if (API_BASE.includes('YOUR-VERCEL-PROJECT')){
    err.textContent = 'Payments are not set up yet: add your Vercel address to API_BASE at the top of script.js.';
    err.hidden = false; return;
  }
  btn.disabled = true; btn.classList.add('loading'); btn.textContent = 'Opening secure checkout…';
  try {
    const res = await fetch(API_BASE + '/api/checkout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        items: [...basket].map(([code, qty]) => ({code, qty})),
        notes: $('#coNotes').value.trim()
      })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.url) throw new Error(data.error || 'Checkout could not be started. Please try again.');
    saveState();
    window.location.href = data.url;
  } catch (e) {
    err.textContent = e.message === 'Failed to fetch' ? 'We could not reach the payment server. Please check your connection and try again.' : e.message;
    err.hidden = false;
    btn.disabled = false; btn.classList.remove('loading'); btn.textContent = 'Pay securely with Stripe';
  }
});
$('#newOrder').addEventListener('click', () => { closeDrawer(); });

// Returning from Stripe: ?checkout=success&session_id=... or ?checkout=cancelled
(function(){
  const qs = new URLSearchParams(location.search), status = qs.get('checkout');
  if (!status) return;
  history.replaceState(null, '', location.pathname + location.hash);
  if (status === 'success'){
    basket.clear(); saveState(); renderCounts();
    const sid = qs.get('session_id') || '';
    $('#doneRef').textContent = sid ? 'Order reference: ' + sid.slice(-10).toUpperCase() : '';
    lastFocus = $('#basketBtn');
    $('#shell').classList.add('open'); $('#drawer').setAttribute('aria-hidden','false');
    setView('done'); $('#newOrder').focus();
  } else if (status === 'cancelled'){
    toast('Payment cancelled. Your basket has been saved.');
  }
})();

$('#basketBtn').addEventListener('click', openDrawer);
$('#closeDrawer').addEventListener('click', closeDrawer);
$('#scrim').addEventListener('click', closeDrawer);
$('#savedBtn').addEventListener('click', e => {
  const on = !document.body.classList.contains('saved-only');
  document.body.classList.toggle('saved-only', on);
  e.currentTarget.setAttribute('aria-pressed', on);
  window.scrollTo({top:0});
});
$('#showAll').addEventListener('click', () => $('#savedBtn').click());
const closeLb = () => { $('#lb').classList.remove('show'); lastFocus && lastFocus.focus(); };
$('#lb').addEventListener('click', e => { if (e.target.id !== 'lbImg') closeLb(); });
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if ($('#lb').classList.contains('show')) closeLb();
  else if ($('#shell').classList.contains('open')) closeDrawer();
  else if (!$('#spanel').hidden) closeSearch(true);
});
// Search: matches saree codes, collection names, fabric/style tags and the colour words in each description
const POPULAR = ['Silk Mark certified','Tussar jamdani','Crash tissue linen','Linen zari','Tussar muga silk','Kanjivaram border','Ikkat cotton silk','Mangalagiri','Kuppadam','Tussar kosa','Tribal figure art','Uppada ikkat silk'];
const RECOMMENDED = ['USSP4001','GTJ6504','TL1501','NZW2503','GTMS2002','MT6004','TK6503','MG5404','USSP4005','AS4001'];
const STOP = new Set(['saree','with','and','the','for','of','a','in']);
const ALIAS = {sari:'saree',saris:'saree',sarees:'saree',tasar:'tussar',tusser:'tussar',tassar:'tussar',ikat:'ikkat',ikkath:'ikkat',kanjeevaram:'kanjivaram',kanchipuram:'kanjivaram',pochampalli:'pochampally',jamdhani:'jamdani',grey:'gray',silkmark:'silk mark',certificate:'certified',certification:'certified',certify:'certified',silkmarked:'silk mark'};
const norm = t => t.toLowerCase().replace(/gray/g,'grey').replace(/[^a-z0-9\s]/g,' ');
Object.values(byCode).forEach(b => {
  b.k = {code:b.code.toLowerCase(), desc:norm(b.desc), tags:norm(b.tags.join(' ')), cat:norm(b.cat+' '+b.about)};
  b.blob = [b.k.code, b.k.desc, b.k.tags, b.k.cat].join(' ');
});
const tokensOf = q => norm(q).split(/\s+/).filter(Boolean).map(t => ALIAS[t] || t).filter(t => !STOP.has(t));
function searchSarees(q){
  const toks = tokensOf(q);
  return Object.values(byCode).map(b => {
    if (!toks.every(t => b.blob.includes(t))) return null;
    const sc = toks.reduce((a,t) => a + (b.k.code.includes(t)?10:0) + (b.k.desc.includes(t)?3:0) + (b.k.tags.includes(t)?2:0) + (b.k.cat.includes(t)?1:0), 0);
    return {b, sc};
  }).filter(Boolean).sort((x,y) => y.sc - x.sc || x.b.order - y.b.order).map(r => r.b);
}
const sCard = b => `<div class="sc" data-code="${esc(b.code)}">
  <div class="pw"><button class="go" data-sact="go" tabindex="-1" aria-hidden="true"><span class="ph"><img src="${IMG[b.img]}" alt="" loading="lazy"></span></button>
  <button class="hh" data-sact="like" aria-pressed="${liked.has(b.code)}" aria-label="Save ${esc(b.code)}">${heartSvg}</button></div>
  <button class="go" data-sact="go"><span class="cd">${esc(b.code)}</span><span class="ds">${esc(b.desc)}</span><span class="pr">${b.comingSoon ? 'Coming soon' : b.price != null ? gbp(b.price) : 'Price on request'}</span></button>
</div>`;
function renderSearch(){
  const q = $('#sinput').value.trim(), grid = $('#sgrid'), none = $('#snone'), title = $('#stitle');
  if (!q){
    title.textContent = 'Recommended for you'; grid.className = 'sgrid row';
    grid.innerHTML = RECOMMENDED.map(c => sCard(byCode[c])).join(''); none.hidden = true; return;
  }
  const res = searchSarees(q);
  grid.className = 'sgrid';
  grid.innerHTML = res.map(sCard).join('');
  title.textContent = res.length ? `${res.length} saree${res.length > 1 ? 's' : ''} found for \u201c${q}\u201d` : `No sarees found for \u201c${q}\u201d`;
  none.hidden = !!res.length;
  none.textContent = 'Try a popular choice, a saree code such as TL1501, or a colour such as blue or red.';
}
function openSearch(){
  $('#spanel').hidden = false; $('#sscrim').hidden = false;
  $('#searchBtn').setAttribute('aria-expanded','true');
  renderSearch(); $('#sinput').focus();
}
function closeSearch(refocus){
  if ($('#spanel').hidden) return;
  $('#spanel').hidden = true; $('#sscrim').hidden = true;
  $('#searchBtn').setAttribute('aria-expanded','false');
  if (refocus) $('#searchBtn').focus();
}
function goTo(code){
  closeSearch(false);
  if (document.body.classList.contains('saved-only')){ document.body.classList.remove('saved-only'); $('#savedBtn').setAttribute('aria-pressed','false'); }
  const el = document.getElementById('s-' + slug(code)); if (!el) return;
  requestAnimationFrame(() => {
    el.scrollIntoView({behavior:'smooth', block:'start'});
    el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
  });
}
$('#chips').innerHTML = POPULAR.map(t => `<button class="chip${isCert(t) ? ' cert' : ''}" data-q="${esc(t)}">${isCert(t) ? CERT_IC : ''}${esc(t)}</button>`).join('');
$('#chips').addEventListener('click', e => {
  const c = e.target.closest('.chip'); if (!c) return;
  $('#sinput').value = c.dataset.q; renderSearch(); $('.sres').scrollIntoView({block:'nearest'});
});
$('#sgrid').addEventListener('click', e => {
  const b = e.target.closest('[data-sact]'); if (!b) return;
  const code = b.closest('.sc').dataset.code;
  if (b.dataset.sact === 'go') goTo(code);
  else { liked.has(code) ? liked.delete(code) : liked.add(code); b.setAttribute('aria-pressed', liked.has(code)); bump($('#savedCount')); renderCounts(); }
});
$('#searchBtn').addEventListener('click', () => $('#spanel').hidden ? openSearch() : closeSearch(true));
$('#sclose').addEventListener('click', () => closeSearch(true));
$('#sscrim').addEventListener('click', () => closeSearch(false));
$('#sinput').addEventListener('input', renderSearch);
$('#sinput').addEventListener('keydown', e => {
  if (e.key === 'Enter' && $('#sinput').value.trim()){ const f = $('#sgrid .sc'); if (f) goTo(f.dataset.code); }
});
$('#basketBtn').addEventListener('click', () => closeSearch(false));
$('#savedBtn').addEventListener('click', () => closeSearch(false));
document.addEventListener('animationend', e => e.target.classList && e.target.classList.remove('flash'));

// Announcement bar: rotates the offers; pauses on hover/focus
(function(){
  const msgs = [...document.querySelectorAll('#promoTrack .promo-msg')], bar = $('#promo');
  let i = 0, timer, paused = false;
  const show = n => { i = (n + msgs.length) % msgs.length; msgs.forEach((m,k) => { m.classList.toggle('on', k === i); m.setAttribute('aria-hidden', k !== i); }); };
  const start = () => { clearInterval(timer); timer = setInterval(() => { if (!paused) show(i+1); }, 5000); };
  $('#promoPrev').addEventListener('click', () => { show(i-1); start(); });
  $('#promoNext').addEventListener('click', () => { show(i+1); start(); });
  bar.addEventListener('mouseenter', () => paused = true);
  bar.addEventListener('mouseleave', () => paused = false);
  bar.addEventListener('focusin', () => paused = true);
  bar.addEventListener('focusout', () => paused = false);
  show(0); start();
})();
renderCounts();
