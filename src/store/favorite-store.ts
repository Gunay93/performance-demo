import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";


type FavoriteStore = {
    favorites: Product[];
    addToFavorite: (product: Product) => void;
    removeFromFavorite: (id: number) => void;
    toggleFavorite: (product: Product) => void;
    isFavorite: (id: number) => boolean;

};
export const useFavoriteStore = create<FavoriteStore>()(
    persist(

        (set, get) => ({

            favorites: [],


            addToFavorite: (product) =>
                set(state => ({

                    favorites: [
                        ...state.favorites,
                        product
                    ]

                })),



            removeFromFavorite: (id) =>
                set(state => ({

                    favorites:
                        state.favorites.filter(
                            item => item.id !== id
                        )

                })),
            toggleFavorite: (product) => {

                const exists =
                    get().favorites
                        .some(
                            item =>
                                item.id === product.id
                        );


                if (exists) {

                    set(state => ({
                        favorites:
                            state.favorites.filter(
                                item =>
                                    item.id !== product.id
                            )
                    }));

                } else {

                    set(state => ({
                        favorites: [
                            ...state.favorites,
                            product
                        ]
                    }));

                }

            },
            isFavorite: (id) =>
                get()
                    .favorites
                    .some(
                        item => item.id === id
                    )

        }),


        {
            name: "web-favorite-storage"
        }

    )

);