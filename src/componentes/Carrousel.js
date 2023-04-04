import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.css';

const NetflixCarousel = () => {
  return (
    <Carousel className='mb-5'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/peliculas/Chucky.jpeg"
          alt="Chucky"
        />
        <Carousel.Caption>
          <h3>Chuky</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/peliculas/La sociedad de los poetas muertos.jpeg"
          alt="Chucky"
        />
        <Carousel.Caption>
          <h3>La sociedad de los Poetas muertos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Peliculas/Duro de matar.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Duro de Matar</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/peliculas/El lobo de Wall Street.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>El lobo de Wall Street</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/peliculas/Titanic.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Titanic</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default NetflixCarousel;
