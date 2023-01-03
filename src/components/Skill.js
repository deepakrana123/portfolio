import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mernStack from "../assets/mern-stack.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react-redux.png";
import nodejs from "../assets/nodejs.png";
import MetaData from "./MetaData";

export const Skill =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
        <div className="container">
            <MetaData title="skill"/>
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These are some skills i have accquired form my past experince.<br></br> In working in this corporate world.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={mernStack} alt="mernStack" />
                                <h5>Mern Stack</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Css" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="NodeJs" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="React" />
                                <h5>React</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={"colorSharp"} alt="Image" /> */}
    </section>
      )
}