import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import LoaderComponet from "./LoaderComponet";
import { getProducts } from "../mock/AsyncMock";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
  
    getProducts(categoryId)
      .then((res) => setProducts(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div style={{ marginTop: "120px" }}>
      <h2 style={{ textAlign: "center" }}>
        {greeting} {categoryId && <span>{categoryId}</span>}
      </h2>
      {loading ? <LoaderComponet /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
