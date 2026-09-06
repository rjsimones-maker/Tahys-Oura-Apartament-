const S={r:"home",private:false,cat:"All",price:"All",dist:"All",tea:null};

const restaurantData=[
  {name:"Happy Sumo",cat:"Sushi",price:"€€",dist:0.4,beach:"Santa Eulália",desc:"Sushi e cozinha japonesa em Santa Eulália.",url:"https://www.google.com/maps/search/?api=1&query=Happy+Sumo+Santa+Eulalia+Albufeira",website:"https://restaurantehappysumo.makro.rest/?lang=pt",review:"https://www.tripadvisor.pt/Restaurant_Review-g189112-d5541896-Reviews-Happy_Sumo-Albufeira_Faro_District_Algarve.html",phone:"+351 289 582 083"},
  {name:"Vivaldo's",cat:"Portuguese",price:"€€",dist:0.2,beach:"Praia da Oura Leste",desc:"Cozinha portuguesa, peixe fresco e esplanada com vista mar.",url:"https://vivaldos.pt/",phone:"+351 289 101 374"},
  {name:"Cuíca Praia",cat:"Beach & Sunset",price:"€€",dist:0.2,beach:"Praia da Oura Leste",desc:"Restaurante à beira-mar e rooftop para sunset.",url:"https://cuicapraia.pt/",phone:"+351 289 513 139",instagram:"https://www.instagram.com/cuica.praia/"},
  {name:"Beach Caffé",cat:"Beach & Sunset",price:"€€",dist:0.2,beach:"Praia da Oura Leste",desc:"Restaurante na zona da Praia da Oura Leste.",url:"https://www.google.com/maps/search/?api=1&query=Beach+Caff%C3%A9+Praia+da+Oura+Albufeira",phone:"+351 918 721 672",instagram:"https://www.instagram.com/beachcaffe/"},
  {name:"Atlântico Restaurante",cat:"Portuguese",price:"€€",dist:1.0,beach:"Praia de Santa Eulália",desc:"Peixe, marisco e cozinha portuguesa com vista para Santa Eulália.",url:"https://www.restauranteatlantico.com/",phone:"+351 915 100 629"},
  {name:"Le Club Algarve",cat:"Sushi",price:"€€€",dist:1.0,beach:"Praia de Santa Eulália",desc:"Vista panorâmica para Santa Eulália; conceito Sushi & Steakhouse no verão.",url:"https://www.leclubalgarve.com/",phone:"+351 918 889 007"},
  {name:"Restaurante Esplanada O Pescador",cat:"Seafood",price:"€€",dist:1.0,beach:"Praia de Santa Eulália",desc:"Restaurante junto ao acesso à Praia de Santa Eulália.",url:"https://www.google.com/maps/search/?api=1&query=Restaurante+Esplanada+O+Pescador+Santa+Eul%C3%A1lia+Albufeira",phone:"+351 289 586 834"},
  {name:"Cabana Fresca",cat:"Seafood",price:"€€€",dist:3.0,beach:"Praia dos Pescadores",desc:"Cataplanas, peixe fresco e vista sobre a Praia dos Pescadores.",url:"https://www.cabanafresca.pt/",phone:"+351 289 585 456"},
  {name:"Sal & Mar",cat:"Seafood",price:"€€€",dist:3.0,beach:"Praia dos Pescadores",desc:"Esplanada virada para a praia, peixe, marisco e cocktails.",url:"https://salemar.pt/en/",phone:"+351 963 248 700"},
  {name:"Louisiana Restaurante & Bar",cat:"Portuguese",price:"€€",dist:3.0,beach:"Praia dos Pescadores",desc:"Restaurante directamente sobre a areia da Praia dos Pescadores.",url:"https://louisianaalgarve.com/",phone:"+351 289 587 046"},
  {name:"Restaurante Sueste",cat:"Seafood",price:"€€€",dist:30.0,beach:"Ferragudo",desc:"Restaurante junto ao Rio Arade, conhecido pela cozinha algarvia, peixe fresco e marisco.",url:"https://www.google.com/maps/search/?api=1&query=Restaurante+Sueste+Ferragudo",review:"https://www.tripadvisor.pt/Restaurant_Review-g735258-d1907171-Reviews-Restaurante_Sueste-Ferragudo_Faro_District_Algarve.html",phone:"+351 282 461 592",instagram:"https://www.instagram.com/sueste.restaurante/"},
  {name:"Marisqueira Rui",cat:"Seafood",price:"€€€",dist:20.0,beach:"Silves",desc:"Marisqueira tradicional com peixe, marisco, cataplanas e arroz de marisco.",url:"https://www.google.com/maps/search/?api=1&query=Marisqueira+Rui+Silves",website:"https://marisqueirarui.pt/",review:"https://www.tripadvisor.pt/Restaurant_Review-g189122-d1790785-Reviews-Restaurante_Marisqueira_Rui-Silves_Faro_District_Algarve.html",phone:"+351 282 442 682",instagram:"https://www.instagram.com/marisqueirarui/"},
  {name:"O Márinho",cat:"Portuguese",price:"€",dist:17.0,beach:"Algoz · Algarve",desc:"Churrasqueira portuguesa tradicional, conhecida pelo frango assado à Guia e frango no churrasco.",url:"https://www.google.com/maps/search/?api=1&query=O+Marinho+Algoz+Algarve",review:"https://www.tripadvisor.pt/Restaurant_Review-g2626749-d3746824-Reviews-Restaurante_O_Marinho-Algoz_Faro_District_Algarve.html",phone:"+351 282 574 889"},
  {name:"Restaurante Teodósio",cat:"Portuguese",price:"€€",dist:8.0,beach:"Guia",desc:"Casa tradicional de Guia, conhecida pelo frango à Guia e cozinha portuguesa.",url:"https://www.google.com/maps/search/?api=1&query=Restaurante+Teodosio+Guia+Albufeira",website:"https://www.teodosioreidosfrangos.pt/",review:"https://www.tripadvisor.pt/Restaurant_Review-g775995-d1811542-Reviews-Restaurante_Teodosio-Guia_Albufeira_Faro_District_Algarve.html",phone:"+351 289 561 318"},
  {name:"Ocean Restaurant · Vila Vita Parc",cat:["Michelin","Portuguese"],price:"€€€€",dist:35.0,beach:"Porches · Vila Vita Parc",desc:"Fine dining com vista para o Atlântico, no Vila Vita Parc, com cozinha de Hans Neuner.",url:"https://www.google.com/maps/search/?api=1&query=Ocean+Restaurant+Vila+Vita+Parc+Porches",website:"https://vilavitaparc.com/pt/restaurantesebares/restaurante-ocean",michelinStars:2,phone:"+351 282 310 100",instagram:"https://www.instagram.com/restauranteocean/"},
  {name:"Al Quimia",cat:"Portuguese",price:"€€€€",dist:3.5,beach:"Albufeira",desc:"Restaurante de cozinha portuguesa contemporânea, no centro de Albufeira.",url:"https://www.google.com/maps/search/?api=1&query=Al+Quimia+Albufeira",review:"https://www.tripadvisor.com/Restaurant_Review-g189112-d4218201-Reviews-Al_Quimia-Albufeira_Faro_District_Algarve.html",phone:"+351 289 104 500"},
  {name:"Ristorante Pizzeria La Terrazza Del Mare",cat:"Italian",price:"€€",dist:3.0,beach:"Albufeira",desc:"Pizzaria italiana com pizzas, massas e esplanada com vista para a baía de Albufeira.",url:"https://www.google.com/maps/search/?api=1&query=Ristorante+Pizzeria+La+Terrazza+Del+Mare+Albufeira",website:"https://terrazzadelmare.eatbu.com/?lang=pt",review:"https://www.tripadvisor.pt/Restaurant_Review-g189112-d13335050-Reviews-Ristorante_Pizzeria_La_Terrazza_Del_Mare-Albufeira_Faro_District_Algarve.html",phone:"+351 963 189 556",instagram:"https://www.instagram.com/terrazza_delmare/"},
  {name:"Restaurante Churrasqueira Beirã",cat:"Portuguese",price:"€€",dist:1.0,beach:"Santa Eulália · Albufeira",desc:"Cozinha portuguesa tradicional, grelhados, peixe e marisco, com estacionamento.",url:"https://www.google.com/maps/search/?api=1&query=Restaurante+Churrasqueira+Beira+Albufeira",website:"https://restaurantechurrasqueirabeira.makro.rest/?lang=pt",phone:"+351 289 589 916",instagram:"https://www.instagram.com/churrasqueirabeira_albufeira/"},
  {name:"Restaurante Convívio",cat:"Seafood",price:"€€€",dist:35.0,beach:"Vila do Bispo",desc:"Cozinha regional portuguesa com destaque para peixe e marisco.",url:"https://www.google.com/maps/search/?api=1&query=Restaurante+Convivio+Vila+do+Bispo",website:"https://conviviorestaurante.pt/",review:"https://www.tripadvisor.pt/Restaurant_Review-g1172110-d7645592-Reviews-Convivio-Vila_do_Bispo_Faro_District_Algarve.html",phone:"+351 282 639 319"}
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

function openMenu(){const m=document.getElementById("menu-overlay");if(m){m.classList.add("open");m.setAttribute("aria-hidden","false");}}
function closeMenu(){const m=document.getElementById("menu-overlay");if(m){m.classList.remove("open");m.setAttribute("aria-hidden","true");}}
let LANG=localStorage.getItem("tahysLang")||"pt";
const I18N={pt:{booking:"Booking",welcome:"WELCOME",tagline:"O seu concierge privado no Algarve",menuApartment:"Apartment",menuStay:"My Stay",menuDiscover:"Discover"},en:{booking:"Booking",welcome:"WELCOME",tagline:"Your private guest concierge in the Algarve",menuApartment:"Apartment",menuStay:"My Stay",menuDiscover:"Discover"}};
function applyLanguage(){document.documentElement.lang=LANG;const d=I18N[LANG];document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.getAttribute("data-i18n");if(d[k])el.textContent=d[k]});document.getElementById("langPT")?.classList.toggle("active",LANG==="pt");document.getElementById("langEN")?.classList.toggle("active",LANG==="en");}
function toggleLanguage(){LANG=LANG==="pt"?"en":"pt";localStorage.setItem("tahysLang",LANG);applyLanguage();}
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
 <section class="home-hero">
   <div class="home-topbar">
     <button class="hamburger" onclick="openMenu()" aria-label="Menu"><i></i><i></i><i></i></button>
     <img class="home-logo" src="logo-tahys.png" alt="Tahys Oura Apartment">
     <div class="home-actions">
       <button class="lang-toggle" onclick="toggleLanguage()" aria-label="Language"><span id="langPT">PT</span><em>/</em><span id="langEN">EN</span></button>
       <a class="booking-btn" href="https://www.airbnb.com/rooms/6195745" target="_blank" rel="noopener" data-i18n="booking">Booking</a>
     </div>
   </div>
   <div class="home-center">
     <img class="home-center-logo" src="logo-tahys.png" alt="Tahys Oura">
     <div class="home-kicker" data-i18n="welcome">WELCOME</div>
     <h1>Tahys Oura Apartment</h1>
     <p data-i18n="tagline">Your private guest concierge in the Algarve</p>
   </div>
 </section>`;
}

function discoveryPublic(){
 const items=[
  ["🍽️","Restaurants","Descubra os sabores do Algarve, desde peixe e marisco fresco a cozinha tradicional e experiências gastronómicas."],
  ["🏖️","Beaches","Explore praias de areia dourada, enseadas e águas cristalinas ao longo da costa algarvia."],
  ["🌙","Nightlife","Albufeira ganha outra energia à noite, entre a Oura Strip, a cidade velha e os bares junto ao mar."],
  ["🎯","Activities","Passeios de barco, parques aquáticos, golf, natureza, desportos e experiências para toda a família."],
  ["🗺️","Explore Algarve","Saia de Albufeira e descubra vilas, falésias, grutas, serras e lugares históricos do Algarve."],
  ["🌅","Sunset","O pôr do sol sobre o Atlântico é uma das experiências mais especiais do Algarve."],
  ["🍴","Gastronomy","A gastronomia portuguesa reúne sabores regionais, receitas antigas, produtos do mar e doces conventuais."]
 ];
 return `<section class="section discovery-public"><h2>Discovery</h2><p class="sub">Uma introdução ao Algarve. Para recomendações, nomes, locais, mapas e informação detalhada, entre na sua área privada em <b>My Stay</b>.</p>
 <div class="grid">${items.map(x=>card(x[0],x[1],x[2])).join("")}</div>
 <div class="notice">🔒 <b>Discovery privado:</b> depois de entrar em My Stay, terá acesso às nossas recomendações detalhadas, incluindo restaurantes, praias, actividades, nightlife, locais de sunset e gastronomia.</div>
 </section>`;
}
function apartment(){
 const photos={
  "Sala":[
   {src:"https://a0.muscache.com/im/pictures/miso/Hosting-6195745/original/837a13e8-8737-4e7a-95b0-2f3b01a2e0cd.jpeg?im_w=1200",title:"Sala"}
  ],
  "Cozinha":[
   {src:"https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjE5NTc0NQ%3D%3D/original/68ec34bc-c5c7-40b2-a46f-3d4f02260c87.jpeg?im_w=1200",title:"Cozinha — fotografia do anúncio"}
  ],
  "Quarto 1":[
   {src:"https://a0.muscache.com/im/pictures/miso/Hosting-6195745/original/510ca674-86e9-49b5-ac55-8c7699a45aa3.jpeg?im_w=1200",title:"Quarto 1"}
  ],
  "Quarto 2":[
   {src:"https://a0.muscache.com/im/pictures/hosting/Hosting-6195745/original/e756e997-980c-4548-a481-6f725e7af7de.jpeg?im_w=1200",title:"Quarto 2"}
  ],
  "WC":[
   {src:"https://a0.muscache.com/im/pictures/hosting/Hosting-6195745/original/9d6c3a43-8bf2-445e-8a02-3d160dd90e20.jpeg?im_w=1200",title:"WC — fotografia do anúncio"}
  ],
  "Varanda":[
   {src:"https://a0.muscache.com/im/pictures/hosting/Hosting-6195745/original/9213a4d1-ec7b-4bba-b3b2-4e0c7dc34b81.png?im_w=1200",title:"Varanda — fotografia do anúncio"}
  ]
 };
 const tabs=Object.keys(photos);
 return `<section class="detail apartment-page">
 <style>
 .apt-tabs{display:flex;gap:7px;overflow-x:auto;padding:2px 0 10px;margin:0 0 14px;scrollbar-width:none}
 .apt-tabs::-webkit-scrollbar{display:none}
 .apt-tab{flex:0 0 auto;border:1px solid var(--line);background:#fff;color:var(--ink);border-radius:999px;padding:9px 13px;font:600 12px inherit;cursor:pointer}
 .apt-tab.active{background:var(--deep);color:#fff;border-color:var(--deep)}
 .apt-panel{display:none}.apt-panel.active{display:block}
 .apt-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
 .apt-card{margin:0;border-radius:16px;overflow:hidden;background:#eee;cursor:pointer}
 .apt-card img{width:100%;height:180px;object-fit:cover;display:block;transition:transform .25s}
 .apt-card:hover img{transform:scale(1.02)}
 .apt-caption{padding:9px 10px;background:#fff;font-size:12px}
 .gallery-note{font-size:11px;opacity:.65;margin:2px 0 18px}
 @media(max-width:520px){.apt-card img{height:145px}}
 .apt-lightbox{position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:1000;display:none;align-items:center;justify-content:center;padding:18px}
 .apt-lightbox img{max-width:100%;max-height:88vh;object-fit:contain;border-radius:8px}
 .apt-lightbox button{position:absolute;top:16px;right:16px;border:0;background:rgba(255,255,255,.16);color:#fff;width:42px;height:42px;border-radius:50%;font-size:25px}
 </style>
 <h1>The Apartment</h1>
 <p class="sub">Conheça cada espaço do Tahys Oura Apartment.</p>
 <div class="apt-tabs">${tabs.map((t,i)=>`<button class="apt-tab ${i===0?'active':''}" onclick="showAptTab('${t.replace(/'/g,"\\'")}',this)">${t}</button>`).join('')}</div>
 ${tabs.map((t,i)=>`<div class="apt-panel ${i===0?'active':''}" data-apt-tab="${t}">
   <div class="apt-grid">${photos[t].map((p,j)=>`<figure class="apt-card" onclick="openAptPhoto('${t}',${j})"><img src="${p.src}" alt="${p.title} — Tahys Oura Apartment" loading="${i||j?'lazy':'eager'}" onerror="this.style.opacity='.25'"><figcaption class="apt-caption">${p.title}</figcaption></figure>`).join('')}</div>
 </div>`).join('')}
 <div class="gallery-note">Fotografias do anúncio oficial do Tahys Oura Apartment no Airbnb. A página identifica estes espaços no anúncio; algumas fotografias podem ser atualizadas pelo anfitrião. <a href="https://www.airbnb.com/rooms/6195745" target="_blank" rel="noopener">Ver todas as fotografias no Airbnb ↗</a></div>
 <div class="box"><h3>O apartamento</h3><p>90 m² · 2 quartos · 6 camas · 1 casa de banho · máximo 6 hóspedes. Apartamento renovado, muito luminoso, virado a oeste, com vista mar.</p></div>
 <div class="box"><h3>Conforto</h3><p>Vidro duplo, isolamento térmico e acústico, ar condicionado nos quartos e sala, Smart TV, Wi‑Fi, cozinha equipada, máquina de lavar roupa e máquina de lavar loiça.</p></div>
 <div class="box"><h3>Quartos</h3><p>As camas individuais podem ser unidas para formar uma cama dupla tipo king. Blackouts foram previstos para melhorar o conforto durante o sono.</p></div>
 <div class="box"><h3>Varanda</h3><p>Banco para duas pessoas e vista mar, ideal para aproveitar o pôr do sol.</p></div>
 <div class="box"><h3>Amenities</h3><p>O anúncio indica sabonete e gel de duche de qualidade superior, da marca Bvlgari/Bulgari, além de toalhas.</p></div>
 <button class="btn" onclick="go('stay')">Open My Stay</button>
 <div id="aptLightbox" class="apt-lightbox" onclick="closeAptPhoto(event)"><button aria-label="Close">×</button><img id="aptLightboxImg" src="" alt=""></div>
 </section>`;
}
function showAptTab(name,btn){
 document.querySelectorAll('.apt-tab').forEach(x=>x.classList.remove('active'));
 document.querySelectorAll('.apt-panel').forEach(x=>x.classList.remove('active'));
 btn.classList.add('active');
 const panel=document.querySelector(`[data-apt-tab="${name}"]`);
 if(panel) panel.classList.add('active');
}
function openAptPhoto(tab,i){
 const urls={
  "Sala":["https://a0.muscache.com/im/pictures/miso/Hosting-6195745/original/837a13e8-8737-4e7a-95b0-2f3b01a2e0cd.jpeg?im_w=1600"],
  "Cozinha":["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjE5NTc0NQ%3D%3D/original/68ec34bc-c5c7-40b2-a46f-3d4f02260c87.jpeg?im_w=1600"],
  "Quarto 1":["https://a0.muscache.com/im/pictures/miso/Hosting-6195745/original/510ca674-86e9-49b5-ac55-8c7699a45aa3.jpeg?im_w=1600"],
  "Quarto 2":["https://a0.muscache.com/im/pictures/hosting/Hosting-6195745/original/e756e997-980c-4548-a481-6f725e7af7de.jpeg?im_w=1600"],
  "WC":["https://a0.muscache.com/im/pictures/hosting/Hosting-6195745/original/9d6c3a43-8bf2-445e-8a02-3d160dd90e20.jpeg?im_w=1600"],
  "Varanda":["https://a0.muscache.com/im/pictures/hosting/Hosting-6195745/original/9213a4d1-ec7b-4bba-b3b2-4e0c7dc34b81.png?im_w=1600"]
 };
 const box=document.getElementById('aptLightbox'),img=document.getElementById('aptLightboxImg');
 if(box&&img&&urls[tab]&&urls[tab][i]){img.src=urls[tab][i];box.style.display='flex';}
}
function closeAptPhoto(e){if(e.target.id==='aptLightbox'||e.target.tagName==='BUTTON')document.getElementById('aptLightbox').style.display='none';}

function stay(){
 if(!S.private)return `<section class="login"><span class="eyebrow" style="background:var(--deep);color:#fff">PRIVATE GUEST AREA</span>
 <h1>My Stay</h1><p class="sub">Introduza o código privado fornecido para a sua reserva.</p>
 <input id="code" inputmode="numeric" placeholder="Guest code">
 <button class="btn" onclick="login()">Enter Guest Area</button>
 <div class="notice">Código de demonstração: <b>1234</b>. Na versão de produção, cada reserva terá um código próprio.</div></section>`;
 return `<section class="section"><h2>My Stay</h2><p class="sub">Bem-vindo. Aqui encontra a informação prática da sua estadia e o Discovery privado.</p>
 <div class="list">
 ${row("✦","Discovery","Restaurantes, praias, nightlife, activities, Explore Algarve, sunset e gastronomia.","discoveryPrivate")}
 ${row("🚕","Airport Transfer","Faro Airport → Tahys Oura","transfer")}
 ${row("🎁","Welcome Amenities","Produtos e ofertas de boas-vindas","amenities")}
 ${row("🛏️","Choose your pillows","Escolha o seu tipo de almofada","pillows")}
 ${row("🛒","Supermarkets","Intermarché, Aldi e Continente com Google Maps","supermarkets")}
 ${row("✚","Pharmacy","Farmácias mais próximas · até 10 km","pharmacy")}
 ${row("🛂","Guest Registration","Registo obrigatório de hóspedes","registration")}
 ${row("💶","Tourist Tax","Calculadora e informação legal","tax")}
 ${row("🌙","Sleep Hours","Silêncio recomendado entre as 23:00 e as 07:00","sleep")}
 ${row("🔑","Keycard & Access","Entrada no edifício e apartamento","access")}
 ${row("🛡️","Security","Contactos de segurança e emergência","security")}
 ${row("📶","Wi‑Fi & Apartment Guide","Internet e equipamentos","wifi")}
 ${row("🏊","Pool Access","Acesso à piscina · pulseira RFID · máximo 6 hóspedes","poolAccess")}
 ${row("🏖️","Beach Access","Praia da Oura Leste · 350 m · cerca de 5 minutos a pé","beachAccess")}
 </div></section>`;
}
function poolAccess(){
 if(!S.private)return stay();
 return privatePage("Pool Access","🏊",`<div class="box"><h3>Swimming Pool Access</h3><p>O complexo de piscina é propriedade da <b>Quinta Pedra dos Bicos Hotels</b> e o acesso é efetuado através de uma <b>pulseira RFID</b>.</p><p><b>Máximo de 6 hóspedes</b> do apartamento podem utilizar o acesso.</p><p>Para mais informações, consulte o <b>livro de informações</b> disponível no apartamento.</p></div>`);
}
function beachAccess(){
 if(!S.private)return stay();
 return privatePage("Beach Access","🏖️",`<div class="beach-access-card"><img src="beach-access-map.png" alt="Mapa ilustrado do percurso pedonal entre o apartamento e a praia" loading="eager"><div class="beach-access-copy"><h3>Praia da Oura Leste</h3><p><b>350 m · aproximadamente 5 minutos a pé</b></p><p>O mapa mostra o percurso pedonal desde o apartamento até ao acesso à praia.</p></div></div>`);
}
function discoveryPrivate(){
 if(!S.private)return stay();
 const items=[
  ["🍽️","Restaurants","Restaurantes seleccionados, filtros, distâncias e ligações.","restaurants"],
  ["🏖️","Beaches","Praias, fotografias, distâncias e restaurantes de praia.","beaches"],
  ["🌙","Nightlife","Locais e sugestões para sair à noite em Albufeira e arredores.","nightlife"],
  ["🎯","Activities","Parques aquáticos, Zoomarine, passeios de barco, golf e outras experiências.","activities"],
  ["🗺️","Explore Algarve","Lugares e experiências para descobrir o Algarve para além de Albufeira.","exploreAlgarve"],
  ["🌅","Sunset","Os nossos locais recomendados para ver o sunset, com localização e informação prática.","sunset"],
  ["🍴","Gastronomy","As 7 Maravilhas da Gastronomia Portuguesa e sabores tradicionais do marisco português.","gastronomy"]
 ];
 return `<section class="section"><h2>Discovery</h2><p class="sub">Conteúdo exclusivo para hóspedes: recomendações detalhadas preparadas para a sua estadia.</p><div class="grid">${items.map(x=>card(x[0],x[1],x[2],x[3])).join("")}</div><button class="btn alt" onclick="go('stay')">← Back to My Stay</button></section>`;
}
function nightlife(){if(!S.private)return stay(); return privatePage("Nightlife","🌙",`<div class="box"><h3>Albufeira after dark</h3><p>Na área privada vamos reunir os principais bares, rooftops, música ao vivo, Oura Strip e Old Town, com distância, ambiente e Google Maps.</p></div>`);}
function exploreAlgarve(){if(!S.private)return stay(); return privatePage("Explore Algarve","🗺️",`<div class="box"><h3>Beyond Albufeira</h3><p>Uma selecção privada de lugares para conhecer no Algarve, incluindo Benagil, Cabo de São Vicente, Sagres, Vilamoura, Monchique e outras experiências.</p></div>`);}
function sunset(){if(!S.private)return stay(); return privatePage("Sunset","🌅",`<div class="box"><h3>Sunset spots</h3><p>Os locais recomendados para assistir ao pôr do sol serão apresentados aqui exclusivamente depois do login, com localização, distância e melhor enquadramento.</p></div>`);}
function gastronomy(){ if(!S.private)return stay();
 const wonders=[
  {name:"Alheira de Mirandela",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Alheira.jpg/640px-Alheira.jpg",meta:"Entrada · Trás-os-Montes",detail:"A alheira nasceu associada a comunidades judaicas e cristãs-novas de Trás-os-Montes e tornou-se um dos enchidos mais reconhecidos de Portugal. A receita tradicional combina pão, alho, azeite e carnes, com variações regionais. É normalmente grelhada ou frita e servida com acompanhamentos simples."},
  {name:"Queijo Serra da Estrela",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Queijo_Serra_da_Estrela.jpg/640px-Queijo_Serra_da_Estrela.jpg",meta:"Entrada · Beiras",detail:"Produzido tradicionalmente com leite de ovelha e flor de cardo, é um queijo de pasta amanteigada e sabor profundo. Deve ser apreciado à temperatura ambiente, acompanhado por pão."},
  {name:"Caldo Verde",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Caldo_verde.jpg/640px-Caldo_verde.jpg",meta:"Sopa · Norte de Portugal",detail:"Uma sopa de base humilde e profundamente portuguesa: batata, couve-galega, azeite e, muitas vezes, chouriço. A couve é cortada muito fina e adicionada no final para preservar a textura e cor."},
  {name:"Arroz de Marisco",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Arroz_de_marisco.jpg/640px-Arroz_de_marisco.jpg",meta:"Marisco · Estremadura e Ribatejo",detail:"Arroz caldoso preparado com um caldo rico de marisco. Juntam-se ingredientes como camarão, amêijoa e mexilhão, procurando manter o arroz cremoso, aromático e servido bem quente."},
  {name:"Sardinha Assada",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sardinhas_assadas.jpg/640px-Sardinhas_assadas.jpg",meta:"Peixe · Lisboa e Setúbal",detail:"Sardinha fresca grelhada sobre carvão, normalmente temperada de forma simples com sal. É um símbolo da cozinha portuguesa de verão e das festas populares."},
  {name:"Leitão da Bairrada",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Leitao_da_Bairrada.jpg/640px-Leitao_da_Bairrada.jpg",meta:"Carne · Bairrada",detail:"Leitão assado lentamente, conhecido pela pele estaladiça e carne tenra. A preparação tradicional valoriza o assado em forno e o tempero característico da Bairrada."},
  {name:"Pastel de Belém",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Pasteis_de_Belem.jpg/640px-Pasteis_de_Belem.jpg",meta:"Doce · Lisboa",detail:"O pastel de Belém é uma tartelete de massa folhada e creme de ovos, ligada à tradição conventual e à famosa Antiga Confeitaria de Belém. A casa de Belém mantém a sua receita própria. Fora dessa casa, doces semelhantes são geralmente chamados pastéis de nata."}
 ];
 const seafood=[
  ["Gamba da costa algarvia","A gamba da costa é apreciada pela textura firme e sabor delicado. Na cozinha algarvia aparece grelhada, cozida ou em arrozes e cataplanas."],
  ["Perceve","Cresce agarrado às rochas expostas à forte ondulação, sobretudo na costa sudoeste. A Costa Vicentina, incluindo Vila do Bispo e Cabo de São Vicente, é célebre por esta iguaria. A apanha tradicional é manual, com arrilhada ou faca de mariscar, e depende muito do estado do mar. No PNSACV existem regras específicas de defeso, tamanho mínimo, limites e licenciamento. O sabor muito concentrado a mar, a textura e a raridade fazem do perceve uma das iguarias de marisco mais valorizadas de Portugal."],
  ["Amêijoas à Bulhão Pato","Amêijoas abertas num molho de azeite, alho, coentros e vinho branco ou limão. Um clássico das marisqueiras portuguesas."],
  ["Sapateira","A sapateira é valorizada pela carne branca e pelo recheio da carapaça, que pode levar ovo, pickles, mostarda e pão ralado. É normalmente servida fria ou à temperatura ambiente."],
  ["Ostras","As ostras portuguesas estão muito associadas a estuários e zonas lagunares. São apreciadas ao natural, muitas vezes com limão, para preservar o sabor iodado."],
  ["Lagosta","A lagosta europeia é um dos mariscos mais nobres da costa portuguesa. Tem carne firme e sabor intenso e é frequentemente preparada de forma simples, cozida ou grelhada."],
  ["Navalheira","Crustáceo de sabor delicado, muito apreciado na costa portuguesa. Pode ser cozido e servido simples ou utilizado em recheios e preparações de marisco."],
  ["Lapas, búzios e mexilhões","Outros produtos tradicionais da costa portuguesa, muito ligados à cozinha algarvia e vicentina, preparados grelhados, cozidos, em arroz ou em caldeiradas."]
 ];
 return `<section class="section gastronomy-page"><h2>Gastronomy</h2><p class="sub">As <b>7 Maravilhas da Gastronomia Portuguesa</b> foram eleitas em 2011 por votação pública. Os vencedores foram Alheira de Mirandela, Queijo Serra da Estrela, Caldo Verde, Arroz de Marisco, Sardinha Assada, Leitão da Bairrada e Pastel de Belém.</p>
 <div class="food-grid">${wonders.map((w,i)=>`<button class="food-button" onclick="openFood(${i})"><img src="${w.img}" alt="${w.name}" onerror="this.style.display='none'"><span>${w.name}</span><small>${w.meta}</small></button>`).join("")}</div>
 <div id="foodDetail" class="food-detail" style="display:none"></div>
 <h2 style="margin-top:28px">Seafood</h2><p class="sub">Uma selecção de mariscos tradicionais portugueses, com destaque para os sabores da costa algarvia e vicentina.</p>
 <div class="sea-grid">${seafood.map(x=>`<div class="sea-card"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join("")}</div>
 <div class="notice">Nota: a apanha de perceve é regulamentada e sujeita a regras que podem variar por zona e período. A app apresenta informação gastronómica e não constitui autorização para captura.</div>
 <button class="btn alt" onclick="go('discoveryPrivate')">← Back to Discovery</button></section>`;
}
function openFood(i){
 const details=[
  ["Alheira de Mirandela","Entrada · Trás-os-Montes","A alheira nasceu associada a comunidades judaicas e cristãs-novas de Trás-os-Montes e tornou-se um dos enchidos mais reconhecidos de Portugal. A receita tradicional combina pão, alho, azeite e carnes, com variações regionais. É normalmente grelhada ou frita e servida com acompanhamentos simples."],
  ["Queijo Serra da Estrela","Entrada · Beiras","Produzido tradicionalmente com leite de ovelha e flor de cardo, é um queijo de pasta amanteigada e sabor profundo. Deve ser apreciado à temperatura ambiente, acompanhado por pão."],
  ["Caldo Verde","Sopa · Norte de Portugal","Uma sopa de base humilde e profundamente portuguesa: batata, couve-galega, azeite e, muitas vezes, chouriço. A couve é cortada muito fina e adicionada no final para preservar a textura e cor."],
  ["Arroz de Marisco","Marisco · Estremadura e Ribatejo","O segredo está no caldo: cascas e cabeças de crustáceos dão profundidade. Juntam-se camarão, amêijoas, mexilhão e outros mariscos, procurando manter o arroz caldoso e aromático."],
  ["Sardinha Assada","Peixe · Lisboa e Setúbal","Sardinhas frescas são temperadas com sal e colocadas sobre carvão forte. A gordura natural e o fumo criam o sabor característico. É frequentemente acompanhada por pão, salada ou pimentos assados."],
  ["Leitão da Bairrada","Carne · Bairrada","O leitão é assado lentamente, procurando uma pele fina e estaladiça e carne muito tenra. O tempero e a preparação em forno são essenciais para o resultado tradicional da Bairrada."],
  ["Pastel de Belém","Doce · Lisboa","O pastel de Belém está ligado à tradição conventual de Belém e à famosa Antiga Confeitaria de Belém, fundada em 1837. A casa mantém a sua receita própria. Em casa, uma aproximação usa massa folhada e creme de gemas, leite, açúcar e farinha, aromatizado com limão e canela. O nome Pastel de Belém está associado à casa de Belém; fora dela, é comum encontrar o termo pastel de nata para doces semelhantes."]
 ];
 const w=details[i]; const el=document.getElementById('foodDetail'); if(!el)return;
 el.innerHTML=`<div class="food-detail-inner"><button class="close-food" onclick="document.getElementById('foodDetail').style.display='none'">×</button><h2>${w[0]}</h2><div class="food-kicker">${w[1]}</div><p>${w[2]}</p></div>`;
 el.style.display='block';el.scrollIntoView({behavior:'smooth',block:'start'});
}
function privatePage(title,icon,body){
 return `<section class="detail"><div class="photo">${icon} ${title.toUpperCase()}</div><h1>${title}</h1>${body}<button class="btn alt" onclick="go('stay')">← Back to My Stay</button></section>`;
}

function restaurants(){ if(!S.private)return stay();
 const cats=["All","Seafood","Portuguese","Sushi","Italian","Michelin","Beach & Sunset","Frango Assado à Guia"];
 const frangoGuiaNames=["O Márinho","Restaurante Teodósio"];
 const isFrangoGuia=S.cat==="Frango Assado à Guia";
 const filtered=isFrangoGuia
   ? restaurantData.filter(x=>frangoGuiaNames.includes(x.name))
   : restaurantData.filter(x=>(S.cat==="All"||(Array.isArray(x.cat)?x.cat.includes(S.cat):x.cat===S.cat)))
     .filter(x=>S.price==="All"||x.price===S.price)
     .filter(x=>S.dist==="All"||x.dist<=Number(S.dist));
 return `<section class="section"><h2>Eat & Drink</h2><p class="sub">Restaurantes reais seleccionados, por cozinha, preço e distância aproximada.</p>
 <div class="tags">${cats.map(c=>`<button class="tag ${S.cat===c?"active":""}" onclick="S.cat='${c}';S.price='All';S.dist='All';render()">${c}</button>`).join("")}</div>
 ${isFrangoGuia?`<div class="frango-guia-intro"><img src="frango-guia.jpg" alt="Frango Assado à Guia" class="frango-guia-img"><div class="frango-guia-copy"><h3>Frango Assado à Guia</h3><p>O famoso frango da Guia é um frango pequeno, aberto e espalmado, assado sobre carvão até a pele ficar tostada e estaladiça. É tradicionalmente servido com um molho aromático, frequentemente com alho, limão, orégãos, óleo e picante, acompanhado por batatas fritas e salada.</p><p><strong>Origem:</strong> a tradição está ligada à Guia, no concelho de Albufeira. A técnica de assar frango aberto e espalmado ganhou expressão no Algarve a partir dos anos 1950, com influência da cozinha trazida de Moçambique. A receita que se tornou uma referência do “Frango da Guia” é frequentemente associada a José Carlos Ramires Cabanita, em 1964. A Guia tornou-se desde então um dos grandes símbolos gastronómicos do Algarve.</p></div></div>`:`<div class="filters"><select onchange="S.price=this.value;render()"><option value="All">Any price</option><option>€</option><option>€€</option><option>€€€</option><option>€€€€</option></select>
 <select onchange="S.dist=this.value;render()"><option value="All">Any distance</option><option value="1">≤ 1 km</option><option value="2">≤ 2 km</option><option value="5">≤ 5 km</option><option value="10">≤ 10 km</option></select></div>`}
 <div class="list">${filtered.map(x=>`<div class="row restaurant-row"><div class="ico">🍽️</div><div class="grow"><h3>${x.name}</h3>${x.michelinStars?`<div class="michelin-badge" aria-label="MICHELIN Guide — ${x.michelinStars} Estrelas"><span class="michelin-mark">●</span><span class="michelin-word">MICHELIN GUIDE</span><span class="michelin-stars">${"★".repeat(x.michelinStars)}</span></div>`:""}<p>${x.cat} · ${x.price} · ${x.dist} km<br>${x.beach}<br>${x.desc}</p><div class="restaurant-links"><a class="mini-link" href="${x.url}" target="_blank" rel="noopener">Google Maps ↗</a>${x.phone?`<a class="mini-link" href="tel:${x.phone.replace(/\s/g,"")}">☎ ${x.phone}</a>`:""}${x.instagram?`<a class="mini-link" href="${x.instagram}" target="_blank" rel="noopener">Instagram ↗</a>`:""}${x.website?`<a class="mini-link" href="${x.website}" target="_blank" rel="noopener">Website ↗</a>`:""}${x.review?`<a class="mini-link" href="${x.review}" target="_blank" rel="noopener">Tripadvisor ↗</a>`:""}</div></div></div>`).join("")||'<div class="notice">No restaurants match these filters.</div>'}</div>
 </section>`;
}

function beachRestaurantCard(x){
 const r=restaurantData.find(a=>a.name===x);
 if(!r)return "";
 return `<div class="beach-rest" onclick="window.open('${r.url}','_blank')">
   <div><strong>${r.name}</strong><span>${Array.isArray(r.cat)?r.cat.join(" · "):r.cat} · ${r.price}</span><p>${r.desc}</p></div><b>↗</b>
 </div>`;
}

function beaches(){ if(!S.private)return stay();
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
function supermarkets(){ if(!S.private)return stay();
 return `<section class="section"><h2>Supermarkets</h2><p class="sub">Os supermercados indicados no anúncio do apartamento.</p>
 <div class="list">${row("🛒","Intermarché","Aproximadamente 100 m do apartamento")}${row("🛒","Aldi","Aproximadamente 400 m do apartamento")}</div>
 <div class="notice">Na V2 adicionaremos mapa, horários, distância exacta e indicação de aberto agora.</div></section>`;
}

function pharmacy(){
 const pharmacies=[
  {name:"Farmácia Godinho Belo",dist:"≈ 1,0 km",address:"Avenida Francisco Sá Carneiro, 110, Albufeira",hours:"09:00–21:00",phone:"289 542 926",maps:"https://www.google.com/maps/search/?api=1&query=Farm%C3%A1cia+Godinho+Belo+Avenida+Francisco+S%C3%A1+Carneiro+110+Albufeira"},
  {name:"Farmácia Santos Pinto",dist:"≈ 1,9 km",address:"Urbanização Quinta da Bela Vista, Lote E, Loja 4-5, Albufeira",hours:"08:30–20:30 · sábado 09:00–19:00",phone:"289 512 901",maps:"https://www.google.com/maps/search/?api=1&query=Farm%C3%A1cia+Santos+Pinto+Albufeira"},
  {name:"Farmácia Piedade",dist:"≈ 2,9 km",address:"Rua João de Deus, 10, Albufeira",hours:"Consultar horário/serviço de turno",phone:"289 512 254",maps:"https://www.google.com/maps/search/?api=1&query=Farm%C3%A1cia+Piedade+Rua+Jo%C3%A3o+de+Deus+10+Albufeira"},
  {name:"Farmácia Olhos D'Água",dist:"≈ 2,9 km",address:"Edifício Euro-Latino, Loja H, Olhos de Água",hours:"09:00–19:00",phone:"289 502 401",maps:"https://www.google.com/maps/search/?api=1&query=Farm%C3%A1cia+Olhos+D%27%C3%81gua+Albufeira"},
  {name:"Farmácia Alves de Sousa",dist:"≈ 3,0 km",address:"Avenida da Liberdade, 103-B, Albufeira",hours:"09:00–22:00 · fins de semana/feriados 09:00–20:00",phone:"289 512 258",maps:"https://www.google.com/maps/search/?api=1&query=Farm%C3%A1cia+Alves+de+Sousa+Avenida+da+Liberdade+103+B+Albufeira"},
  {name:"Farmácia Marques Silva",dist:"≈ 4,5 km",address:"Estrada Nacional 395, Edifício Labisa, Loja D, Ferreiras",hours:"09:00–19:30",phone:"289 571 130",maps:"https://www.google.com/maps/search/?api=1&query=Farm%C3%A1cia+Marques+Silva+Ferreiras"},
  {name:"Farmácia Neves Silva",dist:"≈ 8,2 km",address:"Rua Nossa Senhora da Guia, 10, Guia",hours:"09:00–20:00",phone:"289 561 443",maps:"https://www.google.com/maps/search/?api=1&query=Farm%C3%A1cia+Neves+Silva+Guia+Albufeira"}
 ];
 return `<section class="section pharmacy-page">
 <style>
 .pharmacy-head{display:flex;align-items:center;gap:14px;margin-bottom:18px}
 .green-cross{width:54px;height:54px;border-radius:16px;background:#fff;border:1px solid #dfe8df;display:grid;place-items:center;color:#16a34a;font-size:35px;font-weight:800;line-height:1;box-shadow:0 8px 22px rgba(0,0,0,.05)}
 .pharmacy-card{background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:18px;padding:16px;margin:0 0 12px;box-shadow:0 7px 20px rgba(0,0,0,.045)}
 .pharmacy-top{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}
 .pharmacy-card h3{margin:0 0 4px;font-size:16px}
 .pharmacy-dist{font-weight:700;white-space:nowrap;font-size:13px}
 .pharmacy-address,.pharmacy-hours,.pharmacy-phone{font-size:13px;margin:6px 0 0;opacity:.78}
 .pharmacy-actions{display:flex;gap:8px;margin-top:12px}
 .pharmacy-map{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;border-radius:12px;padding:9px 12px;background:var(--deep);color:#fff;font-size:12px;font-weight:700}
 </style>
 <div class="pharmacy-head"><div class="green-cross">✚</div><div><h2 style="margin:0">Pharmacy</h2><p class="sub" style="margin:3px 0 0">Farmácias próximas do apartamento, num raio de 10 km.</p></div></div>
 ${pharmacies.map(x=>`<article class="pharmacy-card"><div class="pharmacy-top"><div><h3>${x.name}</h3><p class="pharmacy-address">📍 ${x.address}</p></div><div class="pharmacy-dist">${x.dist}</div></div><p class="pharmacy-hours">🕒 ${x.hours}</p><p class="pharmacy-phone">☎️ ${x.phone}</p><div class="pharmacy-actions"><a class="pharmacy-map" href="${x.maps}" target="_blank" rel="noopener">Google Maps ↗</a></div></article>`).join("")}
 <div class="notice">Os horários apresentados são horários habituais publicados por fontes locais. As farmácias de serviço/turno podem mudar diariamente; confirme o serviço do dia antes de se deslocar. Em emergência médica, ligue 112.</div>
 </section>`;
}
function activities(){ if(!S.private)return stay();
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

const teaData=[
 {id:"camomille",name:"Camomille",type:"Infusão",img:"tea-camomille.svg",temp:"100°C",time:"6 min",profile:"Suave e delicada, com notas florais e frutadas.",desc:"Infusão de camomila, de carácter suave e delicado. Uma opção naturalmente sem cafeína.",url:"https://www.dammann.fr/fr/camomille.html"},
 {id:"earl-grey",name:"Earl Grey Yin Zhen",type:"Chá preto · Bergamota",img:"tea-earl-grey.svg",temp:"90°C",time:"4–5 min",profile:"Frutado, com a elegante nota de bergamota.",desc:"Uma seleção de finos chás pretos enriquecida com pontas brancas e pétalas, aromatizada com bergamota da Calábria.",url:"https://www.dammann.fr/fr/earl-grey-yin-zhen-50-sachets-cristal.html"},
 {id:"breakfast",name:"Breakfast",type:"Chá preto",img:"tea-breakfast.svg",temp:"90°C",time:"4–5 min",profile:"Encorpado, amadeirado e persistente.",desc:"Uma mistura de chás selecionados para um chá de pequeno-almoço encorpado e estimulante.",url:"https://www.dammann.fr/fr/breakfast-50-sachets-cristal.html"},
 {id:"darjeeling",name:"Darjeeling",type:"Chá preto · Índia",img:"tea-darjeeling.svg",temp:"90°C",time:"4–5 min",profile:"Delicado, aromático, com notas de amêndoa e fruta.",desc:"Um chá de Darjeeling de carácter elegante e delicado, ideal para apreciar simples.",url:"https://www.dammann.fr/fr/darjeeling-50-sachets-cristal.html"},
 {id:"4-fruits",name:"4 Fruits Rouges",type:"Chá preto · Frutos vermelhos",img:"tea-4-fruits-rouges.svg",temp:"90°C",time:"4–5 min",profile:"Intensamente frutado: cereja, framboesa, morango e groselha.",desc:"Chá preto aromatizado com quatro notas de frutos vermelhos.",url:"https://www.dammann.fr/fr/4-fruits-rouges-25-sachets-cristal.html"},
 {id:"ceylan",name:"Ceylan O.P.",type:"Chá preto · Sri Lanka",img:"tea-ceylan.svg",temp:"90°C",time:"3–5 min",profile:"Suave, amadeirado, floral e ligeiramente especiado.",desc:"Chá preto originário do Sri Lanka, de perfil aromático e redondo.",url:"https://www.dammann.fr/fr/ceylan-op-50-sachets-cristal-.html"},
 {id:"jasmin",name:"Thé vert au Jasmin",type:"Chá verde · Jasmim",img:"tea-jasmin.svg",temp:"80°C",time:"3–4 min",profile:"Floral, fresco e delicadamente vegetal.",desc:"Chá verde perfumado com jasmim, de infusão delicada e fresca.",url:"https://www.dammann.fr/fr/the-vert-au-jasmin-25-sachets-cristal.html"},
 {id:"gunpowder",name:"Chine Gunpowder",type:"Chá verde · China",img:"tea-gunpowder.svg",temp:"80°C",time:"3–4 min",profile:"Vegetal, vivo e ligeiramente adstringente.",desc:"Chá verde chinês cujas folhas enroladas dão origem ao nome Gunpowder. É também tradicionalmente usado para preparar chá de menta.",url:"https://www.dammann.fr/fr/the-de-chine-gunpowder.html"}
];

function teaPage(){
 const selected=teaData.find(t=>t.id===S.tea);
 if(selected) return `<section class="section tea-detail">
   <button class="back" onclick="S.tea=null;render()">← Voltar aos chás</button>
   <div class="tea-detail-card">
    <img class="tea-detail-img" src="${selected.img}" alt="${selected.name}">
    <div class="tea-detail-content">
      <div class="tea-kicker">DAMMANN Frères</div>
      <h2>${selected.name}</h2>
      <div class="tea-type">${selected.type}</div>
      <p>${selected.desc}</p>
      <div class="tea-info-grid">
       <div><span>🌡️</span><b>Preparação</b><strong>${selected.temp}</strong></div>
       <div><span>⏱️</span><b>Infusão</b><strong>${selected.time}</strong></div>
       <div class="tea-profile"><span>☕</span><b>Perfil</b><strong>${selected.profile}</strong></div>
      </div>
      <a class="tea-official" href="${selected.url}" target="_blank" rel="noopener">Ver ficha oficial DAMMANN Frères ↗</a>
    </div>
   </div>
 </section>`;
 return `<section class="section tea-page">
   <button class="back" onclick="go('amenities')">← Welcome Amenities</button>
   <h2>Chá DAMMANN Frères</h2>
   <p class="sub">Uma seleção de chás e infusões para escolher durante a sua estadia. Toque numa saqueta para conhecer o tipo de chá, a preparação e o perfil.</p>
   <div class="tea-grid">${teaData.map(t=>`<button class="tea-card" onclick="S.tea='${t.id}';render()">
     <div class="tea-sachet-wrap"><img src="${t.img}" alt="${t.name}"></div>
     <div class="tea-card-body"><h3>${t.name}</h3><p>${t.type}</p><span>Ver detalhes →</span></div>
   </button>`).join("")}</div>
   <p class="tea-note">A seleção disponibilizada pode variar de acordo com a disponibilidade.</p>
 </section>`;
}

const routes={
 home,apartment,stay,poolAccess,beachAccess,restaurants,beaches,supermarkets,activities,discover,discoveryPublic,discoveryPrivate,concierge,pharmacy,nightlife,exploreAlgarve,sunset,gastronomy,
 transfer:()=>privatePage("Airport Transfer","🚕",`<div class="box"><h3>Transfer</h3><p>Na V2 vamos criar um formulário real com voo, hora de chegada, passageiros, bagagem e confirmação do transfer Faro → Tahys Oura.</p></div><button class="btn" onclick="toast('Pedido guardado no modo demonstração.')">Request Transfer</button>`),
 amenities:welcomeAmenities, tea:teaPage,
 pillows:()=>privatePage("Choose your pillows","🛏️",`<div class="box"><h3>Preference</h3><p><label><input type="radio" name="p" checked> Medium</label><br><label><input type="radio" name="p"> Soft</label><br><label><input type="radio" name="p"> Firm</label><br><label><input type="radio" name="p"> Memory Foam</label></p></div><button class="btn" onclick="toast('Preferência guardada.')">Save Choice</button>`),
 registration:()=>privatePage("Guest Registration","🛂",`<div class="box"><h3>Secure registration</h3><p>A V2 terá um formulário seguro para recolher os dados necessários à comunicação legal de hóspedes, com controlos de privacidade e retenção. Não inserir documentos reais nesta demonstração.</p></div><button class="btn" onclick="toast('Formulário seguro será ligado na V2.')">Start Registration</button>`),
 tax:()=>privatePage("Tourist Tax","💶",`<div class="box"><h3>Informação do anúncio</h3><p>O anúncio informa €2 por noite e por hóspede, até ao máximo de 7 noites, com isenção para crianças e jovens até aos 13 anos. Antes de usar esta informação operacionalmente, deve ser confirmada a regra municipal em vigor.</p></div>`),
 access:()=>privatePage("Keycard & Access","🔑",`<div class="box"><h3>Access</h3><p>Na V2 colocaremos as instruções exactas de entrada no edifício e apartamento, com fotografias e passos numerados.</p></div>`),
 security:()=>privatePage("Security","🛡️",`<div class="box"><h3>Emergency</h3><p>Emergência em Portugal: 112. Os contactos privados de segurança serão adicionados quando forem fornecidos.</p></div>`),
 wifi:()=>privatePage("Wi‑Fi & Apartment Guide","📶",`<div class="box"><h3>Apartment guide</h3><p>Na V2 vamos inserir o nome da rede Wi‑Fi, palavra-passe, Smart TV, ar condicionado, máquina de lavar, máquina de loiça e restantes instruções.</p></div>`),
 sleep:()=>privatePage("Sleep Hours","🌙",`<div class="box"><h3>Quiet Hours · 23:00–07:00</h3><p>Para respeitar o descanso dos vizinhos, pedimos que mantenha o silêncio e evite música, festas, conversas em voz alta e outros ruídos que possam causar incómodo entre as 23:00 e as 07:00. Este período corresponde ao período noturno definido no Regulamento Geral do Ruído.</p></div>`)
};
function welcomeAmenities(){
 const groups=[
  {title:"Amenities de WC",icon:"🛁",items:[
   {icon:"🧴",name:"Shampoo Bulgari · 300 ml",desc:"Dispensador de 300 ml com shampoo Bulgari."},
   {icon:"🧼",name:"Sabonete líquido Bulgari · 300 ml",desc:"Dispensador de 300 ml com sabonete líquido Bulgari."},
   {icon:"🧴",name:"Amaciador de cabelo Bulgari · 300 ml",desc:"Dispensador de 300 ml com amaciador de cabelo Bulgari."},
   {icon:"🧴",name:"Creme corporal Bulgari · 300 ml",desc:"Dispensador de 300 ml com creme corporal Bulgari."},
   {icon:"🪥",name:"Escova de dentes de bambu",desc:"Escova de dentes de bambu disponibilizada aos hóspedes."},
   {icon:"🦷",name:"Pasta de dentes",desc:"Pasta de dentes disponibilizada aos hóspedes."},
   {icon:"🌿",name:"Aloe Vera · 200 ml",desc:"Aloe Vera em embalagem de 200 ml."},
   {icon:"🧻",name:"Papel higiénico",desc:"Papel higiénico disponibilizado na casa de banho."}
  ]},
  {title:"Welcome Amenities",icon:"✨",items:[
   {icon:"☕",name:"Nespresso",desc:"São oferecidas cápsulas de café Nespresso. O cliente pode escolher o seu sabor preferido."},
   {icon:"🍵",name:"Dammann Frères",desc:"São oferecidos diversos tipos de chá Dammann Frères. O cliente pode escolher o seu preferido."},
   {icon:"🥛",name:"Nesquik",desc:"Saquetas individuais de Nesquik para preparar uma bebida de chocolate."},
   {icon:"💧",name:"Água",desc:"Água disponível para os hóspedes à chegada."},
   {icon:"🍬",name:"Açúcar",desc:"Açúcar disponibilizado para café e chá."},
   {icon:"🍽️",name:"Pastilhas para máquina de lavar loiça",desc:"Pastilhas individuais para utilização na máquina de lavar loiça."},
   {icon:"🧺",name:"Pastilhas para máquina de lavar roupa",desc:"Pastilhas para utilização na máquina de lavar roupa."},
   {icon:"🧴",name:"Detergente manual",desc:"Detergente para lavagem manual da loiça."},
   {icon:"💅",name:"Salva-unhas",desc:"Esponja salva-unhas para limpeza manual."},
   {icon:"🗑️",name:"Sacos do lixo",desc:"Sacos do lixo disponibilizados para utilização no apartamento."},
   {icon:"☂️",name:"Chapéu de sol",desc:"Chapéu de sol disponível para utilização durante a estadia."},
   {icon:"🏖️",name:"Toalha de praia",desc:"Toalha de praia disponibilizada aos hóspedes."},
   {icon:"👜",name:"Saco de praia",desc:"Saco de praia para utilização durante a estadia."}
  ]}
 ];
 return `<section class="section"><button class="back" onclick="go('stay')">← My Stay</button>
 <h2>Welcome Amenities</h2>
 <p class="sub">Tudo o que preparámos para tornar a sua chegada mais confortável.</p>
 ${groups.map((g,i)=>`<div class="amenity-group ${i===0?'wc-group':''}">
   <div class="amenity-group-title"><span>${g.icon}</span><div><h3>${g.title}</h3><p>${i===0?'Cuidados e produtos disponíveis na casa de banho.':'Pequenos detalhes preparados para a sua estadia.'}</p></div></div>
   <div class="amenities-grid">${g.items.map(a=>`<div class="amenity-card ${a.name==="Dammann Frères"?'amenity-click':''}" ${a.name==="Dammann Frères"?'onclick="go(\'tea\')"':''}>
    <div class="amenity-image">${a.name==="Dammann Frères"?'<div class="tea-mini-sachet"><span>DAMMANN</span><b>Frères</b></div>':a.icon}</div>
    <div class="amenity-body"><h3>${a.name}</h3><p>${a.desc}</p>${a.name==="Dammann Frères"?'<span class="amenity-open">Ver seleção de chás →</span>':''}</div>
   </div>`).join("")}</div>
 </div>`).join("")}
 </section>`;
}
function render(){
 document.body.classList.toggle("home-mode",S.r==="home");
 const f=routes[S.r]||home;
 document.getElementById("content").innerHTML=f();
 const names={home:"Guest Concierge",stay:"My Stay",apartment:"My Apartment",discoveryPublic:"Discovery",discoveryPrivate:"Discovery",restaurants:"Restaurants",discover:"Discovery",beaches:"Beaches",activities:"Activities",supermarkets:"Supermarkets",concierge:"Concierge",pharmacy:"Pharmacy",nightlife:"Nightlife",exploreAlgarve:"Explore Algarve",sunset:"Sunset",gastronomy:"Gastronomy"};
 document.getElementById("title").textContent=names[S.r]||"Tahys Oura";
 applyLanguage();
 document.querySelectorAll(".nav button").forEach(b=>b.classList.toggle("active",b.dataset.r===S.r||((S.r!=="home")&&["stay","discoveryPublic","discoveryPrivate","restaurants","beaches","activities","supermarkets","pharmacy","nightlife","exploreAlgarve","sunset","gastronomy","transfer","amenities","pillows","registration","tax","sleep","access","security","wifi"].includes(S.r)&&b.dataset.r==="stay")||(["apartment"].includes(S.r)&&b.dataset.r==="apartment")));
}
document.getElementById("home").onclick=()=>go("home");
document.getElementById("back").onclick=()=>go("home");
document.querySelectorAll(".nav button").forEach(b=>b.onclick=()=>go(b.dataset.r));
window.addEventListener("load",()=>{
 if("serviceWorker"in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
 setTimeout(()=>{const s=document.getElementById("splash");if(s)s.style.display="none"},450);
 render();
});
