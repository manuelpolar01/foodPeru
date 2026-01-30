import React, { useEffect, useState } from 'react'
import { getProducts } from './mock/asyncMock'
import ItemList from './componets/ItemList'
import FoodSpinner from './componets/FoodSpinner'

const ItemListContainer = ({greeting}) => {
const[product,setProduct]=useState([])
const [loading, setLoading] = useState(true)


useEffect(() => {
  getProducts()
    .then((res) => setProduct(res))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
}, [])

return (
  <div style={{ marginTop: '120px' }}>
  <h2 style={{textAlign:'center'}}>{greeting}</h2>
  {loading ? <FoodSpinner /> : <ItemList product={product} />}
</div>

)

}

export default ItemListContainer
 	