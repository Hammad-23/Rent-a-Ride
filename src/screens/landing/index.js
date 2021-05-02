import React from "react";
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/navbar'
import { Col, Container, Row } from "react-bootstrap";
import Sedan from '../../assets/sedan.png'
import Hatchback from '../../assets/hatch.png'
import Luxury from '../../assets/luxury.png'
import Suv from '../../assets/suv.png'
import Vans from '../../assets/vans.png'



export default function Landing() {
  return (
    <>
      <NavBar/>
      
      <div className='bg'>
      
      </div>
      <Container className='fullPageContainer'>
        <Row style={{marginTop:"50px"}}>
          <Col>
          <h1 style={{color:"darkblue"}}>What type of Car you are looking for?</h1>
          </Col>
        </Row>
      <Row className='carsRow'>
        <Col className='carsContainer'>
         <img className='pic' src={Sedan}/>
         <h4 className='carsCategories'>Sedan</h4>


        </Col>
        <Col>
         <img className='pic' src={Hatchback}/>
         <h4 className='carsCategories'>Hatchback</h4>


        </Col>
        <Col>
         <img className='pic' src={Luxury}/>
         <h4 className='carsCategories'>Luxury</h4>


        </Col>
        <Col>
         <img className='pic' src={Suv}/>
         <h4 className='carsCategories'>Suv</h4>


        </Col>
        <Col>
         <img className='pic2' src={Vans}/>
         <h4 className='carsCategories'>Vans</h4>


        </Col>
      </Row>

      <Row style={{marginTop:"20px"}}>

      </Row>
      </Container>
    </>
  );
}
