import { create } from "zustand";
import type { Product } from "../types/product";
import type { CartItem } from "../types/cart";
import { persist } from "zustand/middleware";

type CartStore = {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    totalPrice: () => number;
};

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            cart: [],

            addToCart: (product) =>
                set((state) => {
                    //     cart: [...state.cart, id],
                    const existingCartItem = state.cart.find(
                        item => item.id === product.id
                    )
                    if (existingCartItem) {
                        return {
                            cart: state.cart.map(
                                item => item.id === product.id ?
                                    {
                                        ...item,
                                        quantity: item.quantity + 1
                                    }
                                    : item
                            )
                        }
                    }
                    return {
                        cart: [
                            ...state.cart,
                            {
                                ...product,
                                quantity: 1
                            }
                        ]
                    };
                }),

            removeFromCart: (id) =>
                set((state) => ({
                    cart: state.cart.filter(
                        item => item.id !== id
                    ),
                })),

            increaseQuantity: (id) =>
                set((state) => ({
                    cart: state.cart.map(item =>
                        item.id === id
                            ? {
                                ...item,
                                quantity: item.quantity + 1
                            }
                            : item
                    )
                })),
            decreaseQuantity: (id) =>
                set((state) => {
                    const item = state.cart.find(
                        item => item.id === id
                    );
                    if (item?.quantity === 1) {
                        return {
                            cart: state.cart.filter(
                                item => item.id !== id
                            )
                        }
                    }
                    return {
                        cart: state.cart.map(item =>
                            item.id === id
                                ? {
                                    ...item,
                                    quantity: item.quantity - 1
                                }
                                : item
                        )
                    }
                }),
            totalPrice: () =>
                get().cart.reduce(
                    (total, item) =>
                        total + item.price * item.quantity,
                    0
                )
        }),
        {
            name: "web-cart-storage"
        }
    ))
