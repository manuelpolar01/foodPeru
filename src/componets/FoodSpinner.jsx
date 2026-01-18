import Spinner from 'react-bootstrap/Spinner';

function FoodSpinner() {
  return (
    <div
      style={{
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa'
      }}
    >
      {/* Icono comida */}
      <div
        style={{
          fontSize: '3rem',
          marginBottom: '15px'
        }}
      >
        🍽️
      </div>

      {/* Spinner Bootstrap */}
      <Spinner
        animation="border"
        role="status"
        style={{
          width: '3rem',
          height: '3rem',
          color: '#b02a37'
        }}
      >
        <span className="visually-hidden">Caricamento...</span>
      </Spinner>

      {/* Texto */}
      <p
        style={{
          marginTop: '15px',
          fontSize: '1rem',
          color: '#555',
          fontWeight: '500'
        }}
      >
        Stiamo preparando qualcosa di delizioso per te...
      </p>
    </div>
  );
}

export default FoodSpinner;
