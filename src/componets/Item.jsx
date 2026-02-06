import { Link } from "react-router-dom";

const Item = ({ id, name, price, img }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <Link to={`/item/${id}`} className="btn btn-dark">
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
