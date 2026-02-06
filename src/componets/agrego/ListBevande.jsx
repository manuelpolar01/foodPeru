import React from 'react'
import Bevanda from './Bevanda'

const ListBevande = ({data}) => {

  return (
    <div style={{padding:'1px'}}>
      <h2> bevandi</h2>
    <div  className='item-list'>
      {data.map(item=>(<Bevanda key={item.id} item={item}/>))}
    </div>


    </div>
  )
}

export default ListBevande
