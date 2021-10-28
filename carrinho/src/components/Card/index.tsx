import { useContext } from 'react'
import { CartContext } from '../../provider/Cart'
import './style.css'
interface Product{
   product:{
    id:number,
    title:string,
    price:number,
    image:string,
    description:string
    }
   type?:string
}
const Card = ({ product, type }:Product) =>{
    const {addToCart, removeFromCart} = useContext(CartContext)
    return(
        <div className='card-container'>
            <img src={product.image}/>
            <p>{product.title}</p>
            <p>R${product.price}</p>
            {!type ?
             (
                <button className='add-button'onClick={()=>addToCart(product)}>Adicionar</button>
             ):
             (
                <button  className='remove-button'onClick={()=>removeFromCart(product)}>Remover</button>
             ) 
            }
        </div>
    )
} 

export default Card