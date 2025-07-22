import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiJupyter,
  SiPowerbi,
  SiVercel,
  SiAnaconda,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiJupyter />, name: "Jupyter" },
    { icon: <SiPowerbi />, name: "Power BI" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiAnaconda />, name: "Anaconda" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          style={{ textAlign: "center" }}
        >
          <div style={{ fontSize: "3rem" }}>{tool.icon}</div>
          <p style={{ marginTop: "10px", fontSize: "14px" }}>{tool.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
