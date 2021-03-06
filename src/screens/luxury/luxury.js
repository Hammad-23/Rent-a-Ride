import React from "react";
import "./style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer/footer";
import Audi from "../../assets/audi.png";
import AudiA5 from "../../assets/audiafive.png";
import Mercedes from "../../assets/mercedes.png";

export default function luxury() {
  let cars = [
    {
      name: "Audi A4",
      price: "23,000 PKR/day",
      img: Audi,
    },
    {
      name: "Audi A5",
      price: "40,000 PKR/day",
      img: AudiA5,
    },
    {
      name: "Mercedes",
      price: "19,000 PKR/day",
      img: Mercedes,
    },
  ];
  return (
    <>
      <Row>
        <NavBar />
        <Container className="fullPageContainer">
          <Row className="row-first">
            <Col>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  height: "54px",
                  width: "20px",
                }}
                fill="currentColor"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>

              <input
                className="loc-inpt"
                type="location"
                placeholder="Enter Pick-Up Location*"
              />
              <input className="loc-inpt" type="date" />
              <input className="loc-inpt" type="time" />
              <input style={{ height: "15px", width: "30px" }} type="radio" />
              <label> FULL DAY </label>
              <input style={{ height: "15px", width: "25px" }} type="radio" />
              <label> SHORT RENTAL</label>
              <button className="btn-book">Book Now</button>
            </Col>
          </Row>
        </Container>
        {cars.map((item) => {
          return (
            <Row className="row-main">
              <Col style={{ padding: "10px 0" }}>
                <Col className="img-col">
                  <img className="img" src={item.img} />
                </Col>
              </Col>

              <Col>
                <Col className="title">
                  <h4 className="car-name">{item.name}</h4>
                  <h5 className="name">{item.price} </h5>
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
          );
        })}
      </Row>
      <Footer />
    </>
  );
}
