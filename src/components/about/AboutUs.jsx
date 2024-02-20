import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Container className="about-us-container">
      <Row>
        <Col md={6}>
          <Image
            src="https://cdn.pixabay.com/photo/2017/01/10/01/32/teach-1968076_1280.jpg" 
            alt="Team"
            fluid
            className="about-us-image"
          />
        </Col>
        <Col md={6} className="about-us-text">
          <h2>Bienvenido a TU PROFE PARTICULAR</h2>
          <p>
            Somos un equipo apasionado de educadores comprometidos a brindar
            experiencias de aprendizaje excepcionales. En TU PROFE PARTICULAR,
            nos dedicamos a proporcionar clases particulares personalizadas para
            ayudar a nuestros estudiantes a alcanzar sus metas académicas con
            confianza.
          </p>

          <h3>Nuestra Misión</h3>
          <p>
            En TU PROFE PARTICULAR, creemos en el poder de la educación
            personalizada. Nuestra misión es proporcionar un entorno de
            aprendizaje que se adapte a las necesidades individuales de cada
            estudiante. Nos esforzamos por fomentar la comprensión profunda, el
            amor por el aprendizaje y el crecimiento académico sostenible.
          </p>

          <h3>¿Por qué Elegirnos?</h3>
          <ul>
            <li>Profesores Altamente Calificados</li>
            <li>Enfoque Personalizado</li>
            <li>Variedad de Materias</li>
            <li>Flexibilidad Horaria</li>
          </ul>

          <h3>Nuestro Compromiso</h3>
          <p>
            En TU PROFE PARTICULAR, estamos comprometidos a construir un
            puente entre el conocimiento y el éxito académico. Nos enorgullece
            ser parte del viaje educativo de cada estudiante y verlos crecer y
            alcanzar sus metas.
          </p>

          <p>
            ¡Únete a nosotros en esta emocionante aventura de aprendizaje! Si
            tienes alguna pregunta o estás listo para comenzar tu viaje
            educativo personalizado, ¡contáctanos hoy mismo!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
