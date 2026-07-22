import { useCartStore } from "../../store/cart-store";
import CartItem from "./CartItem";
import "../../assets/css/Cart.css";
import CartSummary from "./CartSummary";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export default function Cart() {
    const navigate = useNavigate();
    const cart = useCartStore(
        state => state.cart
    );

    return (
        <div className="cart-container">

            <h2 className="cart-title">
                Səbət
            </h2>


            {
                cart.length === 0
                    ?
                    <div className="empty-cart">

                        <div className="empty-cart-icon">
                            <FiShoppingBag />
                        </div>
                        <h3 className="mb-4">
                            Səbət boşdur
                        </h3>
                        <p>
                            Səbətiniz hazırda boşdur. Alış-verişə başlamaq üçün məhsullara nəzər yetirin...
                        </p>
                        <button className="continue-btn" onClick={() => navigate("/")}>
                            Alış verişə davam edin
                        </button>
                    </div>
                    :
                    cart.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                        />
                    ))
            }


            {
                cart.length > 0 &&
                <CartSummary />
            }

        </div>
    );
}