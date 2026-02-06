import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Bevanda = ({item}) => {

   const {name, img,description,price,id} = item


console.log(item)
  return (
    <div>
         <Card style={{ width: '20rem'}}>
        <Card.Img style={{height:'20rem',width:'20rem'}}variant="top"  src={img} alt={name} />
        <Card.Body style={{textAlign:'center'}}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>{price}€</p>
       <Link className=' btn btn-primary' to={`/menu/bevande/${id}`}>quantita</Link>
      </Card.Body>
    </Card>
    
    </div>
  )
}

export default Bevanda
