import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import venues from "../../Assets/Projects/venues.gif";
import bikerz from"../../Assets/Projects/e-bikerz.gif";
import farmer from"../../Assets/Projects/farmer.gif";
import res from "../../Assets/Projects/res.gif";


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
              demoLink="https://www.linkedin.com/posts/sanjay-a-r-1044ba218_reactjs-html-css-activity-6983065032066564097-j327?utm_source=share&utm_medium=member_desktop."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bikerz}
              isBlog={false}
              title="APP FOR E-BIKE"
              description="Won Future Award under Innovation category on ISIE_e-bike INDIA"
              ghLink="hhttps://github.com/sanju2k3/e-Bikerz"
              demoLink="https://www.linkedin.com/posts/sanjay-a-r-1044ba218_isieindia-team-teamwork-activity-7055985354075471872-ANuw?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farmer}
              isBlog={false}
              title="FARMER AND CONSUMER INTRACTION APP"
              description="Acchieved On Inter college hacathon named BIO-HACKS 2023"
              ghLink="https://github.com/sanju2k3/FARMER-AND-CONSUMER-INTRACTION-APP"
              demoLink="https://www.linkedin.com/posts/sanjay-a-r-1044ba218_student-androiddeveloper-androiddevelopment-activity-7040426493130248192-gIbN?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={res}
              isBlog={false}
              title="Restaurant Food Booking Dashboard"
              description="Full Furnished Site with user and admin panel"
              ghLink="https://github.com/sanju2k3/aahaaramservices"
              demoLink="https://aahaaramservices-sanju.vercel.app"
              />
          </Col>
         

         
          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
