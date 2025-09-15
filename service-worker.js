// Versão 7: Corrige os caminhos das imagens dos mapas para /assets/images/
const CACHE_NAME = 'paris-v7';
const urlsToCache = [
  // Páginas principais
  '/index.html',
  '/guia.html',
  '/roteiro.html',
  '/orcamento.html',
  '/frases.html',
  
  // Ficheiro Manifest
  '/site.webmanifest',

  // Ícones (com os caminhos corretos)
  '/assets/images/favicon.ico',
  '/assets/images/favicon.svg',
  '/assets/images/favicon-96x96.png',
  '/assets/images/apple-touch-icon.png',

  // Imagens dos dias (AGORA NA PASTA CORRETA)
  '/assets/images/Dia1.png',
  '/assets/images/Dia1a.png',
  '/assets/images/Dia1b.png',
  '/assets/images/Dia2.png',
  '/assets/images/Dia2a.png',
  '/assets/images/Dia2b.png',
  '/assets/images/Dia3a.png',
  '/assets/images/Dia4a.png',
  '/assets/images/Dia5a.png'
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
