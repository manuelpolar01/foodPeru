import React from 'react'
import useCucinaCreola from './useCucinaCreola'
import Criolla from './criolla'
import FoodSpinner from '../FoodSpinner'


const ListCriolla = () => {
    const {data, error, loading}= useCucinaCreola()
    if(loading){
        return <p><FoodSpinner/></p>
    }
    if(error){
        return <p>error</p>
    }

  return (
    <div style={{padding:'1rem'}}>
      <h2> piatti criollo</h2>
    <div className="item-list">
      {data.map(item=>(<Criolla key={item.id} item={item}/>))}
    </div>


    </div>
  )
}

export default ListCriolla
