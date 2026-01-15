import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './css/NavbarRestaurante.css';
import CartWidget from './componets/CartWidget';

function NavbarRestaurante() {
  return (
    <Navbar expand="md" fixed="top" className="navbar-peruano">
      <Container>
        {/* Logo / Nombre */}
        <Navbar.Brand href="#inicio" className="brand-peruano">
          Sabor Criollo
        </Navbar.Brand>

        {/* Botón hamburguesa */}
        <Navbar.Toggle aria-controls="navbar-peruano" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="navbar-peruano">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#menu">Menú</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>

            {/* Botón reserva */}
            <Button className="btn-reserva ms-md-3 mt-3 mt-md-0">
              Reservar Mesa
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
    
  );
}
  

export default NavbarRestaurante;
