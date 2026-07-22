import type { Product } from "../types/product";

export const products: Product[] = Array.from(
    { length: 10000 },
    (_, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
        price: Math.floor(Math.random() * 500),
        category: i % 2 === 0
            ? "Electronics"
            : "Fashion",
        image: `https://picsum.photos/300?random=${i + 1}`,
        description:
            "High-quality product designed for everyday use. It offers excellent durability, modern design, and reliable performance."
    })
);