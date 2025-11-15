import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import "./Navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import MetaData from './MetaData';


function  Navbars (){
    const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
    return (
        <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <MetaData title="navbar"/>
          <Container>
            <Navbar.Brand >
              <p style={{"fontSize":"25px","fontWeight":"bold","color":"white"}} className="spanhlo">Devendra</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon">Logo</span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/devendra-rana-751239189/">
                   <FaLinkedin size={30}/> </a>
                  <a href="https://github.com/deepakrana123">
                    <FaGithub size={30}/></a>
                  <a href="mailto:redv69146@gmail.com"><HiOutlineMail size={30}/></a>
                  <a href="/resume.pdf"><BsFillPersonLinesFill size={30}/></a>
                </div>
                <HashLink to='#connect'>
                  <button className="vvd"><span>Let’s Connect</span></button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>

    )
}

export default Navbars;