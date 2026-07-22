import React from "react";
import "../../assets/css/ProductCard.css";
import { useCartStore } from "../../store/cart-store";
import type { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaManatSign } from "react-icons/fa6";
import useToast from "../../hooks/useToast";
import { useFavoriteStore } from "../../store/favorite-store";
import { CiHeart } from "react-icons/ci";

type Props = {
    product: Product;
};

function ProductCard({ product }: Props) {
    const addToCart = useCartStore(
        state => state.addToCart
    );
    const { success } = useToast();
    const navigate = useNavigate();
    const toggleFavorite = useFavoriteStore(
        state => state.toggleFavorite
    );
    const favorite = useFavoriteStore(
        state => state.isFavorite(product.id)
    );
    return (
        <div className="product-card" onClick={() => navigate(`/products/${product.id}`)}>
            <div className="product-image-wrapper">
                <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                />
                <button
                    className="favorite-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleFavorite(product)
                        success(
                            favorite
                                ? "Favorilərdən silindi"
                                : "Favorilərə əlavə edildi"
                        );
                    }
                    }
                >

                    {favorite ? <FaHeart className="heart-icon"/> : <CiHeart />}

                </button>
            </div>
            <div className="product-info">

                <h3 className="product-title">
                    {product.name}
                </h3>

                <p className="product-category">
                    {product.category}
                </p>

                <span className="product-price">
                    {product.price}{''}<FaManatSign />
                </span>
            </div>
            <button
                className="add-cart-btn"
                onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                    success(
                        `${product.name} səbətə əlavə olundu`
                    );
                }}
            >
                Add To Cart
            </button>

        </div>
    );
}
export default React.memo(ProductCard)