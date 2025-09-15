// Versão 16: Remove o favicon.svg da cache para corresponder ao manifesto.
const CACHE_NAME = 'paris-v16';
const urlsToCache = [
  // Páginas principais
  '/index.html',
  '/guia.html',
  '/roteiro.html',
  '/orcamento.html',
  '/frases.html',
  
  // Ficheiro Manifest
  '/site.webmanifest',

  // Ícones na raiz (SVG removido)
  '/favicon.ico',
  '/favicon-96x96.png',
  '/apple-touch-icon.png',
  
  // ÍCONES DA PWA na raiz
  '/web-app-manifest-192x192.png',
  '/web-app-manifest-512x512.png',

  // Imagens de conteúdo
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
        console.log('Opened cache');
        // Usar {cache: 'reload'} para garantir que os ficheiros são obtidos da rede
        const requests = urlsToCache.map(url => new Request(url, {cache: 'reload'}));
        return cache.addAll(requests);
      })
      .catch(error => {
        console.error('Falha ao adicionar ficheiros à cache:', error);
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
