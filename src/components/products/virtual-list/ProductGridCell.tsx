import ProductCard from "../ProductCard";
import type { Product } from "../../../types/product";
import type { CSSProperties } from "react";


type GridCellProps = {
    filteredProducts: Product[];
    columnCount: number
};


export default function ProductGridCell(
    {
        filteredProducts,
        columnCount,
        columnIndex,
        rowIndex,
        style
    }: GridCellProps & {
        columnIndex: number;
        rowIndex: number;
        style: CSSProperties;
    }
) {




    const index =
        rowIndex * columnCount + columnIndex;


    const product = filteredProducts[index];


    if (!product) {
        return null;
    }


    return (
        <div
            style={{
                ...style,
                padding: "0 10px 20px 10px",
                boxSizing: "border-box",
            }}>
            <ProductCard
                product={product}
            />
        </div>
    );
}