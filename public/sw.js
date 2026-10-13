const CACHE = 'victorian-v11'
const IMAGES = [
  '/art/castle.jpg',
  '/art/homes.jpg',
  '/art/inventions.jpg',
  '/art/lamps.jpg',
  '/art/palace.jpg',
  '/art/school.jpg',
  '/art/ships.jpg',
  '/art/train.jpg',
  '/photos/balmoral.jpg',
  '/photos/belfast.jpg',
  '/photos/cardiff.jpg',
  '/photos/dublin.jpg',
  '/photos/edinburgh.jpg',
  '/photos/glasgow.jpg',
  '/photos/london.jpg',
  '/photos/palace.jpg',
  '/photos/quarry.jpg',
  ...Array.from({ length: 20 }, (_, index) => `/faces/${String(index + 1).padStart(2, '0')}.jpg`),
]

self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(IMAGES)))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))),
    ).then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method !== 'GET') return
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone()
          caches.open(CACHE).then((cache) => cache.put(request, copy))
        }
        return response
      })
      .catch(() => caches.match(request)),
  )
})
