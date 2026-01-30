import React from 'react'
import ItemSoloMare from './itemSoloMare'




const ItemListFruttiM = ({data}) => {


  return (
    <div>
      <h2>piatti con frutti di mare</h2>
    <div className="item-list">   
     {data.map(item=>(
      <ItemSoloMare key={item.id} item={item}/>
     ))}
    </div>

    </div>
  )
}

export default ItemListFruttiM
