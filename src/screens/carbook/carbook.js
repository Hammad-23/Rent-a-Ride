import React from "react";
import "./style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/navbar";
import Civic from "../../assets/civic.png";
import Faq from "../../components/faq";
import Footer from "../../components/footer/footer";

export default function carbook() {
  return (
    <>
      <NavBar />
      <Row>
        <Col>
          <h5>You selected Full Day Rental Booking Type.</h5>
        </Col>
      </Row>
      <Row style={{}}>
        <Col>
          <input type="date" />
        </Col>
      </Row>

      <Row>
        <Col>
          <input type="time" />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="location"
            placeholder="Select Your Location by clicking on the  pin icon"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="text" placeholder="Additional Pick-Up Description" />
        </Col>
      </Row>
    </>
  );
}
