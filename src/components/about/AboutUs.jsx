import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Container>
        <Row>
          <Col md={6}>
            <Image
              src="https://cdn.pixabay.com/photo/2017/01/10/01/32/teach-1968076_1280.jpg"
              alt="Imagen de equipo"
              className="img-fluid"
              
            />
          </Col>
          <Col md={6}>
            <div className="about-content">
              <h1>Sobre Nosotros</h1>
              <p>
                ¡Bienvenido a Tu Profe Particular! Somos un equipo apasionado de
                educadores comprometidos a brindar experiencias de aprendizaje
                excepcionales. En Tu Profe Particular, nos dedicamos a
                proporcionar clases particulares personalizadas para ayudar a
                nuestros estudiantes a alcanzar sus metas académicas con
                confianza.
              </p>
              <h2>Nuestra Misión</h2>
              <p>
                En Tu Profe Particular, creemos en el poder de la educación
                personalizada. Nuestra misión es proporcionar un entorno de
                aprendizaje que se adapte a las necesidades individuales de cada
                estudiante. Nos esforzamos por fomentar la comprensión profunda,
                el amor por el aprendizaje y el crecimiento académico
                sostenible.
              </p>
              {/* ... (continúa con los otros elementos) */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
