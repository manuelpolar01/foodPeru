
import './App.css'
import FooterPeru from './componets/FooterPeru';
import ControlledCarousel from './ControlledCarousel';
import ItemListContainer from './ItemListContainer';
import NavbarRestaurante from './componets/NavbarRestaurante'
import 'bootstrap/dist/css/bootstrap.min.css';
import ChiSiamo from './componets/ChiSiamo';
import ItemCount from './componets/ItemCount';
import FoodSpinner from './componets/FoodSpinner';
import Borrar from './ejemplo en java/Borrar';








function App() {



  return (
    <>

  {/*<Borrar/>*/}
  <NavbarRestaurante/>
  <ItemListContainer greeting ='nostri cibo peruviano'/>
  <ItemCount stock={15}/>
  <ControlledCarousel/>
  <ChiSiamo/>
  <FooterPeru/>


    </>
  )

}

export default App
