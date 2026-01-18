import React from 'react'
import Item from './Item'
import '../css/ItemList.css'

const ItemList = ({ product }) => {
  return (
    <div className="item-list">
      {product.map((cad) => (
        <Item key={cad.id} card={cad} />
      ))}
    </div>
  )
}

export default ItemList
