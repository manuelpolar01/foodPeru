import React, { useEffect, useState } from 'react'
import { getProducts } from '../../mock/asyncMock'
import ItemListFruttiM from './ItemListFruttiM.jsx'




const FruttiDiMareConten = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    const getFruttiMare = async () => {
      try {
        const res = await getProducts()
        const response = res.filter(
          item => item.category === 'Frutti di mare'
        )
        setData(response)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    getFruttiMare()
  }, [])

  if (error) return <p>No hay datos en frutti di mare</p>
  if (loading) return <p>Cargando Frutti di Mare...</p>
  return (
    <div>
    
<ItemListFruttiM data={data}/>
        
    </div>
  )
}

export default FruttiDiMareConten
