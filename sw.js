// Simple cache-first service worker for single-file app
const CACHE_NAME = 'repairzm-cache-v1';
const ASSETS_TO_CACHE = [
  '/',            // index.html
  '/index.html',
  // add other static assets here if any like '/sw.js' or '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Cache-first strategy
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(resp => {
        // Optionally cache new requests (careful with POST/XHR)
        return resp;
      }).catch(() => {
        // Optionally respond with an offline fallback page if you add one
        return caches.match('/index.html');
      });
    })
  );
});
