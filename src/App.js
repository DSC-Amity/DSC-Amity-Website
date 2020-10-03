import React from "react";
import Home from "./components/Home";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Aim from "./components/Aim";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";
import { Col, Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Updates from "./components/Updates";

export default function App() {
  return (
    <div className="App" id="App">
      {/* <Navb /> */}

      <Row>
        <Home />
      </Row>

      <Row>
        <Col>
          <Aim />
        </Col>
      </Row>
      <Row>
        <Col>
          <About />
        </Col>
      </Row>
      <Row>
        <Col>
          <Team />
        </Col>
      </Row>
      <Row>
        <Col>
          <Events />
        </Col>
      </Row>
      <Row>
        <Col>
          <Updates />
        </Col>
      </Row>

      <Row>
        <Col>
          <Contact />
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
