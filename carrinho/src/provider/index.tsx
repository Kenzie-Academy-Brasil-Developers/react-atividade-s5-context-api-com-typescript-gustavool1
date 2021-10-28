import { CartProvider } from "./Cart";
import { ReactNode } from "react";
import { ProductsProvider } from "./Products";
interface ProvidersProps{
    children: ReactNode
}
const Providers = ({children}: ProvidersProps) =>{
    return(
        <ProductsProvider>
            <CartProvider>
                { children }
            </CartProvider>
        </ProductsProvider>
    )
}

export default Providers