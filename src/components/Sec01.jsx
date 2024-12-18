import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Mynav.css'
import Button from 'react-bootstrap/Button';
import img from "./assets/Intersect.png"
import Image from 'react-bootstrap/Image';


const Sec1 = () => {
    return (
        <Container className='mt-3'>
            <Row>
                <Col xs={12} md={6}><Container><h1>Dive into Delights <br />
                    Of Delectable <span className='textGreen'> Food</span></h1></Container>
                    <Container><p className='grey'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                        <br />
                        <Button className='green' variant=" rounded-pill">Order Now</Button>
                        <Button className='' variant=" rounded-pill">Watch Video </Button>
                    </Container></Col>
                <Col xs={12} md={6}><Container><Image className='img-size' src={img} alt="" fluid/></Container></Col>
            </Row>
        </Container>
        
    )
}

export default Sec1
