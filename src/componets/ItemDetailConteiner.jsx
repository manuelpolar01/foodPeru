import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
//import { getItem } from '../mock/asyncMock'
import { Link, useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import FoodSpinner from './FoodSpinner'




const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const {id}= useParams()
  const [invalid,setInvalid]=useState(null)

//fiberbase
useEffect(()=>{


  const productCollection = collection(db, "productos")

  const docRef = doc(productCollection, id)

  getDoc(docRef)
  .then((res)=>{
    if(res.data()){
      //si existe ,guardar la data
      setItem({id:res.id, ...res.data()})
      console.log('esta guardando la compra',res)
    }
    else{
      // si no existe , mostrar un mensaje ERROR
      setInvalid(true)
    }
  })
  .catch((error)=>console.log(error))
  .finally(()=>setLoading(false))
},[])


//useEffect(() => {
  //  const fetchItem = async () => {
    //    try {
      //      const res = await getItem(id)
      //      console.log('Resultado getItem:', res)
      //      setItem(res)
      //    } catch (error) {
        //      console.error('Error al obtener el item:', error)
  //    } finally {
    //      setLoading(false)
    //    }
    //  }
    //
    //  fetchItem()
    //},[id])

    if(invalid){
      return(
        <div>
          <h2>el producto no existe</h2>
          <Link className='btn btn-dark' to='/'>volver a home</Link>
        </div>
      )   
    }
    
    

  return (
    <div>
     { loading? <FoodSpinner/> :<ItemDetail  item={item} id={id}/>}
      
    </div>
  )
}

export default ItemDetailContainer
