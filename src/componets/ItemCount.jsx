import React, { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <div style={styles.counterBox}>
        <button
          onClick={decrement}
          disabled={count <= 1}
          style={{
            ...styles.button,
            opacity: count <= 1 ? 0.5 : 1,
          }}
        >
        <FaTrashCan/>
        </button>

        <span style={styles.count}>{count}</span>

        <button
          onClick={increment}
          disabled={count >= stock}
          style={{
            ...styles.button,
            opacity: count >= stock ? 0.5 : 1,
          }}
        >
          +
        </button>
      </div>

      <button
        onClick={() => onAdd(count)}
        style={styles.addButton}
        disabled={stock === 0}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    gap: "10px",
    width: "220px",
    fontFamily: "Arial, sans-serif",
  },
  counterBox: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #eeff00",
    borderRadius: "8px",
    overflow: "hidden",
    width: "120px",
  },
  button: {
    width: "36px",
    height: "36px",
    border: "none",
    backgroundColor: "#F0F2F2",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
  },
  count: {
    width: "48px",
    textAlign: "center",
    fontSize: "16px",
  },
  addButton: {
    backgroundColor: "#FFD814",
    border: "1px solid #FCD200",
    borderRadius: "20px",
    padding: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default ItemCount;
