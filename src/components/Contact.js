import React from 'react';
import MetaData from "./MetaData";
import "./Contact.css";
import { Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <section className="contact" id="connect">
        <Row>
            <MetaData title="contact"/>
            <div  className="colCont" >
                <p className='p1'>Contact</p>
                <p className='p2'>Submit the form below to contact with me</p>
            </div>
            <div className="colContainer">
              <form action="https://getform.io/f/3b8e1eff-c378-40e7-91d4-98db99618e6a" method="POST">
              <input type="text"name="name" placeholder="Enter your name"
                    className="colContainer-input1"/>
                    <input type="email"name="email" placeholder="Enter your Email"
                    className="colContainer-input2"/>
                  <textarea name="messsage" placeholder="Enter your message" rows="10" className="colTextarea"/>
                  <button className="colButton">Let's Talk</button>
              </form>
            </div>
        </Row>

    </section>
  )
}

export default Contact