import ProductCard from "./ProductCard";
import type { Product } from "../../types/product";
import "../../assets/css/RelatedProduct.css";

type Props = {
    products: Product[];
    currentProduct: Product;
};

export default function RelatedProducts({
    products,
    currentProduct
}: Props) {

    const relatedProducts = products
        .filter(
            product =>
                product.category === currentProduct.category &&
                product.id !== currentProduct.id
        )
        .slice(0, 4);

    if (relatedProducts.length === 0) {
        return null;
    }

    return (
        <section className="related-products">

            <h2>Oxşar məhsullar</h2>

            <div className="related-grid">

                {
                    relatedProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }

            </div>

        </section>
    );
}