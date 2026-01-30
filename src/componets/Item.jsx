
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

 



const Item = ({ card }) => {
  const { name, price, description, img ,id} = card
  if(!card){
    return <p>esta caragdo el props</p>
  }

  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top"  src={img} alt={name} />
      <Card.Body style={{textAlign:'center'}}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>{price}€</p>
        <Link className=' btn btn-primary' to={`/item/${id}`}>ver mas</Link>
      </Card.Body>
    </Card>
  )
}

export default Item
