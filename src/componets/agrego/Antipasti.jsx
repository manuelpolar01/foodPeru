import React from 'react'
import { Card, CardTitle } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Antipasti = ({item}) => {
    const{name,price,description,img ,id}=item

  return (
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top"  src={img} alt={name} />
        <Card.Body style={{textAlign:'center'}}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>{price}€</p>
      <Link className=' btn btn-primary'to ={`/menu/antipasto/${id}`} >aggiungere al carrello</Link>
      </Card.Body>
    </Card>
  )
}

export default Antipasti
