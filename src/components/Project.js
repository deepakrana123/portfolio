
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ecomm from "../assets/ecomm.jpeg";
// import covid from "../assets/covid.jpg";
import note from "../assets/note.jpeg";
import bussiness from "../assets/bussiness.jpeg";
import tesla from "../assets/tesla.jpg"
import MetaData from "./MetaData";

export const Project=()=>{
  
    const projects = [
        {
          title: "Ecommerce",
          description: "Ecomm with razorpay intergation",
          imgUrl: ecomm,
          code:"https://github.com/deepakrana123/project-ecomm",
          demo:"https://glistening-hummingbird-52f4ce.netlify.app"
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: bussiness,
          demo:"https://dulcet-banoffee-3548dd.netlify.app",
          code:"https://github.com/deepakrana123/tailwind-css"
        },
        {
          title: "Note App",
          description: "Mern stack & Development",
          imgUrl: note,
          code:"https://github.com/deepakrana123/note-frontend",
          demo:"https://63b58824da28e97c02e76fc6--dashing-pixie-da81fd.netlify.app/",
          style:{
            width:"60%",
            height:"60%"
          }
        },
        {
          title: "Movie App",
          description: "React & Redux",
          imgUrl: bussiness,
          demo:"https://gorgeous-chebakia-ba50ef.netlify.app/",
          code:"https://github.com/deepakrana123/movie-app"
        },
        {
          title: "Tesla CLone",
          description: "Making a Tesla react clone",
          imgUrl: tesla,
          demo:"https://mellifluous-longma-f99f74.netlify.app",
          code:"https://github.com/deepakrana123/tesla"
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
                             title={project.title}
                            description={project.description}
                             imgUrl={project.imgUrl}
                             demo={project.demo}
                             code={project.code} 
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