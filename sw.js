const cacheName="jeevantika-v1";

const filesToCache=[
"index.html",
"doctors.html",
"doctor.html",
"appointment.html",
"history.html",
"pharmacy.html",
"cart.html"
];

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(cacheName).then(cache=>{
return cache.addAll(filesToCache);
})
);
});

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(res=>{
return res || fetch(e.request);
})
);
});
