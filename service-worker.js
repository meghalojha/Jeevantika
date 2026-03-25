const CACHE="jeevantika-v1";

const ASSETS=[
"/Jeevantika/",
"/Jeevantika/index.html",
"/Jeevantika/doctors.html",
"/Jeevantika/pharmacy.html",
"/Jeevantika/profile.html"
];

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(CACHE).then(cache=>cache.addAll(ASSETS))
)
});

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then
