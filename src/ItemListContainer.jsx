import './css/ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="main-content">
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
