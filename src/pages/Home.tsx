import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchBar from "../components/products/SearchBar";
import VirtualProductList from "../components/products/virtual-list/VirtualProductList";
import ProductFilters from "../components/products/ProductFilters";
import type { CategoryType, SortType } from "../types/filter";
import useDebounce from "../hooks/useDebounce";

export default function Home() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState<CategoryType>("All");
    const [sort, setSort] = useState<SortType>("default");
    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);
    const debouncedSearch = useDebounce(search, 300);
    const clearFilters = () => {
        setSearch("");
        setCategory("All");
        setSort("default");
        setMinPrice(null);
        setMaxPrice(null);
    };
    return (
        <>
            <HeroBanner />
            <SearchBar
                value={search}
                onChange={setSearch}
            />
            <ProductFilters
                category={category}
                setCategory={setCategory}
                sort={sort}
                setSort={setSort}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                clearFilters={clearFilters}
            />
            <VirtualProductList
                search={debouncedSearch}
                category={category}
                sort={sort}
                minPrice={minPrice}
                maxPrice={maxPrice}
            />
        </>
    );
}