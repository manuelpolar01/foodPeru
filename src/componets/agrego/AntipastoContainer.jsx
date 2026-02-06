import React, { useEffect, useState } from 'react'
import { Await } from 'react-router-dom'
import { getProducts } from '../../mock/asyncMock'
import ListaAntipasto from './ListaAntipasto'

const AntipastoConteiner = () => {
    const[data,setData]=useState([])
    const[loading,setloading]=useState(true)
    const[error,setError]=useState(null)
useEffect(()=>{

const getAntipasto = async () => {
    try {
        const res = await getProducts()
        const responde = await res.filter(item =>item.category === 'Antipasti')  
        setData(responde)      
    } catch (error) {
        setError(error)
        
    }
    finally{
        setloading(false)
    }
    
}
getAntipasto()


},[])
if(loading){
    return <p>cargando antipasti...</p>
}
if (error){
    return <p>error</p>
}

  return (
    <div>
    <ListaAntipasto data={data}/>
    </div>
  )
}

export default AntipastoConteiner
