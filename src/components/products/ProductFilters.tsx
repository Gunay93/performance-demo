import type { CategoryType, SortType } from "../../types/filter";
import "../../assets/css/ProductFilter.css";

type Props = {
    category: CategoryType;
    setCategory: (value: CategoryType) => void;
    sort: SortType;
    setSort: (value: SortType) => void;
    minPrice: number | null;
    setMinPrice: (value: number | null) => void;
    maxPrice: number | null;
    setMaxPrice: (value: number | null) => void;
    clearFilters: () => void;
};


export default function ProductFilters({
    category,
    setCategory,
    sort,
    setSort,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    clearFilters
}: Props) {
    return (
        <div className="filters">
            <div className="filter-group">
                <div className="price-inputs">
                    <input
                        type="number"
                        name="min"
                        placeholder="Min"
                        value={minPrice ?? ''}
                        onChange={(e) =>
                            setMinPrice(
                                e.target.value === ""
                                    ? null
                                    : Number(e.target.value)
                            )
                        }
                    />
                    <input
                        type="number"
                        name="max"
                        placeholder="Max"
                        value={maxPrice ?? ''}
                        onChange={(e) =>
                            setMaxPrice(
                                e.target.value === ""
                                    ? null
                                    : Number(e.target.value)
                            )
                        }
                    />
                </div>
            </div>
            <select
                value={category}
                onChange={(e) =>
                    setCategory(e.target.value as CategoryType)
                }
                name="category"
            >

                <option value="All">
                    Bütün kateqoriyalar
                </option>

                <option value="Electronics">
                    Electronics
                </option>

                <option value="Fashion">
                    Fashion
                </option>

            </select>
            <select
                name="sort"
                value={sort}
                onChange={(e) =>
                    setSort(e.target.value as SortType)
                }
            >

                <option value="default">
                    Sırala
                </option>

                <option value="asc">
                    Ucuzdan bahaya
                </option>
                <option value="desc">
                    Bahadan ucuza
                </option>
            </select>
            <button
                className="clear-btn"
                onClick={clearFilters}
            >
                Clear Filters
            </button>
        </div>
    );
}