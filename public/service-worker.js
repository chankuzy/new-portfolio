const CACHE_NAME = "portfolio-cache-v2";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/offline.html",
  "/icons/logo.png",
  "/icons/logo.png"
];

// Install SW
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Fetch: Try network → fallback to cache → fallback to offline.html
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        return response || caches.match(event.request);
      })
      .catch(() => {
        // if request is NOT in cache, show offline page
        if (event.request.mode === "navigate") {
          return caches.match("./offline.html");
        }
      })
  );
});

// Activate and clean old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      )
    )
  );
});
