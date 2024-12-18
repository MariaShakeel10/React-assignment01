import React from 'react'
import imgfood from "./assets/pngwing 4.png"
import './Mynav.css'

import Card from 'react-bootstrap/Card';


function Mycards() {
  return (
    <>
    <h1 className='text-center'>Popular Catagories</h1>
    <div className='d-flex justify-content-evenly mt-4'>
            <Card style={{ width: '18rem' }}><div className='circle mt-3'>
      <Card.Img className='food-img m-auto' variant="top" src={imgfood} /></div>
      <Card.Body className='text-center'>
        <Card.Title>Main Dish</Card.Title>
        <Card.Text className='grey'>
          (86 dishes)
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}><div className='circle mt-3'>
      <Card.Img className='food-img m-auto' variant="top" src={imgfood} /></div>
      <Card.Body className='text-center'>
        <Card.Title>Main Dish</Card.Title>
        <Card.Text className='grey'>
          (86 dishes)
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}><div className='circle mt-3'>
      <Card.Img className='food-img m-auto' variant="top" src={imgfood} /></div>
      <Card.Body className='text-center'>
        <Card.Title>Main Dish</Card.Title>
        <Card.Text className='grey'>
          (86 dishes)
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Mycards
