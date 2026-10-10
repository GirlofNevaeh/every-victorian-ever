self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('victorian-cache').then(cache =>
      cache.match(event.request).then(response => response || fetch(event.request).then(res => {
        if (res.ok) cache.put(event.request, res.clone());
        return res;
      }))
    )
  );
});