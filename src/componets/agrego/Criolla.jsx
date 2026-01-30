
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Criolla = ({item}) => {
const {name, img,description,price,id} = item


console.log(item)
  return (
    <div>
         <Card style={{ width: '18rem'}}>
        <Card.Img variant="top"  src={img} alt={name} />
        <Card.Body style={{textAlign:'center'}}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>{price}€</p>
       <Link className=' btn btn-primary' to={`/menu/criolla/${id}`}>aggiungere al carrello</Link>
      </Card.Body>
    </Card>
    
    </div>
  )
}

export default Criolla
