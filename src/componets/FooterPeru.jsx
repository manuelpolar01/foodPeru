import '../css/footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt
} from 'react-icons/fa';

function FooterPeru() {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-4">
        <div className="row">

          {/* Marca */}
          <div className="col-md-4 mb-3">
            <a href="/" className="footer-link fw-bold fs-5">
              Ristorante Peruviano
            </a>
            <p className="text-muted mt-2">
              Autentica cucina peruviana, ingredienti freschi e tradizione in ogni piatto.
            </p>
          </div>

          {/* Indirizzo */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Indirizzo</h5>

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
          </div>

          {/* Contatti */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Contatti</h5>

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
            © {new Date().getFullYear()} Ristorante Peruviano.  
            Tutti i diritti riservati.  
            È vietata la riproduzione, anche parziale, dei contenuti senza autorizzazione.
          </div>

          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <a href="/privacy" className="footer-link me-3">
              Privacy Policy
            </a>
            <a href="/termini" className="footer-link me-3">
              Termini e Condizioni
            </a>
            <a href="/cookie" className="footer-link">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPeru;
