<p align="center">
  <img src="public/logo.png" alt="Logo TREDI ARGENTINA" width="360" />
</p>

# Reciclado - Capacitación

Presentación interactiva sobre reciclado de residuos en casa, desarrollada con [Astro](https://astro.build/) y [React](https://react.dev/).  
Incluye navegación por diapositivas, pantalla de inicio y despedida, y está preparada como PWA para instalarse como app de escritorio.

---

## Características

- Presentación educativa sobre reciclado doméstico.
- Navegación por diapositivas con botones y teclado.
- Pantalla de bienvenida y pantalla final de despedida.
- Adaptada para pantallas grandes (TV, proyectores).
- Instalación como PWA (Progressive Web App).
- Funciona offline (con service worker y caché).
- Estilos modernos con [Tailwind CSS](https://tailwindcss.com/).

---

## Instalación y uso

1. **Instala dependencias:**

   ```bash
   npm install
   ```

2. **Ejecuta en modo desarrollo:**

   ```bash
   npm run dev
   ```

3. **Compila para producción:**

   ```bash
   npm run build
   ```

4. **Previsualiza el build:**
   ```bash
   npm run preview
   ```

---

## PWA (App de escritorio)

- El proyecto incluye un `manifest.json` y un `sw.js` (service worker) en la carpeta `public`.
- Al abrir la app en un navegador compatible (Chrome, Edge, etc.), aparecerá la opción de instalar como aplicación.
- Funciona offline si el usuario la instala y vuelve a abrirla sin conexión.

---

## Estructura del proyecto

```
Reciclado/
├── public/
│   ├── manifest.json
│   ├── sw.js
│   ├── logo-192.png
│   ├── logo-512.png
│   └── ... (imágenes)
├── src/
│   ├── components/
│   │   └── PresentacionReciclado.jsx
│   └── pages/
│       └── ... (Astro layouts y páginas)
├── package.json
└── tailwind.config.js
```

---

## Personalización

- Cambia los textos, imágenes y colores en `src/components/PresentacionReciclado.jsx`.
- Agrega tus propios íconos en `public/logo-192.png` y `public/logo-512.png`.
- Modifica el manifest y el service worker según tus necesidades.
