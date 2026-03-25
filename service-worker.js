const CACHE_NAME = "jeevantika-cache-v1";

const urlsToCache = [
"/Jeevantika/",
"/Jeevantika/index.html",
"/Jeevantika/doctors.html",
"/Jeevantika/doctor.html",
"/Jeevantika/pharmacy.html",
"/Jeevantika/profile.html"
];

self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))
);
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request)
.then(response => {
return response || fetch(event.request);
})
);
});
