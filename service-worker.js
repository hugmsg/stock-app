self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("stock-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css"
      ]);
    })
  );
});