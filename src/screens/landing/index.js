import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/navbar";
import { Col, Container, Row } from "react-bootstrap";
import Sedan from "../../assets/sedan.png";
import Hatchback from "../../assets/hatch.png";
import Luxury from "../../assets/luxury.png";
import Suv from "../../assets/suv.png";
import Vans from "../../assets/vans.png";
import FAq from "../../components/faq"; 

export default function Landing() {
  return (
    <>
      <NavBar />

      <div className="bg"></div>
      <Container className="fullPageContainer">
        <Row style={{ marginTop: "50px" }}>
          <Col>
            <h1 style={{ color: "darkblue" }}>
              What type of Car you are looking for?
            </h1>
          </Col>
        </Row>
        <Row className="carsRow">
          <Col className="carsContainer">
            <img className="pic" src={Sedan} />
            <h4 className="carsCategories">Sedan</h4>
          </Col>
          <Col>
            <img className="pic" src={Hatchback} />
            <h4 className="carsCategories">Hatchback</h4>
          </Col>
          <Col>
            <img className="pic" src={Luxury} />
            <h4 className="carsCategories">Luxury</h4>
          </Col>
          <Col>
            <img className="pic" src={Suv} />
            <h4 className="carsCategories">Suv</h4>
          </Col>
          <Col>
            <img className="pic2" src={Vans} />
            <h4 className="carsCategories">Vans</h4>
          </Col>
        </Row>

        <Row>
          <Col
            style={{
              backgroundColor: "darkblue",
              height: "200px",
              borderRadius: "20px",
              marginTop: "90px",
            }}
          >
            <h2 style={{ color: "white", marginTop: "12px" }}>FOR-BOOKING</h2>

            <Col style={{ marginTop: "19px" }}>
              <input
                placeholder="Enter Pick-Up Location*"
                className="form-control"
                type="text"
                style={{ marginTop: "12px" }}
              />
            </Col>
            <Col style={{ display: "flex" }}>
              <input className="date-input" type="date" />
              <input value="Form Date" className="date-input" type="time" />
              <Col style={{ backgroundColor: "white" }}>
                <input
                  style={{ height: "17px", width: "30px", marginTop: "12px" }}
                  type="radio"
                />
                <label> FULL DAY</label>
                <input style={{ height: "17px", width: "30px" }} type="radio" />
                <label> SHORT RENTAL</label>
              </Col>
            </Col>
            <Col>
              <button className="bkn-btn">BOOK NOW</button>
            </Col>
          </Col>
        </Row>

        <Row style={{ marginTop: "20px" }}></Row>
      </Container>
      <Row className="line"> </Row>
      <Row>
        <Col>
          <h1 style={{ color: "darkblue",marginTop:"80px" }}>FREQUENTLY ASKED QUESTIONS</h1>
        </Col>
        </Row>
        <Row>
        
      <Col>
        <FAq/>
       </Col>
        
      </Row>
    </>
  );
}
