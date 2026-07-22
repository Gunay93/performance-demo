import { useNavigate, useParams } from "react-router-dom";
import { useCartStore } from "../../store/cart-store";
import { products } from "../../data/products";
import "../../assets/css/ProductDetail.css";
import RelatedProducts from "./RelatedProducts";
import { IoIosArrowRoundBack } from "react-icons/io";
import useToast from "../../hooks/useToast";
import useProduct from "../../hooks/useProduct";
import Loader from "../Loader";
import { FaManatSign } from "react-icons/fa6";

export default function ProductDetail() {
    const {
        id
    } = useParams();
    const {
        data: product,
        isLoading,
        error
    } = useProduct(id!);
    const navigate = useNavigate();
    const { success } = useToast();
    const addToCart = useCartStore(
        state => state.addToCart
    );

    if (isLoading) {

        return <Loader />;

    }


    if (error || !product) {

        return (
            <div>
                Product not found
            </div>
        );

    }
    if (!product) {
        return (
            <h2>
                Məhsul tapılmadı
            </h2>
        );
    }


    return (
        <div className="product-detail">
            <button
                className="back-btn"
                onClick={() => navigate(-1)}
            >
                <IoIosArrowRoundBack /> Geri
            </button>
            <img
                src={product.image}
                alt={product.name}
            />
            <div className="product-detail-info">

                <h1>
                    {product.name}
                </h1>
                <p className="category">
                    {product.category}
                </p>
                <h2 className="price">
                    {product.price} {''} <FaManatSign />
                </h2>

                <div className="description">
                    <h3>Description</h3>
                    <p>
                        {product.description}
                    </p>
                </div>
                <button
                    onClick={() => {
                        addToCart(product);
                        success(
                            `${product.name} səbətə əlavə olundu`
                        );
                    }}
                    className="add-btn"
                >
                    Add to Cart
                </button>
                <RelatedProducts
                    products={products}
                    currentProduct={product}
                />
            </div>

        </div>
    );
}