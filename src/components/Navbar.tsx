import { NavLink } from "react-router-dom";
import { useCartStore } from "../store/cart-store";
import "../assets/css/Navbar.css";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { useFavoriteStore } from "../store/favorite-store";
import { FaHeart } from "react-icons/fa6";

export default function Navbar() {

  const cartCount = useCartStore(
    state => state.cart.length
  );
  const favoriteCount = useFavoriteStore(
    state => state.favorites.length
  );

  return (
    <header className="navbar">

      <div className="navbar-container">

        <NavLink
          to="/"
          className="logo"
        >
          <FiShoppingBag className="logo-icon" />
          Shop
        </NavLink>


        <nav className="nav-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Ana səhifə
          </NavLink>


          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `nav-link cart-icon ${isActive ? "active" : ""}`
            }
          >
            <FiShoppingCart />Səbət

            {
              cartCount > 0 && (
                <span className="cart-badge">
                  {cartCount}
                </span>
              )
            }

          </NavLink>
          <NavLink
            to="/favorites"
            className="nav-icon navbar-fav"
          >
            <FaHeart className="heart-icon" />

            {
              favoriteCount > 0 &&
              <span className="fav-badge">
                {favoriteCount}
              </span>
            }

          </NavLink>
        </nav>

      </div>

    </header>
  );
}