import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatarImg from "../../Assets/avatar.svg";
import profileImg from "../../Assets/1.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <b className="purple">Raj Patle</b> from{" "}
              <b className="purple">Pune, Maharashtra</b>.  
              <br />
              <br />
              I'm an aspiring <b className="purple">AI & Data Science Engineer</b>  
              with strong expertise in <b className="purple">Web Development</b> and  
              a passion for building impactful products.
              <br />
              <br />
              I love working with technologies like:
              <i>
                <b className="purple"> Python, Django, Flask, React, React Native, and APIs</b>
              </i>
              for creating smart and scalable solutions.
              <br />
              <br />
              My areas of interest include:
              <i>
                <b className="purple"> AI, Machine Learning, Data Science, and IoT-based innovations. </b>
              </i>
              <br />
              <br />
              I have hands-on experience in integrating third-party APIs, developing ML models,  
              and designing intuitive web & Streamlit Projects.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={profileImg} className="img-fluid" alt="avatarImg " />
            </Tilt>
          </Col>
        </Row>

        {/* ✅ Social Links */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/raj-patle1308"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/raj-patle-4b6520272/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/raj_patle_1_3_0_8_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
