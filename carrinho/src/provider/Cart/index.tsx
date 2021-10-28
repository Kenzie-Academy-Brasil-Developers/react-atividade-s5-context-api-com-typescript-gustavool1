import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from 'react-toastify'
interface Product{
    id:number,
    title:string,
    price:number,
    image:string
}
interface CartProviderProps{
    children:ReactNode;
}
interface CartProviderData{
    cart: Product[];
    addToCart: (product:Product) => void;
    removeFromCart: (product:Product) => void;
}
export const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({children}:CartProviderProps) =>{
    toast.configure()
    const [ cart, setCart ] = useState <Product[]>([])
    const addToCart = ( product :Product) =>{
        const newCart = cart.filter((item)=> item.id === product.id)
        if(newCart.length === 0){
            setCart([...cart, product])
        }else{
            toast.error('Impossível adicionar itens duplicados')
        }
    }

    const removeFromCart = (product:Product) =>{
        const newCart = cart.filter((item)=> item.id !== product.id)
        setCart(newCart)
    }
    return(
        <CartContext.Provider value={{addToCart, removeFromCart, cart}}>
            { children }
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext)