import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Raj Patle</span> from 
            <span className="purple"> Pune, Maharashtra</span>.
            <br />
            I am an aspiring <span className="purple">AI & Data Science Engineer</span> 
            with a passion for <span className="purple">Web Development</span> and 
            <span className="purple"> Machine Learning</span>.
            <br />
            I enjoy building smart solutions using technologies like 
            <b className="purple"> Python, Django, Flask, and IoT</b>.
            <br />
            <br />
            My interests include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> AI & ML Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Web Development
            </li>
            <li className="about-activity">
              <ImPointRight /> IoT Solutions
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Always learning, always innovating!"{" "}
          </p>
          <footer className="blockquote-footer">Raj Patle</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
