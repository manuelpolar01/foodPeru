import React from 'react'
import useAllaGriglia from './useAllaGriglia'
import AllaGriglia from './AllaGriglia'

const ListaAllagriglia = () => {
    const{data,loading,error}= useAllaGriglia()
    if(loading){
        return <p>cargando</p>
    }
    if(error){
        return <p>error</p>
    }
  return (
    <div className='item-list'>
      {data.map(item=><AllaGriglia key={item.id} item={item}/>)}
    </div>
  )
}

export default ListaAllagriglia
