import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agriventure from "../../Assets/agriventure.jpg";
import scure from "../../Assets/scure.png";
import lifeline from "../../Assets/Lifeline.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I’ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* ✅ Project 1 - Agriventure */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agriventure}
              isBlog={false}
              title="Agriventure"
              description="Smart irrigation system using Django, ESP8266, and IoT sensors. Features plant disease prediction, soil moisture automation, crop suggestions, e-commerce for agriculture, and farm security."
              ghLink="https://github.com/raj-patle1308/Agriventure"
            />
          </Col>

          {/* ✅ Project 2 - Scure */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scure}
              isBlog={false}
              title="Scure"
              description="Skin cancer prediction ML model using 5000+ images. Built frontend in HTML/CSS, backend in PHP, enabling users to upload images and get predictions. Improved diagnostic accuracy by 20%."
              ghLink="https://github.com/raj-patle1308/Scure"
            />
          </Col>

          {/* ✅ Project 3 - Lifeline */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lifeline}
              isBlog={false}
              title="Lifeline"
              description="Traffic accident data analysis system using ML models like K-Means & Random Forest on 300,000+ data points. Helps predict accident severity and identify high-risk zones for safety planning."
              ghLink="https://github.com/raj-patle1308/Traffic_accident_data_analysis/tree/main"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
