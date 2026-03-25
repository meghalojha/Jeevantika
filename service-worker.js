const CACHE_NAME = "jeevantika-v2";

const urlsToCache = [
  "/Jeevantika/",
  "/Jeevantika/index.html",
  "/Jeevantika/doctors.html",
  "/Jeevantika/doctor.html",
  "/Jeevantika/history.html",
  "/Jeevantika/medicine.html",
  "/Jeevantika/style.css"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
