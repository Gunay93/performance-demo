import { useFavoriteStore } from "../store/favorite-store";
import ProductCard from "../components/products/ProductCard";
import "../assets/css/Favorites.css";
import { FaHeart } from "react-icons/fa";

export default function FavoritesPage() {

    const favorites = useFavoriteStore(
        state => state.favorites
    );
    return (

        <div className="favorites-page">
            <h2>
                Sevimli məhsullarım <FaHeart className="heart-icon" />
            </h2>
            {
                favorites.length === 0
                    ?
                    <div className="empty-favorites">
                        <h3>
                            Favoritlər siyahısı boşdur
                        </h3>

                        <p>
                            Sevimli məhsullarınızı burada görmək üçün əlavə edin
                        </p>
                    </div>
                    :
                    <div className="favorites-grid">

                        {
                            favorites.map(product => (

                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />

                            ))
                        }
                    </div>
            }
        </div>
    );
}