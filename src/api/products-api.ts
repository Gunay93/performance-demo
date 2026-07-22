import type { ApiProduct } from "../types/api-product";
import { productAdapter } from "../adapters/product-adapter";


export async function getProducts(){

    const response =
        await fetch(
            "https://dummyjson.com/products"
        );


    if(!response.ok){

        throw new Error(
            "Products fetch failed"
        );

    }

    const data =
        await response.json();


    return data.products.map(
        (product: ApiProduct) =>
            productAdapter(product)
    );

}
export async function getProductById(
    id: string
) {
    const response =
        await fetch(
            `https://dummyjson.com/products/${id}`
        );
    if(!response.ok){
        throw new Error(
            "Product not found"
        );
    }
    const data =
        await response.json();
    return productAdapter(data as ApiProduct);
}