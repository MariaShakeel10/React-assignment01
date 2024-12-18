import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Mynav.css'
import Button from 'react-bootstrap/Button';
import img from "./assets/Intersect.png"
import Image from 'react-bootstrap/Image';


const Sec2 = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col xs={12} md={6}><Container><Image className='img-size' src={img} alt="" fluid /></Container></Col>
                <Col xs={12} md={6}><Container><h1>What Our Customers Say About Us</h1></Container>
                    <Container><p className='grey'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                        <br />
                        
                    </Container></Col>

            </Row>
        </Container>

    )
}

export default Sec2
