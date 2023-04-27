import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import venues from "../../Assets/Projects/venues.gif";
import bikerz from"../../Assets/Projects/e-bikerz.gif";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={venues}
              isBlog={false}
              title="VENUES BIT"
              description="Chat Room For Teachers to share Infos with Students."
              ghLink="https://github.com/sanju2k3/VENUES-room-chater"
              demoLink="On Progress..."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bikerz}
              isBlog={false}
              title="APP FOR E-BIKE"
              description="Won Future Award under Inovation catagory on ISIE_e-bike INDIA"
              ghLink="hhttps://github.com/sanju2k3/e-Bikerz"
              demoLink="Won Future Award under Inovation catagory on ISIE_e-bike INDIA"
            />
          </Col>

         
          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
