const CACHE_NAME = 'vocab-master-v20260905_1338_MAX_SAFETY';
const ASSETS = [
    './',
    './index.html',
    './app.js',
    './style.css'
];

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    if (e.request.url.includes('/api/')) return;
    
    e.respondWith(
        fetch(e.request)
            .then((response) => {
                if (response && response.status === 200 && e.request.method === 'GET') {
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(e.request, responseToCache);
                    });
                }
                return response;
            })
            .catch(() => {
                return caches.match(e.request).then((cached) => {
                    return cached || caches.match('./index.html');
                });
            })
    );
});
