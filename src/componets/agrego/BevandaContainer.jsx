import { useEffect, useState } from "react"
import { getProducts } from "../../mock/asyncMock"
import ListBevande from "./ListBevande"

const BevandaContainer = () => {
        const[data,setData]=useState([])
        const[loading,setloading]=useState(true)
        const[error,setError]=useState(null)

        useEffect(()=>{
            const getBevande = async () => {
                try {
                    const res = await getProducts()
                    const responde = await res.filter(item =>item.category === 'Bevande')  
                    setData(responde)      
                } catch (error) {
                    setError(error)
                    
                }
                finally{
                    setloading(false)
                }
                
            }
            getBevande()



        },[])
if(error){
    return <p> error</p>
}
if(loading){
    return <p>cargando las bebida</p>
}

  return (
    <div>
       <ListBevande data={data}/>
    </div>
  )
}

export default BevandaContainer
