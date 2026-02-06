//este componente ha sido creado solo para subir productos mediante un productsservice.js
import { useState } from "react";
import { uploadProducts } from "../service/productsService";
// import { products } from "../products"; // ya no hace falta
import { getProducts } from "../mock/asyncMock";

function Subir() {
  const [uploaded, setUploaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!window.confirm("¿Seguro que deseas subir los productos?")) return;

    setLoading(true);
    try {
      const products = await getProducts(); // obtenemos los productos del mock
      await uploadProducts(products);
      alert("Productos subidos correctamente ✅");
      setUploaded(true);
    } catch (error) {
      console.error(error);
      alert("Error al subir productos ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>ADMIN – SUBIR PRODUCTOS</h1>

      {!uploaded && (
        <button
          className="btn btn-danger"
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? "Subiendo..." : "Subir productos"}
        </button>
      )}

      {uploaded && <p>Todos los productos ya fueron subidos ✅</p>}
    </div>
  );
}

export default Subir;
