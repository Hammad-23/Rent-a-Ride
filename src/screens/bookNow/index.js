import React from "react";
import "./style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/navbar";
import Civic from "../../assets/civic.png";
import Faq from "../../components/faq";
import Footer from "../../components/footer/footer";

export default function book() {
  return (
    <>
      <NavBar />
      <Row className="row-main">
        <Col style={{ padding: "10px 0" }}>
          <Col className="img-col">
            <img className="img" src={Civic} />
          </Col>
        </Col>

        <Col>
          <Col className="title">
            <h4 className="car-name">Civic </h4>
            <h5 className="name">7,500 PKR/day </h5>
          </Col>
          <Col>
            <a href="" style={{ marginRight: "99px" }}>
              See all detail
            </a>
            <input className="city-radio-inpt" type="radio" />
            <label> In City</label>
            <input className="city-radio-inpt" type="radio" />
            <label> Out City</label>
            <Col>
              <button className="booknow-btn">Book Now</button>
            </Col>
          </Col>
        </Col>
      </Row>

      <Row className="lines"> </Row>
      <Row>
        <Col className="col-one">
          <h1 className="rent-head">Rent a Honda Civic</h1>
        </Col>

        <Col>
          <h3 className="rent-head">Why Rently?</h3>
          <p>
            " Rently guarantees best car rental experience at lowest possible
            rates ever. So, rent a Honda Civic in Karachi with driver through
            Rently. Our well-groomed and professional drivers make sure your
            experience remains par excellence. Our whole process is secure, easy
            and with no hassle. Cars are always delivered at your doorstep."
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="rent-head">Latest Models</h3>
          <p>"All the Honda Civics we offer are 2017 and onwards model"</p>
        </Col>

        <Col>
          <h3 className="rent-head">Inter and Intra City Travel</h3>
          <p>
            Travel within Karachi and / or from Karachi to anywhere in Pakistan
          </p>
        </Col>

        <Col>
          <h3 className="rent-head">Full Day / Short Rental</h3>
          <p>Honda Civics are available for full day only</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="rent-head">Limitations</h3>
          <p>
            We encourage the visitors to book their favorite / dream car in
            advance Bookings of all cars are subject to availability For urgent
            bookings please call our helpline Honda Civic can only be rented
            with driver There are no hidden charges
          </p>
        </Col>
      </Row>
      <Row className="lines"> </Row>
      <Row>
        <Col>
          <h1 style={{ color: "darkblue", marginTop: "80px" }}>
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </Col>
      </Row>

      <Faq />

      <Footer />
    </>
  );
}
