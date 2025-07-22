import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container
      fluid
      className="footer"
      style={{
        backgroundColor: "#0d0d0d",
        color: "white",
        padding: "20px 0",
      }}
    >
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* ✅ Footer Text */}
        <Col md="12" style={{ marginBottom: "10px" }}>
          <h3 style={{ margin: 0 }}>
            Designed and Developed by <span style={{ color: "#12D640" }}>Raj Patle</span>
          </h3>
        </Col>

        {/* ✅ Social Icons */}
        <Col md="12">
          <ul
            className="footer-icons"
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "center",
              padding: 0,
              margin: 0,
              gap: "20px",
              fontSize: "1.8rem",
            }}
          >
            <li className="social-icons">
              <a
                href="https://github.com/raj-patle1308"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/raj-patle-4b6520272/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/raj_patle_1_3_0_8_/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
