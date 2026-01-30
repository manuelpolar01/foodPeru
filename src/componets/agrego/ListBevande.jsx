import React from 'react'
import Bevanda from './Bevanda'

const ListBevande = ({data}) => {
    console.log(data)
  return (
    <div className='item-list'>
      {data.map(item=>(<Bevanda key={item.id} item={item}/>))}
    </div>
  )
}

export default ListBevande
