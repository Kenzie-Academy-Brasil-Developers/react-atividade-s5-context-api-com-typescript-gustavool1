import { useContext } from "react"
import { CartContext } from "../../provider/Cart"
import Card from "../Card"
import './style.css'

const CartList = () =>{
    const { cart } = useContext(CartContext)
    return(
        <div className='cart-container'>
                <h1>Carrinho</h1>
            <ul>
                {cart.map((product)=>(
                    <li>
                       <Card type='remove' product={product}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CartList