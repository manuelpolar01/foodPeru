import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
  if (!item) {
    console.log(`no hay nada en el getItem ${item}`)
    return <p>cargando los productos...</p>
  }

  const { name, img, description, price } = item

    return (
    <Card   style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Card.Img  style={{width:'100vh', objectFit:'contain'}} variant="top" src={img} alt={name} />
      <Card.Body className='text-center'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>{price}€</p>
        <ItemCount stock={item.stock}/>
      </Card.Body>
    </Card>
  )
}
export default ItemDetail
