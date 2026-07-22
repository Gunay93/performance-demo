import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/products-api";


export default function useProduct(
    id: string
){

    return useQuery({

        queryKey:[
            "product",
            id
        ],

        queryFn:() =>
            getProductById(id),

        enabled: !!id

    });

}