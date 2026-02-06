//importamos el hock para utilizar el contexto
import {useContext, useState}from 'react'
import ItemCount from './ItemCount'
//importar el contexto que queremos utrilixar
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({detail}) => {
  const[purchase,setPurchase]=useState(false)
  //al hoook en el parametro le pasamos el contexto que querenmo utilzar
  const {cart,addToCart} =useContext(CartContext)

const onAdd = (cantidad) => {
  console.log("Detalle del producto que voy a agregar:", detail); // ✅ revisar que tenga id, name, price
  addToCart(detail, cantidad);
  console.log("Carrito después de agregar:", cart); // ❌ ojo: cart no se actualiza de inmediato
  setPurchase(true);
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: `Agregaste ${detail.name} al carrito`,
    showConfirmButton: false,
    timer: 1000,
  });
};


  return (
    <div style={{display:'flex',justifyContent:'center', flexDirection:'column', alignItems:'center',marginTop:'70px'}}>
      <h1>{detail.name}</h1>
      <img style={{width:'20rem',height:'20rem'}} src={detail.img} alt={detail.name}/>
     
      <p>stock: {detail.stock}unidades</p>
      <p>price:{detail.price},00</p>
      {purchase?
      <div style={{display:'flex', width:'80%',alignItems:'center',justifyContent:'space-between'}}>
           <Link className='btn btn-dark' to='/menu'> seguir comprando</Link>
           <Link className='btn btn-dark' to='/cart'> ir al carrito</Link>
      </div>
      :<ItemCount stock={detail.stock} onAdd ={onAdd}/>}
    </div>
  )
}

export default ItemDetail

