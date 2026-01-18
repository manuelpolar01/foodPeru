import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Item = ({ card }) => {
  const { name, price, description, img } = card

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>{price}€</p>
        <Button variant="primary">ver mas</Button>
      </Card.Body>
    </Card>
  )
}

export default Item
