import Container from 'react-bootstrap/Container';
import '../css/ChiSiamo.css';

function ChiSiamo() {
  return (
    <section id="chi-siamo" className="chi-siamo-section">
      <Container>
        <h2 className="chi-siamo-title">Chi Siamo</h2>

        <p className="chi-siamo-text">
          <strong>Sabor Criollo</strong> nasce dalla passione per la vera cucina
          peruviana, una delle tradizioni gastronomiche più ricche e sorprendenti
          al mondo.
        </p>

        <p className="chi-siamo-text">
          La cucina peruviana è un incontro unico di culture:
          tradizioni andine, influenze spagnole, africane, cinesi e giapponesi,
          fuse in piatti intensi, colorati e ricchi di sapore.
        </p>

        <p className="chi-siamo-text">
          Nel nostro ristorante proponiamo ricette autentiche preparate con
          ingredienti freschi e spezie selezionate, come il peperoncino ají,
          il coriandolo e il mais andino, per offrire un’esperienza culinaria
          diversa e memorabile.
        </p>

        <p className="chi-siamo-text">
          Dai piatti simbolo come il <strong>Ceviche</strong>, fresco e profumato,
          fino alle specialità più tradizionali come il <strong>Lomo Saltado</strong>
          e l’<strong>Ají de Gallina</strong>, ogni portata racconta una storia
          di tradizione, famiglia e convivialità.
        </p>

        <p className="chi-siamo-text highlight">
          Vi invitiamo a scoprire nuovi sapori, a viaggiare con il palato
          e a vivere un’esperienza gastronomica che unisce il Perù all’Italia.
        </p>
      </Container>
    </section>
  );
}

export default ChiSiamo;
