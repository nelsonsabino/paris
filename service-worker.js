// Versão 12: MUDANÇA DE ESTRATÉGIA para Network First, Cache Fallback.
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
  'assets/images/favicon.ico',
  'assets/images/favicon.svg',
  'assets/images/favicon-96x96.png',
  'assets/images/apple-touch-icon.png',
  'assets/images/android-chrome-192x192.png',
  'assets/images/android-chrome-512x512.png',

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

// Interceção de pedidos: ESTRATÉGIA ALTERADA (NETWORK-FIRST)
// Esta estratégia tenta primeiro obter os ficheiros da internet.
// Se a ligação à internet falhar, ele usa os ficheiros da cache como fallback.
// Isto garante que vê sempre a versão mais recente quando está online.
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
