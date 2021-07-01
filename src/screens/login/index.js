import React from "react";
import "./style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Cover from "../../assets/card-img.jpg";
// import Signup from "../../screens/signUp/signUp.js"
import Fortuner from '../../assets/fortuner.png'
import { useHistory } from "react-router-dom";
import LoginBtn from "../../components/button/button";

export default function LogIn() {
  let history = useHistory();

  const landing = () => {
    history.push("/landing");
  };
  const signUp = () => {
    history.push("/signup")
  }
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
              
              <Col>
                <LoginBtn onClick={landing} />
              </Col>
              <Col>
              <a style={{ textDecoration: "none" }} href="signUp">
                Don't have a account ? Resgister
              </a>
            </Col>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
}
