import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import dev from "../assets/dev.JPG";
import TextTransition, { presets } from "react-text-transition";
import MetaData from "./MetaData";
const TEXTS = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Node.js",
    "Express.js",
    "Mongodb",
    "SCSS",
    "Tailwind",
    "Angular",
    "Firebase",
    "Vscode",
    "Postmen",
    "Git",
    "Jira",
    "Bitbucket",
    "Github"
  ];
export const Banner=()=>{
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
    })
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <MetaData title="Main"/>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{'Hey Its devendra '}<span className="warp"><TextTransition springConfig={presets.wobbly}>
                            {TEXTS[index % TEXTS.length]}
                            </TextTransition></span> {'Developer'}</h1>
                        <p>Hloo my name is Devendra ,
                            form Bageshwar Uttarakhand , <br/>Any Query for related work please contact</p>
                        <button onClick={()=>console.log("connect")}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                       <img   src={dev} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}