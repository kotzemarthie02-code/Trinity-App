// Minimale service worker: maak die app installeerbaar, maar kas niks nie,
// sodat jy altyd die nuutste weergawe + live Firebase-data kry.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request)); });
