// ===== GameStoreID data =====
const games = [
    { id:1, name:"Mobile Legends", category:"moba", image:"assets/games/ml.jpg", type:"topup", desc:"Diamond MLBB", packages:[{name:"86 Diamond",price:22000},{name:"172 Diamond",price:42000},{name:"257 Diamond",price:62000},{name:"344 Diamond",price:82000},{name:"429 Diamond",price:102000},{name:"514 Diamond",price:122000},{name:"706 Diamond",price:162000},{name:"1050 Diamond",price:242000},{name:"2195 Diamond",price:482000}] },
    { id:2, name:"Roblox", category:"sandbox", image:"assets/games/roblox.png", type:"topup", desc:"Robux", packages:[{name:"80 Robux",price:15000},{name:"160 Robux",price:28000},{name:"240 Robux",price:42000},{name:"400 Robux",price:68000},{name:"800 Robux",price:130000},{name:"1700 Robux",price:260000},{name:"4500 Robux",price:650000}] },
    { id:3, name:"Free Fire", category:"fps", image:"assets/games/free-fire.svg", type:"topup", desc:"Diamond FF", packages:[{name:"50 Diamond",price:8000},{name:"70 Diamond",price:10000},{name:"140 Diamond",price:20000},{name:"355 Diamond",price:50000},{name:"720 Diamond",price:100000},{name:"1450 Diamond",price:200000},{name:"2180 Diamond",price:300000}] },
    { id:4, name:"PUBG Mobile", category:"fps", image:"assets/games/pubg-mobile.svg", type:"topup", desc:"UC PUBG", packages:[{name:"60 UC",price:15000},{name:"325 UC",price:75000},{name:"660 UC",price:150000},{name:"1800 UC",price:380000},{name:"3850 UC",price:760000}] },
    { id:5, name:"Genshin Impact", category:"rpg", image:"assets/games/genshin-impact.svg", type:"topup", desc:"Genesis Crystal", packages:[{name:"60 Crystal",price:16000},{name:"300 Crystal",price:79000},{name:"980 Crystal",price:249000},{name:"1980 Crystal",price:479000},{name:"3280 Crystal",price:799000},{name:"6480 Crystal",price:1499000}] },
    { id:6, name:"Valorant", category:"fps", image:"assets/games/valorant.svg", type:"topup", desc:"Valorant Points", packages:[{name:"475 VP",price:55000},{name:"1000 VP",price:110000},{name:"2050 VP",price:220000},{name:"3650 VP",price:380000},{name:"5350 VP",price:550000}] },
    { id:7, name:"Honkai Star Rail", category:"rpg", image:"assets/games/honkai-star-rail.svg", type:"topup", desc:"Oneiric Shard", packages:[{name:"60 Shard",price:16000},{name:"300 Shard",price:79000},{name:"980 Shard",price:249000},{name:"1980 Shard",price:479000},{name:"3280 Shard",price:799000}] },
    { id:8, name:"Call of Duty Mobile", category:"fps", image:"assets/games/call-of-duty-mobile.svg", type:"topup", desc:"CP CODM", packages:[{name:"80 CP",price:15000},{name:"400 CP",price:75000},{name:"800 CP",price:150000},{name:"2000 CP",price:360000}] },
    { id:9, name:"Arena of Valor", category:"moba", image:"assets/games/arena-of-valor.svg", type:"topup", desc:"Voucher AOV", packages:[{name:"40 Voucher",price:10000},{name:"90 Voucher",price:22000},{name:"230 Voucher",price:55000},{name:"470 Voucher",price:110000}] },
    { id:10, name:"Minecraft", category:"sandbox", image:"assets/games/minecraft.svg", type:"topup", desc:"Minecoins", packages:[{name:"320 Minecoins",price:35000},{name:"1020 Minecoins",price:100000},{name:"1720 Minecoins",price:160000},{name:"3500 Minecoins",price:300000}] },
    { id:11, name:"Wild Rift", category:"moba", image:"assets/games/wild-rift.svg", type:"topup", desc:"Wild Cores", packages:[{name:"425 Wild Cores",price:55000},{name:"1000 Wild Cores",price:120000},{name:"1850 Wild Cores",price:220000},{name:"3275 Wild Cores",price:380000}] },
    { id:12, name:"Zenless Zone Zero", category:"rpg", image:"assets/games/zenless-zone-zero.svg", type:"topup", desc:"Monochrome", packages:[{name:"60 Mono",price:16000},{name:"300 Mono",price:79000},{name:"980 Mono",price:249000},{name:"1980 Mono",price:479000}] },
];

const accounts = [
    { id:1, game:"Mobile Legends", rank:"Mythic Glory", title:"Mythic Glory 87 Skin + 45 Hero", price:350000, seller:"ProSeller99" },
    { id:2, game:"Mobile Legends", rank:"Legend", title:"Legend V Full Skin Epic", price:180000, seller:"MLKing" },
    { id:3, game:"Roblox", rank:"High Value", title:"Account Limited Items + 5k Robux", price:450000, seller:"RbxTrader" },
    { id:4, game:"Free Fire", rank:"Heroic", title:"Heroic Rank + Banyak Skin Senjata", price:220000, seller:"FFPro" },
    { id:5, game:"Genshin Impact", rank:"AR 55", title:"AR 55 C6 Raiden + Many 5★", price:1200000, seller:"GenshinID" },
    { id:6, game:"Valorant", rank:"Immortal", title:"Immortal 2 Full Bundle", price:850000, seller:"ValoAce" },
    { id:7, game:"PUBG Mobile", rank:"Conqueror", title:"Conqueror Season + Rare Skin", price:320000, seller:"PUBGBoss" },
    { id:8, game:"Mobile Legends", rank:"Mythic", title:"Mythic Immortal 120 Skin", price:550000, seller:"SkinCollector" },
];

let comments = [
    { name:"Andi Gamer", rating:5, text:"Top up ML super cepat! Diamond langsung masuk dalam 10 detik. Recommended banget.", date:"18 Sep 2026" },
    { name:"Siska Roblox", rating:5, text:"Beli robux di sini paling murah dan aman. Proses otomatis beneran kerja.", date:"17 Sep 2026" },
    { name:"Rizky FF", rating:4, text:"Sudah 5x top up Free Fire, selalu sukses. AI chat-nya juga responsif.", date:"16 Sep 2026" },
    { name:"Dewi Genshin", rating:5, text:"Beli akun Genshin AR55, escrow-nya bikin tenang. Seller juga ramah.", date:"15 Sep 2026" },
    { name:"Budi Valorant", rating:5, text:"VP Valorant masuk instan. Harga bersaing sama tempat lain.", date:"14 Sep 2026" },
];

let selectedRating = 5;
let selectedGame = null, selectedPkg = null;
let cart = JSON.parse(localStorage.getItem("gs-cart") || "[]");

function formatPrice(num) { return "Rp " + Number(num).toLocaleString("id-ID"); }
function getGameByName(name) { return games.find(g => g.name === name); }
function escapeHTML(value) { const d=document.createElement("div"); d.textContent=value ?? ""; return d.innerHTML; }

function gameCardHTML(g) {
    return `<article class="game-card" onclick="openOrder(${g.id})">
        <div class="game-thumb"><img src="${g.image}" alt="Ilustrasi ${g.name}" loading="lazy"><span class="badge"><i class="fas fa-bolt"></i> INSTAN</span></div>
        <div class="info"><div class="game-meta">${g.category.toUpperCase()}</div><h3>${g.name}</h3><p>${g.desc}</p>
        <div class="card-bottom"><div class="price"><small>Mulai</small>${formatPrice(g.packages[0].price)}</div><button class="btn-buy" onclick="event.stopPropagation();openOrder(${g.id})">Top Up <i class="fas fa-arrow-right"></i></button></div></div>
    </article>`;
}
function renderPopular(){ document.getElementById("popularGrid").innerHTML=games.slice(0,8).map(gameCardHTML).join(""); }
function renderTopup(filter="all"){ const list=filter==="all"?games:games.filter(g=>g.category===filter); document.getElementById("topupGrid").innerHTML=list.map(gameCardHTML).join(""); }
function renderAccounts(){
    document.getElementById("akunGrid").innerHTML=accounts.map(a=>{const g=getGameByName(a.game); return `<article class="akun-card">
        <div class="account-cover"><img src="${g?.image || games[0].image}" alt="${a.game}" loading="lazy"><span class="rank">${a.rank}</span></div>
        <div class="account-content"><h3>${a.title}</h3><div class="meta"><i class="fas fa-gamepad"></i> ${a.game} &nbsp;•&nbsp; <i class="fas fa-user-check"></i> ${a.seller}</div>
        <div class="bottom"><span class="price">${formatPrice(a.price)}</span><button class="btn btn-primary btn-small" onclick="buyAccount(${a.id})"><i class="fas fa-cart-plus"></i> Pilih</button></div></div>
    </article>`}).join("");
}
function populateSellGames(){ document.getElementById("sellGame").innerHTML='<option value="">-- Pilih Game --</option>'+games.map(g=>`<option value="${g.name}">${g.name}</option>`).join(""); }
function renderComments(){
    const html=comments.map(c=>`<div class="comment-item"><div class="c-header"><span class="c-name">${c.name}</span><span class="c-stars">${"★".repeat(c.rating)}${"☆".repeat(5-c.rating)}</span></div><div class="c-text">${c.text}</div><div class="c-date">${c.date}</div></div>`).join("");
    document.getElementById("commentList").innerHTML=html;
    document.getElementById("homeComments").innerHTML=comments.slice(0,3).map(c=>`<div class="comment-item"><div class="c-header"><span class="c-name">${c.name}</span><span class="c-stars">${"★".repeat(c.rating)}${"☆".repeat(5-c.rating)}</span></div><div class="c-text">${c.text}</div></div>`).join("");
}
function showPage(page){ document.querySelectorAll(".page").forEach(p=>p.classList.remove("active")); document.getElementById("page-"+page)?.classList.add("active"); document.querySelectorAll(".nav-item").forEach(n=>n.classList.toggle("active",n.dataset.page===page)); document.getElementById("searchResults").style.display="none"; document.getElementById("navLinks").classList.remove("open"); window.scrollTo({top:0,behavior:"smooth"}); }

// ===== Top up order =====
function openOrder(gameId){
    selectedGame=games.find(g=>g.id===gameId); selectedPkg=null;
    document.getElementById("modalTitle").textContent=`Top Up ${selectedGame.name}`;
    document.getElementById("modalBody").innerHTML=`
        <div class="order-game-head"><img src="${selectedGame.image}" alt="${selectedGame.name}"><div><span class="eyebrow">Top up instan</span><h3>${selectedGame.name}</h3><p>${selectedGame.desc}</p></div></div>
        <label class="field-label">Pilih paket</label><div class="pkg-list">${selectedGame.packages.map((p,i)=>`<button type="button" class="pkg-item" onclick="selectPkg(${i},this)"><span class="pkg-name">${p.name}</span><span class="pkg-price">${formatPrice(p.price)}</span></button>`).join("")}</div>
        <div class="form-group"><label>ID / Username Game</label><input type="text" id="gameUserId" placeholder="Masukkan ID atau username"></div>
        <div class="form-group"><label>Server / Zone (jika ada)</label><input type="text" id="gameServer" placeholder="Contoh: 1234 atau Global"></div>
        <div class="order-actions"><button class="btn btn-outline" onclick="addSelectedTopupToCart()"><i class="fas fa-cart-plus"></i> Tambah ke Keranjang</button><button class="btn btn-primary" onclick="buySelectedTopupNow()"><i class="fas fa-bolt"></i> Beli Sekarang</button></div>`;
    document.getElementById("orderModal").classList.add("active");
}
function selectPkg(index,el){ selectedPkg=selectedGame.packages[index]; document.querySelectorAll(".pkg-item").forEach(x=>x.classList.remove("selected")); el.classList.add("selected"); }
function buildTopupItem(){
    const userId=document.getElementById("gameUserId").value.trim(); const server=document.getElementById("gameServer").value.trim();
    if(!selectedPkg){showToast("Pilih paket dulu!",true); return null;} if(!userId){showToast("Masukkan ID / Username!",true); return null;}
    return {key:`topup-${Date.now()}-${Math.random()}`,type:"topup",gameId:selectedGame.id,name:selectedGame.name,detail:selectedPkg.name,price:selectedPkg.price,image:selectedGame.image,userId,server,qty:1};
}
function addSelectedTopupToCart(){ const item=buildTopupItem(); if(!item)return; cart.push(item); saveCart(); closeModal(); openCart(); showToast("Top up ditambahkan ke keranjang"); }
function buySelectedTopupNow(){ const item=buildTopupItem(); if(!item)return; cart.push(item); saveCart(); closeModal(); openCheckout(); }

// ===== Account order =====
function buyAccount(accId){ const acc=accounts.find(a=>a.id===accId), g=getGameByName(acc.game); document.getElementById("modalTitle").textContent="Pilih Akun"; document.getElementById("modalBody").innerHTML=`
    <div class="order-game-head"><img src="${g?.image}" alt="${acc.game}"><div><span class="eyebrow">Akun terverifikasi</span><h3>${acc.game}</h3><p>${acc.rank}</p></div></div>
    <div class="order-info"><p>Judul <strong>${acc.title}</strong></p><p>Seller <strong>${acc.seller}</strong></p><p>Harga <strong class="accent-text">${formatPrice(acc.price)}</strong></p></div>
    <p class="helper-text"><i class="fas fa-shield-halved"></i> Demo escrow: tampilan alur transaksi saja, tanpa pemindahan akun atau dana nyata.</p>
    <div class="order-actions"><button class="btn btn-outline" onclick="addAccountToCart(${acc.id})"><i class="fas fa-cart-plus"></i> Tambah ke Keranjang</button><button class="btn btn-primary" onclick="buyAccountNow(${acc.id})"><i class="fas fa-lock"></i> Beli Sekarang</button></div>`; document.getElementById("orderModal").classList.add("active"); }
function makeAccountItem(accId){const a=accounts.find(x=>x.id===accId),g=getGameByName(a.game);return {key:`account-${a.id}-${Date.now()}`,type:"account",accountId:a.id,name:a.game,detail:a.title,price:a.price,image:g?.image||games[0].image,userId:`Seller: ${a.seller}`,server:a.rank,qty:1};}
function addAccountToCart(id){cart.push(makeAccountItem(id));saveCart();closeModal();openCart();showToast("Akun ditambahkan ke keranjang");}
function buyAccountNow(id){cart.push(makeAccountItem(id));saveCart();closeModal();openCheckout();}
function closeModal(){document.getElementById("orderModal").classList.remove("active");}

// ===== Cart =====
function saveCart(){localStorage.setItem("gs-cart",JSON.stringify(cart));renderCart();}
function cartTotal(){return cart.reduce((s,i)=>s+i.price*(i.qty||1),0);}
function renderCart(){
    document.getElementById("cartCount").textContent=cart.reduce((s,i)=>s+(i.qty||1),0);
    document.getElementById("cartTotal").textContent=formatPrice(cartTotal());
    const box=document.getElementById("cartItems");
    if(!cart.length){box.innerHTML=`<div class="empty-cart"><div class="empty-icon"><i class="fas fa-shopping-basket"></i></div><h3>Keranjang masih kosong</h3><p>Pilih top up atau akun game untuk mulai belanja.</p><button class="btn btn-primary" onclick="closeCart();showPage('topup')">Lihat Game</button></div>`;document.getElementById("checkoutBtn").disabled=true;return;}
    document.getElementById("checkoutBtn").disabled=false;
    box.innerHTML=cart.map((i,idx)=>`<div class="cart-item"><img src="${i.image}" alt="${i.name}"><div class="cart-item-info"><span class="cart-type">${i.type==='topup'?'TOP UP':'AKUN'}</span><h4>${i.name}</h4><p>${i.detail}</p><small>${escapeHTML(i.userId)}${i.server?' • '+escapeHTML(i.server):''}</small><strong>${formatPrice(i.price)}</strong></div><button class="remove-item" onclick="removeCartItem(${idx})" aria-label="Hapus"><i class="fas fa-trash"></i></button></div>`).join("");
}
function removeCartItem(index){cart.splice(index,1);saveCart();showToast("Item dihapus dari keranjang");}
function openCart(){document.getElementById("cartOverlay").classList.add("active");document.getElementById("cartDrawer").classList.add("active");document.body.classList.add("drawer-open");renderCart();}
function closeCart(){document.getElementById("cartOverlay").classList.remove("active");document.getElementById("cartDrawer").classList.remove("active");document.body.classList.remove("drawer-open");}

// ===== Checkout / payment demo =====
const paymentMethods=[
    {id:"qris",icon:"fa-qrcode",name:"QRIS",desc:"Scan dari aplikasi pembayaran apa pun"},
    {id:"gopay",icon:"fa-wallet",name:"GoPay",desc:"Bayar dengan dompet digital"},
    {id:"dana",icon:"fa-wallet",name:"DANA",desc:"Bayar dengan saldo DANA"},
    {id:"ovo",icon:"fa-wallet",name:"OVO",desc:"Bayar dengan saldo OVO"},
    {id:"bank",icon:"fa-building-columns",name:"Transfer Bank",desc:"BCA, Mandiri, BRI, BNI"},
];
function openCheckout(){if(!cart.length){showToast("Keranjang masih kosong",true);return;}closeCart();renderCheckout();document.getElementById("checkoutModal").classList.add("active");}
function closeCheckout(){document.getElementById("checkoutModal").classList.remove("active");}
function renderCheckout(){
    document.getElementById("checkoutContent").innerHTML=`<div class="checkout-grid"><div><div class="checkout-section"><h3>1. Data pembeli</h3><div class="form-row"><div class="form-group"><label>Nama</label><input id="checkoutName" placeholder="Nama lengkap"></div><div class="form-group"><label>Email</label><input id="checkoutEmail" type="email" placeholder="nama@email.com"></div></div></div>
    <div class="checkout-section"><h3>2. Metode pembayaran</h3><div class="payment-grid">${paymentMethods.map((m,i)=>`<label class="payment-card"><input type="radio" name="payment" value="${m.id}" ${i===0?'checked':''}><span class="payment-icon"><i class="fas ${m.icon}"></i></span><span><strong>${m.name}</strong><small>${m.desc}</small></span><i class="fas fa-circle-check check"></i></label>`).join("")}</div></div></div>
    <aside class="checkout-summary"><h3>Ringkasan Pesanan</h3>${cart.map(i=>`<div class="summary-line"><span>${i.name}<small>${i.detail}</small></span><strong>${formatPrice(i.price)}</strong></div>`).join("")}<div class="summary-total"><span>Total</span><strong>${formatPrice(cartTotal())}</strong></div><button class="btn btn-primary pay-btn" onclick="simulatePayment()"><i class="fas fa-shield-halved"></i> Bayar Demo ${formatPrice(cartTotal())}</button><p class="demo-note"><i class="fas fa-circle-info"></i> Tidak terhubung ke gateway pembayaran nyata.</p></aside></div>`;
}
function simulatePayment(){
    const name=document.getElementById("checkoutName").value.trim(),email=document.getElementById("checkoutEmail").value.trim(),method=document.querySelector('input[name="payment"]:checked')?.value;
    if(!name||!email){showToast("Lengkapi nama dan email dulu",true);return;}
    const methodName=paymentMethods.find(m=>m.id===method)?.name||"Pembayaran"; const orderNo=`GS${Date.now().toString().slice(-8)}`;
    document.getElementById("checkoutContent").innerHTML=`<div class="payment-success"><div class="success-icon"><i class="fas fa-check"></i></div><span class="eyebrow">Simulasi berhasil</span><h2>Pesanan demo dibuat</h2><p>Ini hanya preview alur checkout. Tidak ada dana yang dipotong dan tidak ada item game yang benar-benar dikirim.</p><div class="receipt"><div><span>No. Pesanan</span><strong>${orderNo}</strong></div><div><span>Metode</span><strong>${methodName}</strong></div><div><span>Total</span><strong>${formatPrice(cartTotal())}</strong></div><div><span>Email</span><strong>${escapeHTML(email)}</strong></div></div><button class="btn btn-primary" onclick="finishDemoOrder()">Selesai</button></div>`;
}
function finishDemoOrder(){cart=[];saveCart();closeCheckout();showToast("Pesanan demo selesai");}

// ===== Search =====
function doSearch(){const q=document.getElementById("searchInput").value.trim().toLowerCase(),section=document.getElementById("searchResults");if(!q){section.style.display="none";return;}const matched=games.filter(g=>g.name.toLowerCase().includes(q)||g.desc.toLowerCase().includes(q)||g.category.includes(q));document.getElementById("searchQuery").textContent=`"${q}"`;section.style.display="block";document.getElementById("searchGrid").innerHTML=matched.length?matched.map(gameCardHTML).join(""):`<p class="no-results">Tidak ditemukan.</p>`;section.scrollIntoView({behavior:"smooth"});}

// ===== AI Chat =====
function getAIResponse(msg){const l=msg.toLowerCase();if(l.includes("diamond")||l.includes("ml")||l.includes("mobile legend"))return"Harga Diamond Mobile Legends mulai Rp 22.000 (86 Diamond). Kamu bisa pilih paket lalu masukkan ke keranjang.";if(l.includes("robux")||l.includes("roblox"))return"Robux mulai 80 Robux = Rp 15.000. Pilih Roblox di menu Top Up lalu checkout dari keranjang.";if(l.includes("akun")||l.includes("jual")||l.includes("beli akun"))return"Untuk jual/beli akun, buka menu Jual Beli Akun. Checkout dan escrow pada demo ini hanya simulasi tampilan.";if(l.includes("bayar")||l.includes("qris")||l.includes("payment"))return"Metode pembayaran demo tersedia: QRIS, GoPay, DANA, OVO, dan transfer bank. Tambahkan item ke keranjang lalu pilih Lanjut Pembayaran.";if(l.includes("harga"))return"Harga bervariasi: Diamond ML dari 22rb, Robux 15rb, Genesis Crystal 16rb. Cek menu Top Up ya!";if(l.includes("cara"))return"Cara belanja: pilih game → pilih paket → masukkan ID → tambah ke keranjang → pilih metode pembayaran. Checkout saat ini mode demo.";if(l.includes("promo"))return"Ada promo aktif di menu Promo. Kamu bisa cek detail dan masa berlakunya di sana.";if(l.includes("halo")||l.includes("hai")||l.includes("hi"))return"Hai! Selamat datang di GameStoreID 🎮 Mau cari top up, akun, atau info pembayaran?";return"Aku bisa bantu soal harga, top up, keranjang, metode pembayaran, atau jual beli akun.";}
function addChatMessage(text,isUser=false){const c=document.getElementById("chatMessages"),d=document.createElement("div");d.className=`msg ${isUser?"user":"bot"}`;d.innerHTML=`<div class="msg-content">${escapeHTML(text)}</div>`;c.appendChild(d);c.scrollTop=c.scrollHeight;}
function sendChat(text){const i=document.getElementById("chatInput"),msg=text||i.value.trim();if(!msg)return;addChatMessage(msg,true);i.value="";setTimeout(()=>addChatMessage(getAIResponse(msg)),450);}
function showToast(msg,isError=false){const t=document.getElementById("toast");t.textContent=msg;t.className="toast show"+(isError?" error":"");setTimeout(()=>t.classList.remove("show"),2600);}
function setTheme(theme){document.documentElement.setAttribute("data-theme",theme);document.querySelectorAll(".theme-swatch").forEach(s=>s.classList.toggle("active",s.dataset.theme===theme));localStorage.setItem("gs-theme",theme);}
function toggleMode(){const h=document.documentElement,current=h.getAttribute("data-mode")||"dark",next=current==="dark"?"light":"dark";h.setAttribute("data-mode",next);document.querySelector("#modeToggle i").className=next==="dark"?"fas fa-moon":"fas fa-sun";localStorage.setItem("gs-mode",next);}

// ===== Init =====
document.addEventListener("DOMContentLoaded",()=>{
    const savedTheme=localStorage.getItem("gs-theme")||"purple",savedMode=localStorage.getItem("gs-mode")||"dark";setTheme(savedTheme);document.documentElement.setAttribute("data-mode",savedMode);document.querySelector("#modeToggle i").className=savedMode==="dark"?"fas fa-moon":"fas fa-sun";
    renderPopular();renderTopup();renderAccounts();populateSellGames();renderComments();renderCart();
    document.querySelectorAll(".nav-item").forEach(n=>n.addEventListener("click",e=>{e.preventDefault();showPage(n.dataset.page);}));
    document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));
    document.getElementById("searchBtn").addEventListener("click",doSearch);document.getElementById("searchInput").addEventListener("keypress",e=>{if(e.key==="Enter")doSearch();});
    document.querySelectorAll("#topupFilters .filter-btn").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll("#topupFilters .filter-btn").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderTopup(btn.dataset.filter);}));
    document.querySelectorAll(".tab").forEach(tab=>tab.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));tab.classList.add("active");document.getElementById("beliAkun").style.display=tab.dataset.tab==="beli"?"block":"none";document.getElementById("jualAkun").style.display=tab.dataset.tab==="jual"?"block":"none";}));
    document.getElementById("sellForm").addEventListener("submit",e=>{e.preventDefault();showToast("Iklan akun demo berhasil dibuat!");e.target.reset();});
    document.querySelectorAll("#starRating i").forEach(star=>star.addEventListener("click",()=>{selectedRating=+star.dataset.val;document.querySelectorAll("#starRating i").forEach(s=>s.classList.toggle("active",+s.dataset.val<=selectedRating));}));document.querySelectorAll("#starRating i").forEach(s=>s.classList.add("active"));
    document.getElementById("commentForm").addEventListener("submit",e=>{e.preventDefault();const name=document.getElementById("commentName").value.trim(),text=document.getElementById("commentText").value.trim();if(!name||!text)return;const today=new Date(),dateStr=today.getDate()+" "+["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"][today.getMonth()]+" "+today.getFullYear();comments.unshift({name,rating:selectedRating,text,date:dateStr});renderComments();e.target.reset();selectedRating=5;document.querySelectorAll("#starRating i").forEach(s=>s.classList.add("active"));showToast("Komentar berhasil dikirim!");});
    document.querySelectorAll(".faq-q").forEach(btn=>btn.addEventListener("click",()=>btn.parentElement.classList.toggle("open")));
    document.getElementById("openChatBtn").addEventListener("click",()=>document.getElementById("chatOverlay").classList.add("active"));document.getElementById("openChatFooter").addEventListener("click",e=>{e.preventDefault();document.getElementById("chatOverlay").classList.add("active")});document.getElementById("closeChat").addEventListener("click",()=>document.getElementById("chatOverlay").classList.remove("active"));document.getElementById("sendChat").addEventListener("click",()=>sendChat());document.getElementById("chatInput").addEventListener("keypress",e=>{if(e.key==="Enter")sendChat();});document.querySelectorAll(".quick-btn").forEach(b=>b.addEventListener("click",()=>sendChat(b.dataset.q)));
    document.getElementById("closeModal").addEventListener("click",closeModal);document.getElementById("orderModal").addEventListener("click",e=>{if(e.target.id==="orderModal")closeModal();});
    document.getElementById("openCartBtn").addEventListener("click",openCart);document.getElementById("closeCartBtn").addEventListener("click",closeCart);document.getElementById("cartOverlay").addEventListener("click",closeCart);document.getElementById("checkoutBtn").addEventListener("click",openCheckout);
    document.getElementById("closeCheckout").addEventListener("click",closeCheckout);document.getElementById("checkoutModal").addEventListener("click",e=>{if(e.target.id==="checkoutModal")closeCheckout();});
    document.getElementById("modeToggle").addEventListener("click",toggleMode);document.getElementById("themeToggle").addEventListener("click",()=>document.getElementById("themeDropdown").classList.toggle("show"));document.querySelectorAll(".theme-swatch").forEach(s=>s.addEventListener("click",()=>{setTheme(s.dataset.theme);document.getElementById("themeDropdown").classList.remove("show");}));document.addEventListener("click",e=>{if(!e.target.closest(".theme-picker"))document.getElementById("themeDropdown").classList.remove("show");});
    document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();closeModal();closeCheckout();}});
});
