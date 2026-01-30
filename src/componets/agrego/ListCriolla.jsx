import React from 'react'
import useCucinaCreola from './useCucinaCreola'
import Criolla from './criolla'


const ListCriolla = () => {
    const {data, error, loading}= useCucinaCreola()
    if(loading){
        return <p>cargando criollo</p>
    }
    if(error){
        return <p>error</p>
    }
console.log('data criolla:', data)
  return (
    <div className="item-list">
      {data.map(item=>(<Criolla key={item.id} item={item}/>))}
    </div>
  )
}

export default ListCriolla
