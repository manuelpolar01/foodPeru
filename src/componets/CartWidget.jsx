import { useContext } from "react"
import { Badge } from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import { GiMeal } from "react-icons/gi"


const CartWidgetReact =()=>{
    const{cartQuantity} =useContext(CartContext)
    
    return(
        <div>
            {cartQuantity()>0 && <Badge bg="danger">{cartQuantity()}</Badge>}
          <span><GiMeal fontSize={'1.8rem'} /></span>
          </div>
    )
}
export default CartWidgetReact


