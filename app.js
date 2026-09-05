const S={r:"home",private:false,cat:"All",price:"All",dist:"All"};

const restaurantData=[
  {name:"O Marinheiro",cat:"Portuguese",price:"€€",dist:2.0,desc:"Cozinha portuguesa e peixe."},
  {name:"Praia Grande",cat:"Seafood",price:"€€€",dist:1.2,desc:"Peixe e marisco; opção para jantar junto ao mar."},
  {name:"Casa do Sushi",cat:"Sushi",price:"€€€",dist:1.5,desc:"Cozinha japonesa e sushi."},
  {name:"La Dolce Vita",cat:"Italian",price:"€€",dist:1.0,desc:"Cozinha italiana."},
  {name:"Algarve Fine Dining",cat:"Michelin",price:"€€€€",dist:5.8,desc:"Sugestão para uma ocasião especial."}
];

const beachData=[
  {name:"Praia da Oura Leste",dist:"150 m",desc:"A praia mais próxima do apartamento, com acesso por escadas existentes no empreendimento."},
  {name:"Praia de Santa Eulália",dist:"800 m",desc:"Praia de areia a curta distância do apartamento."},
  {name:"Praia de Albufeira",dist:"1,2 km",desc:"Praia central de Albufeira, com restaurantes e serviços."}
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
${card("🏖️","Beaches","Praias próximas e recomendações.","beaches")}
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
return `<section class="detail"><div class="photo">TAHYS OURA · QUINTA PEDRA DOS BICOS</div>
<h1>The Apartment</h1>
<p class="sub">Apartamento moderno e renovado, orientado a oeste, muito luminoso e com vista para o mar.</p>
<div class="box"><h3>Características</h3><p>90 m² · 2 quartos · 6 camas · 1 casa de banho · máximo 6 hóspedes. O anúncio indica 2 camas de 80 cm num quarto, 2 camas de 90 cm no outro e 2 sofás-cama na sala.</p></div>
<div class="box"><h3>Conforto</h3><p>Janelas com vidro duplo, isolamento térmico e acústico, ar condicionado nos quartos e sala, Smart TV, Wi‑Fi, cozinha equipada, máquina de lavar roupa e máquina de lavar loiça.</p></div>
<div class="box"><h3>Quartos</h3><p>As camas individuais podem ser unidas para formar uma cama dupla tipo king. Blackouts foram previstos para melhorar o conforto durante o sono.</p></div>
<div class="box"><h3>Varanda</h3><p>Varanda com banco para duas pessoas e vista mar, adequada para aproveitar o sol e o pôr do sol.</p></div>
<div class="box"><h3>Amenities</h3><p>O anúncio indica sabonete e gel de duche de qualidade superior, da marca Bvlgari/Bulgari, além de toalhas.</p></div>
<div class="box"><h3>Check-in / Check-out</h3><p>Check-in: 16:00–02:00 · Check-out: antes das 11:00.</p></div>
<button class="btn" onclick="go('stay')">Open My Stay</button></section>`;
}

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
const cats=["All","Seafood","Portuguese","Sushi","Italian","Michelin"];
const filtered=restaurantData.filter(x=>(S.cat==="All"||x.cat===S.cat))
.filter(x=>S.price==="All"||x.price===S.price)
.filter(x=>S.dist==="All"||x.dist<=Number(S.dist));
return `<section class="section"><h2>Eat & Drink</h2><p class="sub">Escolha por tipo de cozinha, preço e distância.</p>
<div class="tags">${cats.map(c=>`<button class="tag ${S.cat===c?"active":""}" onclick="S.cat='${c}';render()">${c}</button>`).join("")}</div>
<div class="filters"><select onchange="S.price=this.value;render()"><option value="All">Any price</option><option>€</option><option>€€</option><option>€€€</option><option>€€€€</option></select>
<select onchange="S.dist=this.value;render()"><option value="All">Any distance</option><option value="1">≤ 1 km</option><option value="2">≤ 2 km</option><option value="5">≤ 5 km</option><option value="10">≤ 10 km</option></select></div>
<div class="list">${filtered.map(x=>row("🍽️",x.name,`${x.cat} · ${x.price} · ${x.dist} km · ${x.desc}`)).join("")||'<div class="notice">No restaurants match these filters.</div>'}</div>
<div class="notice">As sugestões de restaurantes da V1.2 são demonstrativas. Na V2 vamos substituir esta lista por restaurantes reais verificados, com mapa, contactos, horários e reservas.</div>
</section>`;
}

function beaches(){
return `<section class="section"><h2>Beaches</h2><p class="sub">Distâncias baseadas na informação pública do anúncio.</p>
<div class="list">${beachData.map(x=>row("🏖️",x.name,`${x.dist} · ${x.desc}`)).join("")}</div></section>`;
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