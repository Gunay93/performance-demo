# 🛒 React Shop App

A modern e-commerce application built with **React, TypeScript and modern frontend technologies**.

The project includes product listing, search, filtering, sorting, favorites, cart management, product details and API integration.

## 🚀 Live Demo

🔗 https://gunay93.github.io/performance-demo/

---

## 📌 Features

### 🛍 Products

- Fetch products from API
- Product detail page
- Related products
- Responsive product grid
- Optimized rendering with virtualization

### 🔎 Search & Filters

- Product search
- Category filtering
- Price range filtering
- Sorting by price:
  - Low → High
  - High → Low
- Clear filters functionality

### 🛒 Shopping Cart

- Add products to cart
- Increase / decrease quantity
- Remove products
- Total price calculation
- Cart persistence with local storage

### ❤️ Favorites / Wishlist

- Add/remove favorite products
- Favorite counter badge
- Persistent favorites state

### ⚡ Performance

- Virtualized product list using `react-window`
- Memoized filtering with `useMemo`
- Lazy loading components
- Optimized rendering

### 🌐 Data Management

- Server state management with TanStack Query
- API caching
- Loading and error states

---

# 🛠 Technologies

## Frontend

- React
- TypeScript
- Vite
- React Router
- CSS

## State Management

- Zustand
- Zustand Persist

## Server State

- TanStack Query (React Query)

## Performance

- react-window
- React.lazy
- Suspense
- useMemo

## API

- DummyJSON API


# 📂 Project Structure


src
│
├── api
│ └── products-api.ts
│
├── adapters
│ └── product-adapter.ts
│
├── components
│ ├── products
│ ├── cart
│ └── favorites
│
├── hooks
│ ├── useProducts.ts
│ └── useProduct.ts
│
├── pages
│ ├── Home.tsx
│ ├── CartPage.tsx
│ ├── FavoritesPage.tsx
│ └── ProductDetail.tsx
│
├── store
│ └── cart-store.ts
│
├── types
│
└── App.tsx


---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Gunay93/performance-demo.git

Install dependencies:

npm install

Run development server:

npm run dev

Build production:

npm run build
🔌 API

Products are fetched from:

https://dummyjson.com/products

API responses are transformed using an adapter layer before being used inside components.

🧠 Architecture

The application separates:

Server State
      |
      ↓
TanStack Query
      |
      ↓
Components


Client State
      |
      ↓
Zustand
      |
      ↓
Cart / Favorites

This keeps API data and UI state separated.

📌 Future Improvements
Authentication
Checkout flow
Payment integration
Infinite scrolling
Backend integration
Admin dashboard


👩‍💻 Author

Günay Cabbarlı
Frontend Developer

React
TypeScript
Next.js
React Native
