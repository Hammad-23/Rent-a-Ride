import React from "react";
import "./style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer/footer";

export default function carbook() {
  return (
    <>
      <NavBar />
      <Row className="main-Row">
        <h5 className="heading">You selected Full Day Rental Booking Type.</h5>
      </Row>
      <Row>
        <Col>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "54px",
              width: "20px",
            }}
            fill="currentColor"
            class="bi bi-calendar-day-fill"
            viewBox="0 0 16 16"
          >
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16v9zm-4.785-6.145a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43c0 .238.192.425.43.425zm.336.563h-.672v4.105h.672V8.418zm-6.867 4.105v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105z" />
          </svg>
          <input className="inpts" type="date" />
        </Col>
      </Row>
      <Row>
        <Col>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "54px",
              width: "20px",
            }}
            fill="currentColor"
            class="bi bi-clock"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>

          <input className="inpts" type="time" />
        </Col>
      </Row>
      <Row>
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
            className="inpts"
            type="location"
            placeholder="Select your location by clicking on the pin icon"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "54px",
              width: "20px",
            }}
            fill="currentColor"
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>

          <input
            className="inpts"
            type="text"
            placeholder="Additional Pick-Up Description"
          />
        </Col>
      </Row>
      <Row className="btn-row">
        <button className="sbmt-btn">Next</button>
      </Row>
      <Footer />
    </>
  );
}
