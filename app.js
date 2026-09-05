const S={r:"home",private:false,cat:"All",price:"All",dist:"All"};

const restaurantData=[
  {name:"Vivaldo's",cat:"Portuguese",price:"€€",dist:0.2,beach:"Praia da Oura Leste",desc:"Cozinha portuguesa, peixe fresco e esplanada com vista mar.",url:"https://vivaldos.pt/"},
  {name:"Cuíca Praia",cat:"Beach & Sunset",price:"€€",dist:0.2,beach:"Praia da Oura Leste",desc:"Restaurante à beira-mar e rooftop para sunset.",url:"https://cuicapraia.pt/"},
  {name:"Beach Caffé",cat:"Beach & Sunset",price:"€€",dist:0.2,beach:"Praia da Oura Leste",desc:"Restaurante na zona da Praia da Oura Leste.",url:"https://www.google.com/maps/search/?api=1&query=Beach+Caff%C3%A9+Praia+da+Oura+Albufeira"},
  {name:"Atlântico Restaurante",cat:"Portuguese",price:"€€",dist:1.0,beach:"Praia de Santa Eulália",desc:"Peixe, marisco e cozinha portuguesa com vista para Santa Eulália.",url:"https://www.restauranteatlantico.com/"},
  {name:"Le Club Algarve",cat:"Sushi",price:"€€€",dist:1.0,beach:"Praia de Santa Eulália",desc:"Vista panorâmica para Santa Eulália; conceito Sushi & Steakhouse no verão.",url:"https://www.leclubalgarve.com/"},
  {name:"Restaurante Esplanada O Pescador",cat:"Seafood",price:"€€",dist:1.0,beach:"Praia de Santa Eulália",desc:"Restaurante junto ao acesso à Praia de Santa Eulália.",url:"https://www.google.com/maps/search/?api=1&query=Restaurante+Esplanada+O+Pescador+Santa+Eul%C3%A1lia+Albufeira"},
  {name:"Cabana Fresca",cat:"Seafood",price:"€€€",dist:3.0,beach:"Praia dos Pescadores",desc:"Cataplanas, peixe fresco e vista sobre a Praia dos Pescadores.",url:"https://www.cabanafresca.pt/"},
  {name:"Sal & Mar",cat:"Seafood",price:"€€€",dist:3.0,beach:"Praia dos Pescadores",desc:"Esplanada virada para a praia, peixe, marisco e cocktails.",url:"https://salemar.pt/en/"},
  {name:"Louisiana Restaurante & Bar",cat:"Portuguese",price:"€€",dist:3.0,beach:"Praia dos Pescadores",desc:"Restaurante directamente sobre a areia da Praia dos Pescadores.",url:"https://louisianaalgarve.com/"}
];

const beachData=[
  {
    name:"Praia da Oura Leste",dist:"150 m",
    desc:"A praia mais próxima do apartamento, com acesso por rampa ou escadas.",
    image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/2017-03-31_Praia_da_Oura%2C_Albufeira_%281%29.JPG/960px-2017-03-31_Praia_da_Oura%2C_Albufeira_%281%29.JPG",
    credit:"Foto: Kolforn / Wikimedia Commons · CC BY-SA 4.0",
    creditUrl:"https://commons.wikimedia.org/wiki/File:2017-03-31_Praia_da_Oura,_Albufeira_(1).JPG",
    restaurants:["Vivaldo's","Cuíca Praia","Beach Caffé"]
  },
  {
    name:"Praia de Santa Eulália",dist:"800 m",
    desc:"Praia de areia dourada, com restaurantes e esplanadas junto ao mar.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/2017-02-18_Praia_de_Santa_Eul%C3%A1lia%2C_Albufeira.JPG/960px-2017-02-18_Praia_de_Santa_Eul%C3%A1lia%2C_Albufeira.JPG",
    credit:"Foto: Kolforn / Wikimedia Commons · CC BY-SA 4.0",
    creditUrl:"https://commons.wikimedia.org/wiki/File:2017-02-18_Praia_de_Santa_Eul%C3%A1lia,_Albufeira.JPG",
    restaurants:["Atlântico Restaurante","Le Club Algarve","Restaurante Esplanada O Pescador"]
  },
  {
    name:"Praia de Albufeira",dist:"1,2 km",
    desc:"A zona da Praia dos Pescadores, no centro de Albufeira, com grande oferta de restaurantes.",
    image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Praia_dos_Pescadores_-_Albufeira_-_Portugal_%284572546342%29.jpg/960px-Praia_dos_Pescadores_-_Albufeira_-_Portugal_%284572546342%29.jpg",
    credit:"Foto: Vitor Oliveira / Wikimedia Commons · CC BY-SA 2.0",
    creditUrl:"https://commons.wikimedia.org/wiki/File:Praia_dos_Pescadores_-_Albufeira_-_Portugal_(4572546342).jpg",
    restaurants:["Cabana Fresca","Sal & Mar","Louisiana Restaurante & Bar"]
  }
];

const activityData=[
  {icon:"🐬",name:"Zoomarine",meta:"6 km · Família",desc:"Uma das principais actividades familiares da região."},
  {icon:"⛵",name:"Passeio de barco",meta:"Marina de Albufeira",desc:"Costa algarvia, grutas e opções de sunset."},
  {icon:"🏄",name:"Surf",meta:"Praias do Algarve",desc:"Aulas e experiências para diferentes níveis."},
  {icon:"🍷",name:"Wine Tasting",meta:"Algarve",desc:"Descubra vinhos e produtos regionais."},
  {icon:"🐓",name:"Frango da Guia",meta:"8 km",desc:"A zona famosa pelo tradicional frango da Guia."}
];

function go(route){S.r=route;render();window.scrollTo({top:0,behavior:"smooth"});}
function row(icon,title,text,route){
  return `<div class="row" ${route?`onclick="go('${route}')"`:""}>
    <div class="ico">${icon}</div><div class="grow"><h3>${title}</h3><p>${text}</p></div><b>›</b>
  </div>`;
}
function card(icon,title,text,route){
  return `<div class="card" ${route?`onclick="go('${route}')"`:""}>
    <div class="ico">${icon}</div><h3>${title}</h3><p>${text}</p>
  </div>`;
}
function home(){
 return `
 <div class="hero"><span class="eyebrow">ALBUFEIRA · ALGARVE</span>
 <h1>Tahys Oura<br>Apartment</h1>
 <p>Seu guia privado para uma estadia especial no Algarve.</p></div>
 <section class="section">
 <h2>Welcome</h2>
 <p class="sub">Bem-vindo ao Tahys Oura Apartment. O apartamento está situado na Urbanização Quinta Pedra dos Bicos, em frente à Praia da Oura, com vista mar e a poucos minutos a pé das principais praias e serviços.</p>
 <div class="grid">
 ${card("🏠","The Apartment","90 m² · 2 quartos · 6 hóspedes · vista mar","apartment")}
 ${card("♧","My Stay","Tudo o que precisa antes e durante a estadia.","stay")}
 ${card("🍽️","Eat & Drink","Restaurantes por cozinha, preço e distância.","restaurants")}
 ${card("🏖️","Beaches","Praias com fotografia e restaurantes de praia.","beaches")}
 ${card("🗺️","Discover","Locais a visitar em Albufeira e no Algarve.","discover")}
 ${card("🎯","Activities","Experiências para famílias, casais e aventura.","activities")}
 </div></section>
 <section class="section"><h2>At a glance</h2>
 <div class="list">
 ${row("🌊","Praia da Oura Leste","Aproximadamente 150 m","beaches")}
 ${row("🛒","Intermarché","Aproximadamente 100 m","supermarkets")}
 ${row("🛒","Aldi","Aproximadamente 400 m","supermarkets")}
 ${row("🌙","Oura Strip","Aproximadamente 200 m","discover")}
 </div></section>`;
}
function apartment(){
 const photos=[
  {src:"https://a0.muscache.com/im/pictures/miso/Hosting-6195745/original/837a13e8-8737-4e7a-95b0-2f3b01a2e0cd.jpeg?im_w=1200",title:"Living room"},
  {src:"https://a0.muscache.com/im/pictures/miso/Hosting-6195745/original/510ca674-86e9-49b5-ac55-8c7699a45aa3.jpeg?im_w=1200",title:"Bedroom 1"},
  {src:"https://a0.muscache.com/im/pictures/hosting/Hosting-6195745/original/e756e997-980c-4548-a481-6f725e7af7de.jpeg?im_w=1200",title:"Bedroom 2"},
  {src:"https://a0.muscache.com/im/pictures/hosting/Hosting-6195745/original/9d6c3a43-8bf2-445e-8a02-3d160dd90e20.jpeg?im_w=1200",title:"Apartment"},
  {src:"https://a0.muscache.com/im/pictures/hosting/Hosting-6195745/original/9213a4d1-ec7b-4bba-b3b2-4e0c7dc34b81.png?im_w=1200",title:"Living room · detail"}
 ];
 return `<section class="detail apartment-page">
 <style>
 .apt-gallery{display:grid;grid-template-columns:1.35fr 1fr;gap:7px;border-radius:22px;overflow:hidden;margin:-4px 0 22px;background:#eee}
 .apt-gallery img{width:100%;height:145px;object-fit:cover;display:block;cursor:pointer;transition:transform .3s}
 .apt-gallery img:first-child{height:297px;grid-row:span 2}
 .apt-gallery img:hover{transform:scale(1.02)}
 .gallery-note{font-size:11px;opacity:.58;margin:-12px 0 18px}
 @media(max-width:520px){.apt-gallery{grid-template-columns:1.4fr 1fr}.apt-gallery img{height:105px}.apt-gallery img:first-child{height:217px}}
 .apt-lightbox{position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:1000;display:none;align-items:center;justify-content:center;padding:18px}
 .apt-lightbox img{max-width:100%;max-height:88vh;object-fit:contain;border-radius:8px}
 .apt-lightbox button{position:absolute;top:16px;right:16px;border:0;background:rgba(255,255,255,.16);color:#fff;width:42px;height:42px;border-radius:50%;font-size:25px}
 </style>
 <div class="apt-gallery">${photos.map((p,i)=>`<img src="${p.src}" alt="${p.title} — Tahys Oura Apartment" loading="${i?'lazy':'eager'}" onclick="openAptPhoto(${i})" onerror="this.style.opacity='.2'">`).join('')}</div>
 <div class="gallery-note">Fotografias do anúncio oficial do Tahys Oura Apartment no Airbnb. <a href="https://www.airbnb.com/rooms/6195745" target="_blank" rel="noopener">Ver todas as fotografias no Airbnb ↗</a></div>
 <h1>The Apartment</h1>
 <p class="sub">Apartamento moderno e renovado, orientado a oeste, muito luminoso e com vista para o mar.</p>
 <div class="box"><h3>Características</h3><p>90 m² · 2 quartos · 6 camas · 1 casa de banho · máximo 6 hóspedes. O anúncio indica 2 camas de 80 cm num quarto, 2 camas de 90 cm no outro e 2 sofás-cama na sala.</p></div>
 <div class="box"><h3>Conforto</h3><p>Janelas com vidro duplo, isolamento térmico e acústico, ar condicionado nos quartos e sala, Smart TV, Wi‑Fi, cozinha equipada, máquina de lavar roupa e máquina de lavar loiça.</p></div>
 <div class="box"><h3>Quartos</h3><p>As camas individuais podem ser unidas para formar uma cama dupla tipo king. Blackouts foram previstos para melhorar o conforto durante o sono.</p></div>
 <div class="box"><h3>Varanda</h3><p>Varanda com banco para duas pessoas e vista mar, adequada para aproveitar o sol e o pôr do sol.</p></div>
 <div class="box"><h3>Amenities</h3><p>O anúncio indica sabonete e gel de duche de qualidade superior, da marca Bvlgari/Bulgari, além de toalhas.</p></div>
 <div class="box"><h3>Check-in / Check-out</h3><p>Check-in: 16:00–02:00 · Check-out: antes das 11:00.</p></div>
 <button class="btn" onclick="go('stay')">Open My Stay</button>
 <div id="aptLightbox" class="apt-lightbox" onclick="closeAptPhoto(event)"><button aria-label="Close">×</button><img id="aptLightboxImg" src="" alt=""></div>
 </section>`;
}
function openAptPhoto(i){
 const photos=[
  "https://a0.muscache.com/im/pictures/miso/Hosting-6195745/original/837a13e8-8737-4e7a-95b0-2f3b01a2e0cd.jpeg?im_w=1600",
  "https://a0.muscache.com/im/pictures/miso/Hosting-6195745/original/510ca674-86e9-49b5-ac55-8c7699a45aa3.jpeg?im_w=1600",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-6195745/original/e756e997-980c-4548-a481-6f725e7af7de.jpeg?im_w=1600",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-6195745/original/9d6c3a43-8bf2-445e-8a02-3d160dd90e20.jpeg?im_w=1600",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-6195745/original/9213a4d1-ec7b-4bba-b3b2-4e0c7dc34b81.png?im_w=1600"
 ];
 const box=document.getElementById('aptLightbox'),img=document.getElementById('aptLightboxImg'); if(box&&img){img.src=photos[i];box.style.display='flex';}
}
function closeAptPhoto(e){if(e.target.id==='aptLightbox'||e.target.tagName==='BUTTON')document.getElementById('aptLightbox').style.display='none';}

function stay(){
 if(!S.private)return `<section class="login"><span class="eyebrow" style="background:var(--deep);color:#fff">PRIVATE GUEST AREA</span>
 <h1>My Stay</h1><p class="sub">Introduza o código privado fornecido para a sua reserva.</p>
 <input id="code" inputmode="numeric" placeholder="Guest code">
 <button class="btn" onclick="login()">Enter Guest Area</button>
 <div class="notice">Código de demonstração V1.2: <b>1234</b>. Na versão de produção, cada reserva terá um código próprio.</div></section>`;
 return `<section class="section"><h2>My Stay</h2><p class="sub">Bem-vindo. Aqui encontra a informação prática da sua estadia.</p>
 <div class="list">
 ${row("🚕","Airport Transfer","Faro Airport → Tahys Oura","transfer")}
 ${row("🎁","Welcome Amenities","Produtos e ofertas de boas-vindas","amenities")}
 ${row("🛏️","Choose your pillows","Escolha o seu tipo de almofada","pillows")}
 ${row("🛂","Guest Registration","Registo obrigatório de hóspedes","registration")}
 ${row("💶","Tourist Tax","Informação sobre taxa turística","tax")}
 ${row("🔑","Keycard & Access","Entrada no edifício e apartamento","access")}
 ${row("🛡️","Security","Contactos de segurança e emergência","security")}
 ${row("📶","Wi‑Fi & Apartment Guide","Internet e equipamentos","wifi")}
 </div></section>`;
}
function privatePage(title,icon,body){
 return `<section class="detail"><div class="photo">${icon} ${title.toUpperCase()}</div><h1>${title}</h1>${body}<button class="btn alt" onclick="go('stay')">← Back to My Stay</button></section>`;
}

function restaurants(){
 const cats=["All","Seafood","Portuguese","Sushi","Italian","Michelin","Beach & Sunset"];
 const filtered=restaurantData.filter(x=>(S.cat==="All"||x.cat===S.cat))
 .filter(x=>S.price==="All"||x.price===S.price)
 .filter(x=>S.dist==="All"||x.dist<=Number(S.dist));
 return `<section class="section"><h2>Eat & Drink</h2><p class="sub">Restaurantes reais seleccionados, por cozinha, preço e distância aproximada.</p>
 <div class="tags">${cats.map(c=>`<button class="tag ${S.cat===c?"active":""}" onclick="S.cat='${c}';render()">${c}</button>`).join("")}</div>
 <div class="filters"><select onchange="S.price=this.value;render()"><option value="All">Any price</option><option>€</option><option>€€</option><option>€€€</option><option>€€€€</option></select>
 <select onchange="S.dist=this.value;render()"><option value="All">Any distance</option><option value="1">≤ 1 km</option><option value="2">≤ 2 km</option><option value="5">≤ 5 km</option><option value="10">≤ 10 km</option></select></div>
 <div class="list">${filtered.map(x=>`<div class="row" onclick="window.open('${x.url}','_blank')"><div class="ico">🍽️</div><div class="grow"><h3>${x.name}</h3><p>${x.cat} · ${x.price} · ${x.dist} km<br>${x.beach}<br>${x.desc}</p></div><b>↗</b></div>`).join("")||'<div class="notice">No restaurants match these filters.</div>'}</div>
 </section>`;
}

function beachRestaurantCard(x){
 const r=restaurantData.find(a=>a.name===x);
 if(!r)return "";
 return `<div class="beach-rest" onclick="window.open('${r.url}','_blank')">
   <div><strong>${r.name}</strong><span>${r.cat} · ${r.price}</span><p>${r.desc}</p></div><b>↗</b>
 </div>`;
}

function beaches(){
 return `<section class="section"><h2>Beaches</h2><p class="sub">Praias próximas do apartamento, com fotografia e sugestões de restaurantes junto ao mar.</p>
 <style>
 .beach-card{overflow:hidden;background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:22px;margin:0 0 22px;box-shadow:0 8px 24px rgba(0,0,0,.06)}
 .beach-img{display:block;width:100%;height:190px;object-fit:cover}
 .beach-body{padding:18px}
 .beach-body h3{margin:0 0 5px;font-size:21px}
 .beach-meta{font-weight:700;margin-bottom:8px}
 .beach-credit{font-size:10px;opacity:.55;margin-top:10px}
 .beach-credit a{color:inherit}
 .beach-rest-title{margin:18px 0 9px;font-size:15px;text-transform:uppercase;letter-spacing:.06em}
 .beach-rest{display:flex;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid rgba(0,0,0,.08);cursor:pointer}
 .beach-rest strong{display:block;font-size:15px}
 .beach-rest span{display:block;font-size:12px;opacity:.65;margin-top:2px}
 .beach-rest p{margin:4px 0 0;font-size:13px;opacity:.8}
 </style>
 ${beachData.map(x=>`<article class="beach-card">
   <img class="beach-img" src="${x.image}" alt="${x.name}" loading="lazy" onerror="this.style.display='none'">
   <div class="beach-body">
     <h3>${x.name}</h3>
     <div class="beach-meta">${x.dist}</div>
     <p>${x.desc}</p>
     <div class="beach-rest-title">🍽️ Restaurantes de praia</div>
     ${x.restaurants.map(beachRestaurantCard).join("")}
     <div class="beach-credit"><a href="${x.creditUrl}" target="_blank" rel="noopener">${x.credit}</a></div>
   </div>
 </article>`).join("")}
 <div class="notice">As fotografias são provenientes do Wikimedia Commons e estão identificadas com a respectiva licença. Os restaurantes e respectivos sites foram verificados em Setembro de 2026.</div>
 </section>`;
}
function supermarkets(){
 return `<section class="section"><h2>Supermarkets</h2><p class="sub">Os supermercados indicados no anúncio do apartamento.</p>
 <div class="list">${row("🛒","Intermarché","Aproximadamente 100 m do apartamento")}${row("🛒","Aldi","Aproximadamente 400 m do apartamento")}</div>
 <div class="notice">Na V2 adicionaremos mapa, horários, distância exacta e indicação de aberto agora.</div></section>`;
}
function activities(){
 return `<section class="section"><h2>Activities</h2><p class="sub">Algumas ideias para começar a explorar a região.</p>
 <div class="grid">${activityData.map(x=>card(x.icon,x.name,x.meta+" · "+x.desc)).join("")}</div></section>`;
}
function discover(){
 return `<section class="section"><h2>Discover Algarve</h2><p class="sub">Alguns pontos e experiências referidos no anúncio.</p>
 <div class="list">
 ${row("🏛️","Old Town Albufeira","Centro histórico, restaurantes e miradouros")}
 ${row("🌊","Benagil Caves","Passeios de barco e grutas da costa algarvia")}
 ${row("🐓","Guia","Aproximadamente 8 km · conhecida pelo frango da Guia")}
 ${row("💦","Slide & Splash","Aproximadamente 15 km")}
 ${row("🎢","Aquashow","Aproximadamente 30 km")}
 ${row("🐬","Zoomarine","Aproximadamente 6 km")}
 </div></section>`;
}
function concierge(){
 return `<section class="section"><h2>Concierge</h2><p class="sub">Ajuda rápida durante a estadia.</p>
 <div class="list">
 ${row("💬","WhatsApp","Contactar o anfitrião")}
 ${row("📞","Phone","Contactar o anfitrião")}
 ${row("🚑","Emergency","112 · Portugal")}
 ${row("📍","Location","Urbanização Quinta Pedra dos Bicos · Albufeira")}
 </div></section>`;
}
function login(){if(document.getElementById("code").value==="1234"){S.private=true;go("stay")}else toast("Código incorrecto. Use 1234 na demonstração.");}
function toast(m){const t=document.getElementById("toast");t.textContent=m;t.style.display="block";setTimeout(()=>t.style.display="none",2400);}
const routes={
 home,apartment,stay,restaurants,beaches,supermarkets,activities,discover,concierge,
 transfer:()=>privatePage("Airport Transfer","🚕",`<div class="box"><h3>Transfer</h3><p>Na V2 vamos criar um formulário real com voo, hora de chegada, passageiros, bagagem e confirmação do transfer Faro → Tahys Oura.</p></div><button class="btn" onclick="toast('Pedido guardado no modo demonstração.')">Request Transfer</button>`),
 amenities:()=>privatePage("Welcome Amenities","🎁",`<div class="box"><h3>Included</h3><p>O anúncio indica sabonete e gel de duche de qualidade superior. Na V2 vamos acrescentar a lista completa de amenities e a possibilidade de escolha antes da chegada.</p></div>`),
 pillows:()=>privatePage("Choose your pillows","🛏️",`<div class="box"><h3>Preference</h3><p><label><input type="radio" name="p" checked> Medium</label><br><label><input type="radio" name="p"> Soft</label><br><label><input type="radio" name="p"> Firm</label><br><label><input type="radio" name="p"> Memory Foam</label></p></div><button class="btn" onclick="toast('Preferência guardada.')">Save Choice</button>`),
 registration:()=>privatePage("Guest Registration","🛂",`<div class="box"><h3>Secure registration</h3><p>A V2 terá um formulário seguro para recolher os dados necessários à comunicação legal de hóspedes, com controlos de privacidade e retenção. Não inserir documentos reais nesta demonstração.</p></div><button class="btn" onclick="toast('Formulário seguro será ligado na V2.')">Start Registration</button>`),
 tax:()=>privatePage("Tourist Tax","💶",`<div class="box"><h3>Informação do anúncio</h3><p>O anúncio informa €2 por noite e por hóspede, até ao máximo de 7 noites, com isenção para crianças e jovens até aos 13 anos. Antes de usar esta informação operacionalmente, deve ser confirmada a regra municipal em vigor.</p></div>`),
 access:()=>privatePage("Keycard & Access","🔑",`<div class="box"><h3>Access</h3><p>Na V2 colocaremos as instruções exactas de entrada no edifício e apartamento, com fotografias e passos numerados.</p></div>`),
 security:()=>privatePage("Security","🛡️",`<div class="box"><h3>Emergency</h3><p>Emergência em Portugal: 112. Os contactos privados de segurança serão adicionados quando forem fornecidos.</p></div>`),
 wifi:()=>privatePage("Wi‑Fi & Apartment Guide","📶",`<div class="box"><h3>Apartment guide</h3><p>Na V2 vamos inserir o nome da rede Wi‑Fi, palavra-passe, Smart TV, ar condicionado, máquina de lavar, máquina de loiça e restantes instruções.</p></div>`)
};
function render(){
 const f=routes[S.r]||home;
 document.getElementById("content").innerHTML=f();
 const names={home:"Guest Concierge",stay:"My Stay",restaurants:"Eat & Drink",discover:"Discover",beaches:"Beaches",activities:"Activities",supermarkets:"Supermarkets",concierge:"Concierge"};
 document.getElementById("title").textContent=names[S.r]||"Tahys Oura";
 document.querySelectorAll(".nav button").forEach(b=>b.classList.toggle("active",b.dataset.r===S.r||(["restaurants","beaches","activities","supermarkets","discover"].includes(S.r)&&b.dataset.r==="discover")));
}
document.getElementById("home").onclick=()=>go("home");
document.getElementById("back").onclick=()=>go("home");
document.querySelectorAll(".nav button").forEach(b=>b.onclick=()=>go(b.dataset.r));
window.addEventListener("load",()=>{
 if("serviceWorker"in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
 setTimeout(()=>{const s=document.getElementById("splash");if(s)s.style.display="none"},450);
 render();
});
