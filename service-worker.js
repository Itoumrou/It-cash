const CACHE_NAME = "itoumrou-pwa-v2";
const APP_SHELL = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./manifest.json",
  "./png/Click.png",
  "./png/ItOumrou-Icon.png",
  "./png/Masrvi.png",
  "./png/pwa-icon-512.png",
  "./png/pwa-icon-192.png",
  "./png/ItOumrou-Logo.png",
  "./png/pwa-icon-180.png",
  "./png/Bankily.png",
  "./png/Sedad.png"
];
self.addEventListener("install", event => { event.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(APP_SHELL))); self.skipWaiting(); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", event => { if (event.request.method !== "GET") return; event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => { if (response.ok && new URL(event.request.url).origin === self.location.origin) { const copy=response.clone(); caches.open(CACHE_NAME).then(c=>c.put(event.request,copy)); } return response; }).catch(() => caches.match("./index.html")))); });
