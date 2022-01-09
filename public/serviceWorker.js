
const CACHE_VERSION = 1;
const CACHE_NAME = "bdgtrckr-v1"
const filesToCache = [
    '/',
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    "/index.html",
    "/index.js",
    "/indexedDb.js",
    "/styles.css"
];


// self.addEventListener('install', (e) => {
//     console.log('[Service Worker] Install');
//     e.waitUntil((async () => {
//       const cache = await caches.open(cacheName);
//       console.log('[Service Worker] Caching all: app shell and content');
//       await cache.addAll(filesToCache);
//     })());
//   });

  self.addEventListener('install', function (event) {
    // Perform install steps — cache given URLs
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function (cache) {
          console.log('Opened cache');
          return cache.addAll(filesToCache);
        })
    );
  });


  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
  
          return fetch(event.request);
        }
      )
    );
  });