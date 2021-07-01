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
import { useHistory } from "react-router-dom";
import Footer from "../../components/footer/footer";

export default function Landing() {
  let history = useHistory();

  const sedan = () => {
    history.push("/sedan");
  };

  const hatchback=()=>{
    history.push("/hatchback")
  }
  return (
    <>
      <NavBar />

      <div className="bg"></div>
      <Container>
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
            <h4 onClick={sedan} className="carsCategories">
              Sedan
            </h4>
          </Col>
          <Col>
            <img className="pic" src={Hatchback} />
            <h4 onClick={hatchback} className="carsCategories">Hatchback</h4>
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
            <h2 className="frbk-head">FOR-BOOKING</h2>
            <Col className="inpt-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  background: "white",
                  height: "36px",
                  width: "20px",
                }}
                fill="currentColor"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <input
                style={{ borderRadius: "none" }}
                className="form-control"
                placeholder="Enter Pick-Up Location*"
                type="text"
              />
            </Col>
            <Col style={{ display: "flex" }}>
              <input className="date-input" type="date" />
              <input className="date-input" type="time" />

              <Col className="radio-col">
                <input className="radio-inpt" type="radio" />
                <label> FULL DAY</label>
                <input className="radio-inpt" type="radio" />
                <label> SHORT RENTAL</label>
              </Col>
            </Col>
            <Col>
              <button className="bkn-btn">BOOK NOW</button>
            </Col>
          </Col>
        </Row>

      </Container>
      <Row className="line"> </Row>
      <Row>
        <Col>
          <h1 style={{ color: "darkblue", marginTop: "80px" }}>
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <FAq />
        </Col>
      </Row>
      {/* <Row className="line"> </Row> */}
      <Footer/>
      
    </>
  );
}
