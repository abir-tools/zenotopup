self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // এটি খালি রাখলেও PWA কাজ করবে
});