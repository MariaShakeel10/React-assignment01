import React from 'react'
import './Mynav.css'
import Badge from 'react-bootstrap/Badge';


const Footer = () => {
    return (
        <div className='d-flex justify-content-evenly mt-5'>
            <div>
                <h4><Badge className="green" bg="secondary">F</Badge>oodi</h4>
                <p className="grey">Savor the artistry where every dish is a culinary masterpiece</p>
            </div>
            <div>
                <h6>Useful links</h6>
                <p className="grey">About Us</p>
                <p className="grey">Events</p>
                <p className="grey">Blogs</p>
                <p className="grey">FAQs</p>
            </div> <div>
                <h6>Main Menu</h6>
                <p className="grey">About Us</p>
                <p className="grey">Events</p>
                <p className="grey">Blogs</p>
                <p className="grey">FAQs</p>
            </div> <div>
                <h6>Contact Us</h6>
                <p className="grey">About Us</p>
                <p className="grey">Events</p>
                <p className="grey">Blogs</p>
                <p className="grey">FAQs</p>
            </div>
        </div>
    )
}

export default Footer
