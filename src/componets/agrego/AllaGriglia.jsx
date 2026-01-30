import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AllaGriglia = ({item}) => {
const{name,description,img,price,id}=item
  return (
    <div>
        <Card style={{ width: '18rem'}}>
      <Card.Img variant="top"  src={img} alt={name} />
      <Card.Body style={{textAlign:'center'}}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>{price}€</p>
        <Link className=' btn btn-primary' to={`/menu/allagrigia/${id}`}>ver mas</Link>
      </Card.Body>
    </Card>
    </div>
  )
 
}

export default AllaGriglia
