import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import homeBg from "../../Assets/home-bg.jpg"; // ✅ Background image
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div
      className="contact-page"
      style={{
        minHeight: "100vh",
        padding: "120px 0 50px", // Avoid navbar overlap
        color: "#fff",
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Container>
        <h2
          className="text-center mb-5"
          style={{
            fontWeight: "bold",
            color: "#fff",
            textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
          }}
        >
          Get in Touch
        </h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card
              className="p-4 shadow-lg"
              style={{
                borderRadius: "15px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <Row>
                {/* Left Side - Form */}
                <Col md={6}>
                  <div
                    style={{
                      background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                      padding: "20px",
                      borderRadius: "10px",
                      color: "#fff",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                    }}
                  >
                    <h4 className="mb-3">Send a Message</h4>
                    <Form
                      action="https://formspree.io/f/mzbldykz"
                      method="POST"
                    >
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          name="_replyto"
                          placeholder="Your Email"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          as="textarea"
                          name="message"
                          placeholder="Your Message"
                          rows={4}
                          required
                        />
                      </Form.Group>
                      <Button
                        variant="light"
                        type="submit"
                        style={{
                          width: "100%",
                          fontWeight: "bold",
                          color: "#2575fc",
                          border: "none",
                        }}
                      >
                        Send Message
                      </Button>
                    </Form>
                  </div>
                </Col>

                {/* Right Side - Contact Details */}
                <Col md={6}>
                  <div
                    style={{
                      background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                      padding: "20px",
                      borderRadius: "10px",
                      color: "#fff",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                      minHeight: "100%",
                    }}
                  >
                    <h4 className="mb-3" style={{ fontWeight: "bold" }}>
                      Contact Details
                    </h4>

                    <p style={{ fontSize: "16px", marginBottom: "15px" }}>
                      <FaMapMarkerAlt
                        style={{ marginRight: "10px", color: "#ffd700" }}
                      />
                      <strong>Address:</strong> City Center, Nagpur,
                      Maharashtra, India
                    </p>

                    <p style={{ fontSize: "16px", marginBottom: "15px" }}>
                      <FaPhoneAlt
                        style={{ marginRight: "10px", color: "#ffd700" }}
                      />
                      <strong>Phone:</strong> +91-7028148747
                    </p>

                    <p style={{ fontSize: "16px" }}>
                      <FaEnvelope
                        style={{ marginRight: "10px", color: "#ffd700" }}
                      />
                      <strong>Email:</strong> rajpatlepro1308@gmail.com
                    </p>

                    <div className="social-icons mt-4">
                      <a
                        href="https://github.com/raj-patle1308"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginRight: "15px",
                          fontSize: "22px",
                          color: "#fff",
                        }}
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/raj-patle-4b6520272/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginRight: "15px",
                          fontSize: "22px",
                          color: "#fff",
                        }}
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/raj_patle_1_3_0_8_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "22px", color: "#fff" }}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
