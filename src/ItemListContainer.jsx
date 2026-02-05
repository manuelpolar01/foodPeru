import React, { useEffect, useState } from 'react'
import { getProducts } from './mock/asyncMock'
import ItemList from './componets/ItemList'
import FoodSpinner from './componets/FoodSpinner'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from './service/firebase'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
const[product,setProduct]=useState([])
const [loading, setLoading] = useState(true)
const{categoryId} =useParams()


//FIREBASE

useEffect(()=>{

//conectamos con nuestra collection    
const productsCollection = categoryId ? query(collection(db,"productos"),where("category","==",categoryId)):collection(db,"productos")
//perdir los documentos
getDocs(productsCollection)
.then((res)=>{
    //limpiar los datos para utilizar
    const list = res.docs.map((doc)=>{ 
        return{ id:doc.id,
                 ...doc.data()
        }
    })
    console.log(list)
    setProduct(list)
})
.catch((error)=>console.log(error))
.finally(()=>setLoading(false))
},[categoryId])
 


//useEffect(() => {
// getProducts()
//   .then((res) => setProduct(res))
//   .catch((error) => console.log(error))
//   .finally(() => setLoading(false))
//}, [])
  

return (
  <div style={{ marginTop: '120px' }}>
  <h2 style={{textAlign:'center'}}>{greeting}</h2>
  {loading ? <FoodSpinner /> : <ItemList product={product} />}
</div>

)

}

export default ItemListContainer
 	