import React from "react";
// import "./style.c/ss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LoginBtn from "../../components/button/button";
import Revo from '../../assets/Revo.png'
// import Login from "../../screens/login"

function Signup() {
  let  history = useHistory();
  const login= () => {
    history.push("/")
  }
  return (
    <div className="main-div">
      <form>
        <Container className="back">
          <Row style={{ backgroundColor: "white" }}>
            <Col className="image-div">
              <img className="cover" src={Revo} />
            </Col>
            <Col style={{ width: "400px" }}>
              <h2 className="heading-text">&bull; Sign Up &bull;</h2>
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
              <input
                className="app-form-control"
                type="password"
                placeholder="Conform Password"
              />
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
export default Signup;
