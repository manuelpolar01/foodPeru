
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterPeru from './componets/FooterPeru';
import ControlledCarousel from './ControlledCarousel';
import ItemListContainer from './ItemListContainer';
import NavbarRestaurante from './componets/NavbarRestaurante'
import ChiSiamo from './componets/ChiSiamo';
import ItemDetailConteiner from './componets/ItemDetailConteiner';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Menu from './componets/agrego/Menu';
import FruttiDiMareConten from './componets/agrego/FruttiDiMareConten';
import ListCriolla from './componets/agrego/ListCriolla';
import AntipastoConteiner from './componets/agrego/AntipastoConteiner';
import ListaAllagriglia from './componets/agrego/ListaAllagriglia';
import BevandaContainer from './componets/agrego/BevandaContainer';
import Home from './componets/Home';





function App() {

 return (
  <BrowserRouter>
    
    <NavbarRestaurante/>
   

    <Routes>
     <Route  path='/' element={<Home/>}/>
     <Route  path='chi-siamo' element={<ChiSiamo/>}/>
  
        <Route  path='/lista' element={<ItemListContainer greeting ='nostri cibo peruviano'/>} />
        <Route path='/item' element={<ItemListContainer greeting ='nostri cibo peruviano'/>}/>
        <Route  path='/item/:id' element={<ItemDetailConteiner/>} />
  


      <Route path='/menu' element={<Menu/>}/>
      <Route path='/menu/fruttimare' element={<FruttiDiMareConten/>}/>
      <Route path='/menu/fruttimare/:id' element={<ItemDetailConteiner/>}/>

      <Route path='/menu/criolla' element={<ListCriolla/>}/>
      <Route path='/menu/criolla/:id' element={<ItemDetailConteiner/>}/>

      <Route path='/menu/antipasto' element={<AntipastoConteiner/>}/>
      <Route path='/menu/antipasto/:id' element={<ItemDetailConteiner/>}/>

      <Route path='/menu/allagrigia' element={<ListaAllagriglia/>}/>
       <Route path='/menu/allagrigia/:id' element={<ItemDetailConteiner/>}/>
 
       <Route path='/menu/bevande' element={<BevandaContainer/>}/>
       <Route path='/menu/bevande/:id' element={<ItemDetailConteiner/>}/>

  
   </Routes>

   <FooterPeru/>
   
    </BrowserRouter>
 )

}
export default App

