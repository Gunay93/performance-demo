import {
    createContext,
    useContext,
    useState
} from "react";
import type { ReactNode } from "react";

type CartContextType = {
    cart: number[];
    addToCart: (id:number)=>void;
};


const CartContext = createContext<CartContextType | null>(null);


export function CartProvider({
    children
}: {
    children: ReactNode
}) {

    const [cart, setCart] = useState<number[]>([]);


    const addToCart = (id:number)=>{

        setCart(prev => [
            ...prev,
            id
        ]);

    };


    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}



export function useCart(){

    const context = useContext(CartContext);

    if(!context){
        throw new Error(
            "useCart must be inside CartProvider"
        );
    }

    return context;
}