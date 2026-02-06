import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CheckoutHookForm = () => {
  const [orderId, setOrderId] = useState('');
  const { cart, cartTotal, clear } = useContext(CartContext);
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const finalizarCompra = (dataDelForm) => {
    const orden = {
      buyer: {
        name: dataDelForm.name,
        address: dataDelForm.address,
        email: dataDelForm.email
      },
      compras: cart,
      total: cartTotal(),
      date: serverTimestamp()
    };
    const ventas = collection(db, "orders");

    addDoc(ventas, orden)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((error) => console.log(error));
  };

  // Estilos
  const containerStyle = {
    maxWidth: '500px',
    margin: '3rem auto',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    backgroundColor: '#fff'
  };

  const inputStyle = {
    marginBottom: '1rem',
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '100%',
    fontSize: '1rem'
  };

  const errorStyle = { color: 'red', fontSize: '0.9rem', marginBottom: '0.5rem' };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    backgroundColor: '#28a745',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    width: '100%'
  };

  const titleStyle = { textAlign: 'center', marginBottom: '1.5rem', color: '#343a40' };

  return (
    <div style={containerStyle}>
      {orderId ? (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#28a745' }}>¡Orden Generada con Éxito!</h2>
          <p>ID de seguimiento: <strong>{orderId}</strong></p>
          <Link className='btn btn-dark' to='/'>Volver al Home</Link>
        </div>
      ) : (
        <>
          <h1 style={titleStyle}>Complete sus datos</h1>
          <form onSubmit={handleSubmit(finalizarCompra)}>
            <input
              style={inputStyle}
              type="text"
              placeholder='Nombre completo'
              {...register("name", { required: true, minLength: 5 })}
            />
            {errors?.name?.type === 'required' && <span style={errorStyle}>Ingrese su nombre</span>}
            {errors?.name?.type === 'minLength' && <span style={errorStyle}>Mínimo 5 caracteres</span>}

            <input
              style={inputStyle}
              type="text"
              placeholder='Dirección'
              {...register("address", { required: true, minLength: 5, maxLength: 50 })}
            />
            {errors?.address?.type === 'required' && <span style={errorStyle}>Ingrese su dirección</span>}
            {errors?.address?.type === 'minLength' && <span style={errorStyle}>Mínimo 5 caracteres</span>}
            {errors?.address?.type === 'maxLength' && <span style={errorStyle}>Máximo 50 caracteres</span>}

            <input
              style={inputStyle}
              type="email"
              placeholder='Correo electrónico'
              {...register("email", { required: true })}
            />
            {errors?.email?.type === 'required' && <span style={errorStyle}>Ingrese su correo</span>}

            <input
              style={inputStyle}
              type="email"
              placeholder='Confirme su correo'
              {...register("email2", { required: true, validate: value => value === getValues("email") })}
            />
            {errors?.email2?.type === 'required' && <span style={errorStyle}>Confirme su correo</span>}
            {errors?.email2?.type === 'validate' && <span style={errorStyle}>Los correos no coinciden</span>}

            <button style={buttonStyle} type='submit'>Finalizar Compra</button>
          </form>
        </>
      )}
    </div>
  );
};

export default CheckoutHookForm;
