# Café de Altura 

**Description**
Café de Altura is a demo e-commerce site built with Next.js 14 and Tailwind CSS. It showcases a coffee product catalog, shopping cart, and a products API backed by MongoDB/Mongoose.

---

## Table of Contents
1.  Requirements
2.  Quick Start
3.  Project Structure
4.  Environment Variables
5.  Important Scripts
6.  API Endpoints
7.  Best Practices & Recommendations
8.  License & Contact

---

##  Requirements
- Node.js v18+ (recommended)
- npm (or yarn/pnpm)
- A MongoDB database (URI in `.env`)

---

##  Quick Start

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd cafe-de-altura
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create the environment file:
   - Copy `.env.example` to `.env` and fill in the `MONGODB_URI` variable.

4. Start the development server:
   ```bash
   npm run dev
   # open http://localhost:3000
   ```

5. Build for production:
   ```bash
   npm run build
   npm start
   ```

---

##  Project Structure
- `src/app/(main)/`  main routes and `page.jsx`
- `src/app/layout.js`  global layout (fonts, providers, navbar)
- `src/components/`  reusable components (NavBar, Footer, Card, Cart, etc.)
- `src/context/`  context providers (e.g., `ProductsContext`)
- `src/app/api/products/route.jsx`  products REST API (paginated GET, POST)
- `lib/mongodb.mjs`  MongoDB connection helper
- `models/Product.mjs`  product schema and validation
- `scripts/seedProducts.js`  script to seed the DB with example products
- `tailwind.config.js`, `postcss.config.mjs`, etc.

---

##  Environment Variables
Create a `.env` file (do not commit it). Expected variables:

```env
MONGODB_URI=your_mongodb_connection_string
```

>  **Security note:** Do not store credentials in the repository. If a `.env` with secrets was ever committed, remove it from the repo and rotate credentials. Use tools like BFG or `git filter-repo` to scrub secrets from the Git history if necessary.

Example `.env.example`:
```env
# .env.example
MONGODB_URI=
```

---

##  Useful Scripts (in `package.json`)
- `npm run dev`  Run Next.js in development mode
- `npm run build`  Build the app for production
- `npm run start`  Start the production server
- `npm run lint`  Run linter (Next.js core web vitals)
- `npm run seed`  Seed the database with example products

---

##  API - Main Endpoints
- `GET /api/products?page=1&limit=10`  Returns paginated products `{ products, total, page, limit }`
- `POST /api/products`  Create a new product (body should contain product fields)

The products endpoint includes basic CORS headers and error handling.

---

##  Best Practices & Recommendations
-  **Security:** Rotate your MongoDB URI if it was exposed and remove it from repo history.
-  Add a `LICENSE` file (e.g., MIT).
-  Add `CONTRIBUTING.md` if you expect external contributions.
-  Keep `.env.example` up to date and never commit `.env`.
-  Optional: add unit tests and CI (GitHub Actions).
-  Optional: configure deployment on Vercel for seamless Next.js hosting.

---

##  Tech Stack
- Next.js 14 + React 18
- Tailwind CSS
- MongoDB + Mongoose
- UI libraries: Radix UI, Sonner, Lucide React
- Cloudinary (used for example images in `scripts`)

---

##  Final Notes
If you want, I can:
- Fix the imports in `scripts/seedProducts.js` (they currently reference index paths that may cause issues).
- Run `npm run seed` locally (requires a valid `.env` with `MONGODB_URI`).
- Create a checklist and steps to scrub any leaked secrets from Git history.
