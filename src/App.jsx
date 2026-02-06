// src/App.jsx
import "./App.css";
import "./css/ItemList.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarRestaurante from "./componets/NavbarRestaurante";
import FooterPeru from "./componets/FooterPeru";
import Menu from "./componets/agrego/Menu";
import FruttiDiMareConten from "./componets/agrego/FruttiDiMareConten";
import ListCriolla from "./componets/agrego/ListCriolla";
import AntipastoContainer from "./componets/agrego/AntipastoContainer";
import ListaAllagriglia from "./componets/agrego/ListaAllagriglia";
import BevandaContainer from "./componets/agrego/BevandaContainer";
import ItemDetailContainer from "./componets/ItemDetailContainer";
import Home from "./componets/Home";
import Cart from "./componets/Cart";
import CheckoutHookForm from "./componets/CheckoutHookForm";

import { CartProvider } from "./context/CartContext";
import ChiSiamo from "./componets/ChiSiamo";
import FooterPeruInfo from "./componets/agrego/FooterPeruInfo";
import Subir from "./componets/Subir";//era solo para subir productos a firebase







function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavbarRestaurante />
        <Routes>
        <Route path="/item/:id" element={<ItemDetailContainer />} />


{/*<Route path="/admin/subir" element={<Subir />} />*/}

          
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/fruttimare" element={<FruttiDiMareConten />} />
          <Route path="/menu/fruttimare/:id" element={<ItemDetailContainer />} />
          <Route path="/menu/criolla" element={<ListCriolla />} />
          <Route path="/menu/criolla/:id" element={<ItemDetailContainer />} />
          <Route path="/menu/antipasto" element={<AntipastoContainer />} />
          <Route path="/menu/antipasto/:id" element={<ItemDetailContainer />} />
          <Route path="/menu/allagrigia" element={<ListaAllagriglia />} />
          <Route path="/menu/allagrigia/:id" element={<ItemDetailContainer />} />
          <Route path="/menu/bevande" element={<BevandaContainer />} />
          <Route path="/menu/bevande/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutHookForm />} />
          <Route path="/contatti" element={<FooterPeruInfo />} />
        </Routes>
        
      </CartProvider>
      <FooterPeru/>
    </BrowserRouter>
  );
}

export default App;
