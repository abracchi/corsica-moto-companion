const CACHE_NAME = "corsica-moto-v4";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./src/main.js",
  "./manifest.webmanifest",
  "./assets/icons/icon.svg",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/gpx/24-arrivo-bastia-port-residence-amaryllis.gpx",
  "./assets/gpx/25-dito-est.gpx",
  "./assets/gpx/26-luglio.gpx",
  "./assets/gpx/27-luglio.gpx",
  "./assets/gpx/28-luglio.gpx",
  "./assets/gpx/30-luglio.gpx",
  "./assets/gpx/31-luglio.gpx",
  "./assets/gpx/1-agosto.gpx",
  "./assets/gpx/2-agosto.gpx",
  "./assets/gpx/3-agosto.gpx",
  "./assets/gpx/4-agosto.gpx",
  "./assets/gpx/5-agosto.gpx",
  "./assets/gpx/6-agosto.gpx",
  "./assets/gpx/7-agosto.gpx",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, "./index.html"));
    return;
  }

  const url = new URL(request.url);

  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  event.respondWith(cacheFirst(request));
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

async function networkFirst(request, fallbackUrl) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch {
    return (await cache.match(request)) || cache.match(fallbackUrl);
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const fresh = fetch(request)
    .then((response) => {
      cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached);

  return cached || fresh;
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  if (cached) {
    return cached;
  }

  const response = await fetch(request);
  cache.put(request, response.clone());
  return response;
}
