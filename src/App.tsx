import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "sonner";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
// import { CartProvider } from "./context/CartContext";
const Home = lazy(
  () => import("./pages/Home")
);


const CartPage = lazy(
  () => import("./pages/CartPage")
);


const ProductDetail = lazy(
  () => import("./components/products/ProductDetail")
);


const FavoritesPage = lazy(
  () => import("./pages/FavoritesPage")
);
export default function App() {
  return (
    <HashRouter>
      <Toaster
        position="top-right"
        richColors
      />
      <Navbar />
      <Suspense
        fallback={
          <Loader />
        }
      >
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/cart"
            element={<CartPage />}
          />
          <Route
            path="/products/:id"
            element={<ProductDetail />}
          />
          <Route
            path="/favorites"
            element={<FavoritesPage />}
          />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}