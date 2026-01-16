
import './App.css'
import FooterPeru from './componets/FooterPeru';
import ControlledCarousel from './ControlledCarousel';

import ItemListContainer from './ItemListContainer';
import NavbarRestaurante from './componets/NavbarRestaurante'
import 'bootstrap/dist/css/bootstrap.min.css';
import ChiSiamo from './componets/ChiSiamo';







function App() {



  return (
    <>
  <NavbarRestaurante/>
  <ItemListContainer greeting ='nostri cibo peruviano'/>
  <ControlledCarousel/>
  <ChiSiamo/>
  <FooterPeru/>

    </>
  )

}

export default App
