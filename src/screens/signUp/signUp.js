import React, { useState } from "react";
import "./style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LoginBtn from "../../components/button/button";
import Revo from '../../assets/Revo.png'
// import Login from "../../screens/login" 
import {Register} from '../../config/firebase'

function Signup() {
  const [fullName,setFullName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  let  history = useHistory();
  const register= () => {
    // history.push("/")
  
     Register(email,password)

   
 

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
              onChange={(val)=>setFullName(val)}
                className="form-control"
                type="text"
                placeholder="Full Name"
              />
              <input
              onChange={(val)=>setEmail(val)}
              className="form-control"
                type="email"
                placeholder="Email"
              />
              <input
              onChange={(val)=>setPassword(val)}
              className="form-control"
                type="password"
                placeholder="Password"
              />
              <input
                className="form-control"
                type="password"
                placeholder="Conform Password"
              />
              <Col>
                <LoginBtn onClick={register} />
              </Col>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
}
export default Signup;
