import { Grid } from "react-window";
import ProductGridCell from "./ProductGridCell";
import type { Product } from "../../../types/product";
import { useMemo } from "react";
import "../../../assets/css/ProductList.css";
import type { CategoryType, SortType } from "../../../types/filter";
import useWindowSize from "../../../hooks/useWindowSize";
import useProducts from "../../../hooks/useProducts";
import Loader from "../../Loader";
type Props = {
    search: string;
    category: CategoryType;
    sort: SortType,
    minPrice: number | null;
    maxPrice: number | null;
};

export default function VirtualProductList({ search, category, sort, minPrice, maxPrice }: Props) {
    const {
        data: products = [],
        isLoading,
        error
    } = useProducts();
    const width = useWindowSize();
    const filteredProducts = useMemo(() => {
        const query = search.toLowerCase();
        return [...products]
            .filter(product =>
                product.name
                    .toLowerCase()
                    .includes(query)
            )
            .filter(product =>
                category === "All" ||
                product.category === category
            )
            .filter(product =>
                (minPrice === null || product.price >= minPrice) &&
                (maxPrice === null || product.price <= maxPrice)
            )
            .sort((a, b) =>
                sort === "asc"
                    ? a.price - b.price
                    : sort === "desc"
                        ? b.price - a.price
                        : 0
            );

    }, [products, search, category, sort, minPrice, maxPrice]);
    const columnCount =
        width < 600
            ? 1
            : width < 900
                ? 2
                : width < 1200
                    ? 3
                    : 4;
    const columnWidth =
        width < 600
            ? width - 40
            : 250;
    if (isLoading) {

        return <Loader />;

    }
    if (error) {

        return (
            <div>
                Something went wrong
            </div>
        );

    }
    if (filteredProducts.length === 0) {
        return (
            <div className="no-products">
                <h2>Məhsul tapılmadı</h2>
                <p>
                    Axtarış və ya filterləri dəyişərək yenidən cəhd edin.
                </p>
            </div>
        );
    }
    return (

        <div className="list-container">
            <Grid<{ filteredProducts: Product[], columnCount: number }>
                cellComponent={ProductGridCell}

                cellProps={{
                    filteredProducts,
                    columnCount
                }}

                columnCount={columnCount}

                columnWidth={columnWidth}

                rowCount={
                    Math.ceil(filteredProducts.length / columnCount)
                }

                rowHeight={330}
                defaultHeight={1000}
                defaultWidth={1000}
            />
        </div>

    );
}