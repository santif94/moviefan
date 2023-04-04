import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Buscapeli() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState(null);

  const searchMovie = async () => {
    const url = `http://www.omdbapi.com/?t=${query}&apikey=a08cc090`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchMovie();
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md='8' className='mt-5'>
          <Form onSubmit={handleSearch}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Busca una pelicula:</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ingresa el titulo de la pelicula'
                value={query}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant='success' type='submit' className='mt-2'>
              Buscar
            </Button>
          </Form>
        </Col>
      </Row>

      {movie && (
        <Row className='justify-content-center mt-3 mb-3'>
          <Col md='8'>
            <Card>
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                  <p>Actores: {movie.Actors}</p>
                  <p>Duración: {movie.Runtime}</p>
                  <p>Año de lanzamiento: {movie.Year}</p>
                  <p>Rating: {movie.imdbRating}</p>
                  <p>Descripción: {movie.Plot}</p>
                  <p>Premios: {movie.Awards}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Buscapeli;
