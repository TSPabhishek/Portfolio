import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/TSPabhishek/Driver-drowsiness-System/assets/91623079/629ebe76-5fcb-4b47-88e9-50161b4464b1"
              title="Driver drowsiness detection system"
              description="A driver drowsiness detection system is a technological solution designed to monitor a driver's level of alertness and detect signs of drowsiness or fatigue. The system typically utilizes various sensors and algorithms to analyze the driver's behavior, physiological signals, and vehicle data to determine their state of wakefulness."              
              link="https://github.com/TSPabhishek/Driver-drowsiness-System"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/TSPabhishek/Small-business-assistant/assets/91623079/d6598730-4840-42f2-8ade-e1da91c8e7a5"
              title="Small business assistance"
              description="Small business assistance refers to the resources, tools, and services available on the internet that are specifically designed to support and help small businesses. These online platforms offer a wide range of services and information to assist entrepreneurs and small business owners in various aspects of their operations, from starting and planning a business to managing finances, marketing, and more."
              link="https://github.com/TSPabhishek/Small-business-assistant"
            />
          </Col>

          {/* <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/91063960/139381648-76a0d2e5-9375-4f5a-8399-030888d8065e.png"
              title="Netflix-clone"
              description="In this small project you can play trailers of the Movies..,but I will be provide regualar updates with more features and functionalities because the entertainment industry is one of the largest online service businesses. The number of people seeking online entertainment is increasing rapidly. Increased leisure time and easier access to entertainment is driving the market forward."              link="https://github.com/sijeeshmiziha/netflix"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
