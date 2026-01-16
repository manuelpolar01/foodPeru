import React from 'react'
import { Badge } from 'react-bootstrap';
import { GiMeal } from "react-icons/gi";


const CartWidget = () => {
  return (
    <div>
      <span><GiMeal fontSize={'1.8rem'} /></span>
      <Badge bg='primary'>5</Badge>
    </div>
  )
}

export default CartWidget
