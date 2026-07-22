import { useCartStore } from "../../store/cart-store";
import type { CartItem as CartItemType } from "../../types/cart";

type Props = {
    item: CartItemType;
};
export default function CartItem({
    item
}: Props) {
    const increaseQuantity = useCartStore(
        state => state.increaseQuantity
    );

    const decreaseQuantity = useCartStore(
        state => state.decreaseQuantity
    );

    const removeFromCart = useCartStore(
        state => state.removeFromCart
    );
    return (
        <div className="cart-item">

            <img
                className="cart-item-image"
                src={item.image}
                alt={item.name}
            />

            <div className="cart-item-info">

                <h3>{item.name}</h3>

                <p>{item.category}</p>

                <span>${item.price}</span>

            </div>

            <div className="quantity-box">

                <button
                    className="quantity-btn"
                    onClick={() =>
                        decreaseQuantity(item.id)
                    }
                >
                    -
                </button>

                <span>{item.quantity}</span>

                <button
                    className="quantity-btn"
                    onClick={() =>
                        increaseQuantity(item.id)
                    }
                >
                    +
                </button>

            </div>

            <button
                className="remove-btn"
                onClick={() =>
                    removeFromCart(item.id)
                }
            >
                Sil
            </button>

        </div>
    );
}