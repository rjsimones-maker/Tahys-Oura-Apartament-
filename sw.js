const CACHE="tahys-v3.2";
const ASSETS=["frango-guia.jpg","./","./index.html","./styles.css?v=2.1","./app.js?v=2.1","./manifest.json","./icon.svg","./hero.svg","./hero-video.mp4","./beach-access-map.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;
  e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const c=r.clone(); caches.open(CACHE).then(x=>x.put(e.request,c)); return r}).catch(()=>caches.match(e.request)));
});
