import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import FoodSpinner from "./FoodSpinner";
import { getItem } from '../mock/asyncMock'

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [invalid, setInvalid] = useState(false);
  const { id } = useParams(); // viene de la ruta: /item/:itemId

  useEffect(() => {

    getItem(id)
      .then((res) => {
        if (res) setDetail(res);
        else setInvalid(true);
      })
      .catch(() => setInvalid(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (invalid)
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>El producto no existe</h2>
        <Link className="btn btn-dark" to="/">Volver a Home</Link>
      </div>
    );

  return <div>{loading ? <FoodSpinner /> : <ItemDetail detail={detail} />}</div>;
};

export default ItemDetailContainer;
