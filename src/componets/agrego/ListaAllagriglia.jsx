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
    <div style={{padding:'1rem'}}>
      <h2>piatti  alla griglia</h2>
    <div className='item-list'>
      {data.map(item=><AllaGriglia key={item.id} item={item}/>)}
    </div>

    </div>
  )
}

export default ListaAllagriglia
