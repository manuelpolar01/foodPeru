import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getItem } from '../mock/asyncMock'
import { useParams } from 'react-router-dom'




const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const {id}= useParams()



  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await getItem(id)
        console.log('Resultado getItem:', res)
        setItem(res)
      } catch (error) {
        console.error('Error al obtener el item:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchItem()
  },[id])

  if (loading) return <p>Cargando...</p>

  return (
    <div>
      <ItemDetail  item={item} id={id}/>
      
    </div>
  )
}

export default ItemDetailContainer
