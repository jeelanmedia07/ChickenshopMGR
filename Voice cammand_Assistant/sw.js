self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('kcc-store-v1').then((cache) => {
      return cache.addAll([
        'dashboard.html',
        'udhar.html',
        'traders.html',
        'collection.html',
        'setup.html'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});