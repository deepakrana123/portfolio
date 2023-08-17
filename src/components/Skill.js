import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mernStack from "../assets/MernStack.webp";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react-redux.png";
import nodejs from "../assets/nodejs.png";
import MetaData from "./MetaData";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import SQL from "../assets/sql.png";
import Redux from "../assets/react-redux.png";
import Firebase from "../assets/firebase.png"

export const Skill =()=>{
      const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            slidesToSlide: 5 ,
            items: 5
          },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      

      return(
        <section className="skill" id="skills">
        <div className="container">
            <MetaData title="skill"/>
            <div className="row row1">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These are some skills i have accquired form my past experince.<br></br> In working in this corporate world.</p>
                        <Carousel
                         swipeable={false}
                         draggable={false}
                         showDots={true}
                         responsive={responsive}
                         ssr={true} // means to render carousel on server-side.
                         infinite={true}
                        //  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                         autoPlaySpeed={1000}
                         keyBoardControl={true}
                         customTransition="all .5"
                         transitionDuration={500}
                         containerClass="carousel-container"
                         removeArrowOnDeviceType={["tablet", "mobile"]}
                        //  deviceType={this.props.deviceType}
                         dotListClass="custom-dot-list-style"
                         itemClass="carousel-item-padding-40-px" 
                         className="owl-carousel owl-theme skill-slider ">
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
                            <div className="item">
                                <img src={tailwind} alt="Tailwind" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Mongodb" />
                                <h5>Mongodb</h5>
                            </div>
                            <div className="item">
                                <img src={SQL} alt="SQL" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={Firebase} alt="NodeJs" />
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={Redux} alt="React" />
                                <h5>React Redux</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
      )
}