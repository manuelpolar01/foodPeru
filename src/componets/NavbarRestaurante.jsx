import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/NavbarRestaurante.css';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavbarRestaurante() {
  const [expanded, setExpanded] = useState(false); // Estado para controlar el collapse

  return (
    <Navbar
      expand="md"
      fixed="top"
      className="navbar-peruano"
      expanded={expanded} // Conecta el estado al Navbar
    >
      <Container>
        {/* Logo / Nombre */}
        <Navbar.Brand href="#inizio" className="brand-peruano">
          Sabor Criollo
        </Navbar.Brand>

        {/* Pulsante hamburger */}
        <Navbar.Toggle
          aria-controls="navbar-peruano"
          onClick={() => setExpanded(expanded ? false : true)} // Alterna el estado
        />

        {/* Menu colapsable */}
        <Navbar.Collapse id="navbar-peruano">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={NavLink} to='/' onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/chi-siamo' onClick={() => setExpanded(false)}>Chi siamo</Nav.Link>
            <Nav.Link as={NavLink} to='/menu' onClick={() => setExpanded(false)}>Menù</Nav.Link>
            <Nav.Link as={NavLink} to='/contatti' onClick={() => setExpanded(false)}>Contatti</Nav.Link>

            {/* Pulsante prenotazione */}
            <NavLink
              style={{ textAlign: 'center' }}
              className="btn-reserva ms-md-3 mt-3 mt-md-0"
              to={'/checkout'}
              onClick={() => setExpanded(false)}
            >
              Prenota un tavolo
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <NavLink to='/cart'>
        <CartWidget />
      </NavLink>
    </Navbar>
  );
}

export default NavbarRestaurante;
