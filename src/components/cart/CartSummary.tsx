import { useCartStore } from "../../store/cart-store";

export default function CartSummary() {

    const totalPrice = useCartStore(
        state => state.totalPrice()
    );


    return (
        <div className="cart-summary">
            <h3>
                Toplam: ${totalPrice}
            </h3>
            <button className="checkout-btn">
                Sifariş et
            </button>
        </div>
    );
}