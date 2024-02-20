import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Methodology.css'; 

const Methodology = () => {
  return (
    <Container className="metodologia-container">
      <h1 className="metodologia-title">Metodología Personalizada</h1>
      <Row>
        <Col md={6}>
          <div className="metodologia-step">
            <h2>1. Evaluación Individual</h2>
            <p>Cada estudiante comienza su viaje con nosotros con una evaluación exhaustiva de sus habilidades, conocimientos previos y metas académicas...</p>
          </div>
          <div className="metodologia-step">
            <h2>3. Flexibilidad y Ritmo Personal</h2>
            <p>Reconocemos que cada estudiante tiene su propio ritmo de aprendizaje. Por lo tanto, adaptamos nuestras lecciones para asegurarnos de que cada alumno pueda comprender completamente los conceptos antes de avanzar...</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="metodologia-step">
            <h2>2. Diseño de Plan de Estudio Personalizado</h2>
            <p>Basándonos en la evaluación inicial, creamos un plan de estudio único para cada alumno. Este plan aborda las áreas de mejora identificadas y destaca sus fortalezas individuales...</p>
          </div>
          <div className="metodologia-step">
            <h2>4. Retroalimentación Constructiva</h2>
            <p>Fomentamos una comunicación abierta y constante. Proporcionamos retroalimentación constructiva regularmente para apoyar el progreso del estudiante y ajustar el plan de estudio según sea necesario...</p>
          </div>
          <div className="metodologia-step">
            <h2>5. Recursos Personalizados</h2>
            <p>Proporcionamos recursos de aprendizaje adaptados a las preferencias y estilos de aprendizaje individuales. Ya sea a través de material de lectura, multimedia o ejercicios prácticos...</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Methodology;