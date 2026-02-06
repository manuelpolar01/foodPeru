import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ItemSoloMare = ({ item }) => {
  const { name, img, description, price, id } = item

  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img style={{height:'20rem',width:'20rem'}} variant="top" src={img} alt={name} />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>{price}€</p>

        {/* ✅ Solo un Link, sin nested <a> */}
        <Link className="btn btn-primary" to={`/item/${id}`}>
         quantita
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ItemSoloMare;
