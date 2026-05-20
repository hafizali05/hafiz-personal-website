const CACHE = 'hafiz-v1';
const PRECACHE = [
  '/',
  '/index.html',
  '/css/app.min.css',
  '/css/modal.css',
  '/css/slider.css',
  '/js/app.min.js',
  '/js/vendor.min.js',
  '/js/multislider.js',
  '/favicon.ico',
  '/img/icon-192.png',
  '/img/icon-512.png',
  '/tools/index.html',
  '/tools/json-beautifier.html',
  '/tools/pdf-to-image.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const network = fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
      return cached || network;
    })
  );
});
