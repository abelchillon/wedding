import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';

import '../css/pages.css';

const Alojamiento = () => {
  return (
    <Container className="page-container">
      <h1 className="text-center mb-5">Alojamiento</h1>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Opciones de Alojamiento</Card.Title>

              <Card.Text>
                Aquí tienes algunas recomendaciones de alojamiento cercanas al
                lugar de la celebración:
              </Card.Text>

              <ul>
                <li>
                  <strong>Hotel Ejemplo 1</strong>

                  <p>Dirección: Calle Example 123</p>

                  <p>Teléfono: 123-456-789</p>

                  <p>Distancia al lugar: 5 minutos en coche</p>
                </li>

                <li>
                  <strong>Hotel Ejemplo 2</strong>

                  <p>Dirección: Avenida Sample 456</p>

                  <p>Teléfono: 987-654-321</p>

                  <p>Distancia al lugar: 10 minutos en coche</p>
                </li>
              </ul>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Información Adicional</Card.Title>

              <Card.Text>
                Si necesitas más información sobre alojamiento o tienes alguna
                pregunta, no dudes en contactar con nosotros.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Alojamiento;
