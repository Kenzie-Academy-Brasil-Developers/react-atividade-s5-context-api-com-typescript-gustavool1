import { useContext } from "react"
import { ProductContext } from "../../provider/Products"
import Card from "../Card"
import './style.css'
const ProductList = () =>{
    const { products } = useContext(ProductContext) 
    return(
        <div className='productList-container'>
            <h1>Produtos</h1>
            <ul>
                {products.map((product, index)=>(
                    <li key={ index }>
                        <Card product={ product }/>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductList