import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './css/Carrusel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <Carousel activeIndex={index} onSelect={setIndex}>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/35566540/pexels-photo-35566540.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/28448378/pexels-photo-28448378.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://images.pexels.com/photos/30766469/pexels-photo-30766469.jpeg" />
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel