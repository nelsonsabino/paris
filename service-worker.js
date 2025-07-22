const CACHE_NAME = 'paris-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/guia.html',
  '/roteiro.html',
  '/orcamento.html',
  '/site.webmanifest',
  '/web-app-manifest-192x192.png',
  '/web-app-manifest-512x512.png',
  '/favicon.ico',
  // Adiciona mais ficheiros se quiseres cache total
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
