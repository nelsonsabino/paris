// Versão 11: Adiciona os ícones principais da PWA (192x192 e 512x512) à cache.
const CACHE_NAME = 'paris-v11';
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
  
  // ÍCONES DA PWA ADICIONADOS AQUI
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

// Interceção de pedidos: serve a cache quando possível
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
