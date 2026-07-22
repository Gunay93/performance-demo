import type { ApiProduct } from "../types/api-product";
import type { Product } from "../types/product";


export function productAdapter(
    product: ApiProduct
): Product {

    return {
        id: product.id,
        name: product.title,
        price: product.price,
        category: product.category,
        image: product.thumbnail,
        description: product.description
    };

}