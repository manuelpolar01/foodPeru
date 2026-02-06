import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../css/CartView.css";

const CartView = () => {
  const { cart, removeItem, cartTotal, clear } = useContext(CartContext);

  const preConfirmation = () => {
    Swal.fire({
      title: "Sei sicuro di cancellare tutto il carrello?",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
      }
    });
  };

  return (
    <div className="cart-container">
      <h2>Il tuo Carrello</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">Il carrello è vuoto 😢</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img src={item.img} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>Quantità: {item.quantity}</p>
                  <p>Prezzo unitario: {item.price},00 €</p>
                  <p>
                    Prezzo finale: {item.price * item.quantity},00 €
                  </p>
                </div>
                <button
                  className="btn btn-danger cart-remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Totale: {cartTotal()},00 €</h3>
            <div className="cart-actions">
              <button className="btn btn-danger" onClick={preConfirmation}>
                Cancella tutto
              </button>
              <Link className="btn btn-success" to="/checkout">
                Finalizza Acquisto
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartView;
