
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'


const ItemSoloMare = ({item}) => {
    const{name,img,description,price,id}=item
  

    
   
  
  return (
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body style={{textAlign:'center'}}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>{price}€</p>
        <Link className='btn btn-primary' to ={`/menu/fruttimare/${id}`}> Aggiungi al carrello </Link>
      
      </Card.Body>
    </Card>
  )
}

export default ItemSoloMare
