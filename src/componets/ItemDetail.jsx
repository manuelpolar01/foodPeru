import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../assets/context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ item }) => {
  const[purchase,setPurchase]=useState(false)
  const{cart,addToCart}=useContext(CartContext)
console.log('esto viene de iemcount',cart)



  const onAdd =(cantidad)=>{
 addToCart(item,cantidad )
 setPurchase(true)
  }


  const { name, img, description, price } = item

    return (
    <Card   style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Card.Img  style={{width:'100vh', objectFit:'contain'}} variant="top" src={img} alt={name} />
      <Card.Body className='text-center'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>{price}€</p>
        {purchase?
        <div style={{display:'flex',justifyContent:'space-between',width:'80%',alignItems:'center'}}>
          <Link className='btn btn-dark' to ='/cart'> vai al carrelo</Link>
          <Link className='btn btn-dark'to ='/menu'> aggiungo altro</Link>

        </div>:<ItemCount stock={item.stock} onAdd={onAdd}/>}
      </Card.Body>
    </Card>
  )
}
export default ItemDetail
