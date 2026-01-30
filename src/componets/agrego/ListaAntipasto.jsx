import React from 'react'
import { Card, CardTitle } from 'react-bootstrap'
import Antipasti from './Antipasti'

const ListaAntipasto = ({data}) => {

  return (
    <div className="item-list">
    {data.map( item=><Antipasti key={item.id} item ={item}/>)}
    </div>
  )
}

export default ListaAntipasto
