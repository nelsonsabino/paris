// Versão 4: Garante que a versão corrigida de frases.html é carregada.
const CACHE_NAME = 'paris-v4';
const urlsToCache = [
  '/index.html',
  '/guia.html',
  '/roteiro.html',
  '/orcamento.html',
  '/frases.html',
  '/site.webmanifest',
  '/favicon.ico',
  '/favicon.svg',
  '/favicon-96x96.png',
  '/apple-touch-icon.png',
  '/web-app-manifest-192x192.png',
  '/web-app-manifest-512x512.png',

  // Imagens dos dias (pasta /data)
  '/data/Dia1.png',
  '/data/Dia1a.png',
  '/data/Dia1b.png',
  '/data/Dia2.png',
  '/data/Dia2a.png',
  '/data/Dia2b.png',
  '/data/Dia3a.png',
  '/data/Dia4a.png',
  '/data/Dia5a.png'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Ativação: limpeza de caches antigos
self.addEventListener('activate', event => {
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

// Interceção de pedidos: serve a cache quando possível
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
