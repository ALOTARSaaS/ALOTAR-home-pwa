/* ALOTAR PWA Shell preview. No authentication or API caching. */
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
/* All fetches use normal network behavior. */
