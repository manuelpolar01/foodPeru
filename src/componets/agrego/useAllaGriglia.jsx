import React, { useEffect, useState } from 'react'
import { getProducts } from '../../mock/asyncMock'

const useAllaGriglia = () => {
    const [data,setData]= useState([])
        const[error,setError]= useState(null)
        const[loading,setLoading]=useState(true)
useEffect(()=>{
 const getAllagriglia= async () => {
    try {
        const response = await getProducts()
        const res = await response.filter(item => item.category==='Alla griglia')
        setData(res)
        
    } catch (error) {
        setError(error)
        
    }
    finally{
        setLoading(false)
    }
    
 }
 getAllagriglia()
 console.log(Date)



},[])
    
    
  return {data,error,loading}
}

export default useAllaGriglia
