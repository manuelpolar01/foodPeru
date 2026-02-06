import React from 'react'
import { Card, CardTitle } from 'react-bootstrap'
import Antipasti from './Antipasti'

const ListaAntipasto = ({data}) => {

  return (
    <div style={{padding:'1rem'}}>
      <h2> Piatti come antipasti</h2>
    <div  className="item-list">
    {data.map( item=><Antipasti key={item.id} item ={item}/>)}
    </div>


    </div>
  )
}

export default ListaAntipasto
