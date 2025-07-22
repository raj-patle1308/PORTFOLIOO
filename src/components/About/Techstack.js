import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiPhp,
} from "react-icons/di";
import {
  SiDjango,
  SiFlask,
  SiHtml5,
  SiCss3,
  SiFastapi,
  SiStreamlit,
  SiMysql,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPowerbi,
  SiJupyter,
} from "react-icons/si";

function Techstack() {
  const techs = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <DiPhp />, name: "PHP" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiStreamlit />, name: "Streamlit" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiScikitlearn />, name: "Scikit-learn" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiPowerbi />, name: "Power BI" },
    { icon: <SiJupyter />, name: "Jupyter" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          style={{ textAlign: "center" }}
        >
          <div style={{ fontSize: "3rem" }}>{tech.icon}</div>
          <p style={{ marginTop: "10px", fontSize: "14px" }}>{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
