import React from "react";
import "./style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Cover from "../../assets/card-img.jpg";
import Fortuner from '../../assets/fortuner.png'
import { useHistory } from "react-router-dom";
import LoginBtn from "../../components/button/button";

export default function LogIn() {
  let history = useHistory();

  const login = () => {
    history.push("/landing");
  };
  return (
    <div className="main-div">
      <form>
        <Container className="back">
          <Row style={{ backgroundColor: "white" }}>
            <Col className="image-div">
              <img className="cover" src={Fortuner} />
            </Col>
            <Col style={{ width: "400px" }}>
              <h2 className="heading-text">&bull; LOGIN &bull;</h2>
              <input
                className="app-form-control"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="app-form-control"
                type="email"
                placeholder="Email"
              />
              <input
                className="app-form-control"
                type="password"
                placeholder="Password"
              />
              {/* <Col>
              <a style={{ textDecoration: "none" }} href="">
                Don't have a account ? Resgister
              </a>
            </Col> */}
              <Col>
                <LoginBtn onClick={login} />
              </Col>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
}
