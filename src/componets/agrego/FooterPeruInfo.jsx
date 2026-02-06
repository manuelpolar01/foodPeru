import '/src/css/FooterPeruInfo.css';

import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const FooterPeruInfo = () => {
  // Aquí puedes controlar si el aviso se muestra
  const avisoCerrado = false; // Cambiar a true para mostrar aviso

  return (
    <>
      {/* Aviso de cierre */}
      {avisoCerrado && (
        <div className="footer-aviso">
          ⚠️ Atención: El restaurante está cerrado hoy por mantenimiento. Disculpen las molestias.
        </div>
      )}

      <footer className="footer-peru bg-dark text-light">
        <div className="container py-4">
          <div className="row">

            {/* Marca */}
            <div className="col-md-4 mb-3">
              <a href="/" className="footer-brand fw-bold fs-5">
                Ristorante Peruviano
              </a>
              <p className="text-muted mt-2">
                Autentica cucina peruviana, ingredienti freschi e tradizione in ogni piatto.
              </p>
            </div>

            {/* Dirección y horario */}
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">Dirección & Horario</h5>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+Santo+Stefano+18,+Verbania"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link d-flex align-items-start gap-2"
              >
                <FaMapMarkerAlt size={18} />
                <span>
                  Via Santo Stefano 18<br />
                  28921 Verbania (VB)<br />
                  Italia
                </span>
              </a>

              <div className="footer-horario mt-2">
                <FaClock /> Lunes a Viernes: 12:00 - 22:00 <br />
                Sábado: 12:00 - 23:00 <br />
                Domingo: Cerrado
              </div>
            </div>

            {/* Contactos */}
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">Contáctanos</h5>
              <div className="d-flex gap-3 mt-2">
                <a href="#" className="footer-icon" aria-label="Facebook">
                  <FaFacebookF />
                </a>

                <a href="#" className="footer-icon" aria-label="Instagram">
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/393317227085?text=Ciao%20vorrei%20ricevere%20informazioni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon whatsapp-icon"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          <hr className="border-secondary" />

          {/* Área legal */}
          <div className="row text-muted small align-items-center">
            <div className="col-md-6 text-center text-md-start">
              © {new Date().getFullYear()} Ristorante Peruviano. Todos los derechos reservados.
            </div>

            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
              <a href="/privacy" className="footer-link me-3">
                Privacy Policy
              </a>
              <a href="/termini" className="footer-link me-3">
                Términos y Condiciones
              </a>
              <a href="/cookie" className="footer-link">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterPeruInfo;
