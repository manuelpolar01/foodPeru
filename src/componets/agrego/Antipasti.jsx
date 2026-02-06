import React from 'react'
import { Card, CardTitle } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Antipasti = ({item}) => {
    const{name,price,description,img ,id}=item

  return (
      <Card style={{ width: '18rem'}}>
        <Card.Img  style={{height:'18rem',width:'18rem'}} variant="top"  src={img} alt={name} />
        <Card.Body style={{textAlign:'center'}}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>{price}€</p>
      <Link className=' btn btn-primary'to ={`/menu/antipasto/${id}`} >quantita</Link>
      </Card.Body>
    </Card>
  )
}

export default Antipasti
