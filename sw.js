self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // PWA pass requirement
    e.respondWith(fetch(e.request).catch(() => new Response("Offline")));
});
