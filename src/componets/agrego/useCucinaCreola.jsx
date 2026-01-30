import React, { useEffect, useState } from 'react'
import { getProducts } from '../../mock/asyncMock'


const useCucinaCreola = () => {
    const[data,setData]=useState([])
     const[loading,setLoading]= useState(true) 
     const[error,setError]= useState(null) 
   
     
     useEffect(()=>{
        const getCriolla = async () => {
            
            try {
                const res = await getProducts()
                const response = await res.filter(item=>item.category === 'Cucina creola')
                setData(response)                
            } catch (error) {
                setError(error)
                
            }
            finally{
                setLoading(false)
            }
        }
        getCriolla()
     },[])
 

  return {data,error,loading}
}

export default useCucinaCreola
