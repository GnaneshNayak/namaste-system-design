const cache_name = 'demo/v1';
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cache_name).then((cache) => {
      return cache.addAll(['./ANQX7772.JPG', './index.html', './index.js']);
    }),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyData) => {
      return Promise.all(
        keyData.map((k) => {
          if (k !== cache_name) {
            return caches.delete(k);
          }
        }),
      );
    }),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const cloned = res.clone();
        caches.open(cache_name).then((r) => {
          r.put(e.request, cloned);
        });
        return res;
      })
      .catch((e) => {
        return caches.match(e.request).then((r) => r);
      }),
  );
});
