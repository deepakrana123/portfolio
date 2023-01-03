
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ecomm from "../assets/ecomm.jpeg";
import covid from "../assets/covid.jpg";
import note from "../assets/note.jpeg";
import bussiness from "../assets/bussiness.jpeg";
import tesla from "../assets/tesla.jpg"
import MetaData from "./MetaData";
export const Project=()=>{
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: ecomm,
          demo:"code",
          code:"code"
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: covid,
          demo:"code",
          code:"code"
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: note,
          demo:"code",
          code:"code",
          style:{
            width:"60%",
            height:"60%"
          }
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: bussiness,
          demo:"code",
          code:"code"
        },
        {
          title: "Tesla CLone",
          description: "Making a Tesla react clone",
          imgUrl: tesla,
          demo:"code",
          code:"code"
        }
      ];
    return (
        <section className="project" id="projects">
        <Container>
          <MetaData title="project"/>
          <Row>
            <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are my some work .I have done till far .Please check them.</p>
                 <Row>
                 {
                     projects.map((project, index) => {
                         return (
                             <ProjectCard
                             key={index}
                             {...project}
                             />
                             )
                            })
                        }
               </Row>
            </div>
               }
                </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
    )
}