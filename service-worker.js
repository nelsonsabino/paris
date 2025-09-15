// Versão 13: CORRIGE os nomes dos ficheiros de ícone para corresponder ao site.webmanifest
const CACHE_NAME = 'paris-v14';
const urlsToCache = [
  // Páginas principais
  'index.html',
  'guia.html',
  'roteiro.html',
  'orcamento.html',
  'frases.html',
  
  // Ficheiro Manifest
  'site.webmanifest',

  // Ícones (caminhos relativos)
  'favicon.ico',
  'favicon.svg',
  'favicon-96x96.png',
  'apple-touch-icon.png',
  
  // ÍCONES DA PWA COM NOMES CORRIGIDOS
  'web-app-manifest-192x192.png',
  'web-app-manifest-512x512.png',

  // Imagens dos dias (caminhos relativos)
  'assets/images/Dia1.png',
  'assets/images/Dia1a.png',
  'assets/images/Dia1b.png',
  'assets/images/Dia2.png',
  'assets/images/Dia2a.png',
  'assets/images/Dia2b.png',
  'assets/images/Dia3a.png',
  'assets/images/Dia4a.png',
  'assets/images/Dia5a.png'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
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
            console.log('Deleting old cache:', name);
            return caches.delete(name);
          }
        })
      )
    )
  );
});

// Interceção de pedidos: Estratégia Network-First
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
