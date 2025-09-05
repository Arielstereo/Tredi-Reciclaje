self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
self.addEventListener("fetch", (event) => {
  // Puedes agregar lógica de caché aquí si lo deseas
});
