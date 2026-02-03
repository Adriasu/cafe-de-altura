# Café de Altura 

**Descripción**
Café de Altura es una tienda demo construida con Next.js 14 y Tailwind CSS, que muestra catálogo de productos (café), carrito y una API de productos con MongoDB/Mongoose.

---

## Contenidos
1.  Requisitos
2.  Inicio rápido
3.  Estructura del proyecto
4.  Variables de entorno
5.  Scripts importantes
6.  Endpoints de la API
7.  Buenas prácticas y tareas recomendadas
8.  Licencia y contacto

---

##  Requisitos
- Node.js v18+ (recomendado)
- npm (o yarn/pnpm)
- Una base de datos MongoDB (URI en `.env`)

---

##  Inicio rápido

1. Clonar el repositorio:
   ```bash
   git clone <repo-url>
   cd cafe-de-altura
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Crear el archivo de entorno:
   - Copia `.env.example` a `.env` y rellena la variable `MONGODB_URI`.

4. Levantar en desarrollo:
   ```bash
   npm run dev
   # abre http://localhost:3000
   ```

5. Generar build para producción:
   ```bash
   npm run build
   npm start
   ```

---

##  Estructura principal del proyecto
- `src/app/(main)/`  rutas principales y `page.jsx`
- `src/app/layout.js`  layout global (tipografía, providers, nav)
- `src/components/`  componentes reutilizables (NavBar, Footer, Card, Cart, etc.)
- `src/context/`  providers (por ejemplo `ProductsContext`)
- `src/app/api/products/route.jsx`  API REST para productos (GET paginado, POST)
- `lib/mongodb.mjs`  conexión a MongoDB
- `models/Product.mjs`  esquema y validaciones de producto
- `scripts/seedProducts.js`  script para poblar la BD con productos de ejemplo
- `tailwind.config.js`, `postcss.config.mjs`, etc.

---

##  Variables de entorno
Crea un archivo `.env` (no subirlo al repo). Variables esperadas:
```env
MONGODB_URI=your_mongodb_connection_string
```

>  **Seguridad importante:** No incluyas credenciales en el repositorio. Si el proyecto contiene un `.env` con credenciales, elimínalo del repo y rota las credenciales (usar BFG o `git filter-repo` para limpiar el historial si es necesario).

Ejemplo ` .env.example`:
```env
# .env.example
MONGODB_URI=
```

---

##  Scripts útiles (en `package.json`)
- `npm run dev`  Ejecuta Next.js en modo desarrollo
- `npm run build`  Construye la app para producción
- `npm run start`  Inicia la app en producción
- `npm run lint`  Linter (Next core web vitals)
- `npm run seed`  Poblado de productos de ejemplo (agregado)

---

##  API - Endpoints principales
- `GET /api/products?page=1&limit=10`  Lista paginada de productos (devuelve `{ products, total, page, limit }`)
- `POST /api/products`  Crear nuevo producto (body  propiedades del producto)

El endpoint de productos implementa CORS y manejo básico de errores.

---

##  Buenas prácticas y mejoras recomendadas
-  **Seguridad:** Rotar la URI de MongoDB y eliminarla del historial del repo (usar BFG o `git filter-repo` si es necesario).
-  Añadir `LICENSE` (p.ej. MIT).
-  Añadir `README` mejorado (este archivo).
-  Crear `scripts.seed` en `package.json`.
-  Añadir `.env.example` y documentación para despliegue.
-  Opcional: añadir tests unitarios y CI (GitHub Actions).
-  Opcional: configurar despliegue en Vercel (Next.js  integración fácil).

---

##  Stack tecnológico
- Next.js 14 + React 18
- Tailwind CSS
- MongoDB + Mongoose
- Librerías UI: Radix UI, sonner, lucide-react
- Cloudinary (imágenes públicas usadas en `scripts`)

---

##  Notas finales
Si quieres, puedo:
- Generar un `.env.example` y añadir el script `seed` al `package.json`.
- Crear un checklist para limpiar el historial git de las credenciales.
- Añadir un archivo `CONTRIBUTING.md` y `LICENSE`.
