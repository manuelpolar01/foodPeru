import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../css/NavbarRestaurante.css';
import CartWidget from './CartWidget';

function NavbarRestaurante() {
  return (
    <Navbar expand="md" fixed="top" className="navbar-peruano">
      <Container>
        {/* Logo / Nome */}
        <Navbar.Brand href="#inizio" className="brand-peruano">
          Sabor Criollo
        </Navbar.Brand>

        {/* Pulsante hamburger */}
        <Navbar.Toggle aria-controls="navbar-peruano" />

        {/* Menu collassabile */}
        <Navbar.Collapse id="navbar-peruano">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#inizio">Home</Nav.Link>
            <Nav.Link href="#chi-siamo">Chi siamo</Nav.Link>
            <Nav.Link href="#menu">Menù</Nav.Link>
            <Nav.Link href="#contatti">Contatti</Nav.Link>

            {/* Pulsante prenotazione */}
            <Button className="btn-reserva ms-md-3 mt-3 mt-md-0">
              Prenota un tavolo
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavbarRestaurante;
