import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { GiMeal } from "react-icons/gi";

const CartWidget = () => {
  const context = useContext(CartContext);

  return (
 <div className="cart-widget">
  <span><GiMeal fontSize="1.8rem" /></span>

  {context?.cartQuantity() > 0 && (
    <span>{context.cartQuantity()}</span>
  )}
</div>
  )
};

export default CartWidget;
