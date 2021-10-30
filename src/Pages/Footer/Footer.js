import React from 'react';
import { Col, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className='bg-dark text-light'>
            <div>
                <Row className='p-5'>
                    <Col lg={4} md={3}>
                        <h3>About</h3>
                        <p className='text-secondary'>The Easy Camping story began with waves—gorgeous, glassy, barrelling waves. They were crashing on California’s Central Coast at Andrew Molera State Park as Hipcamp founder and CEO Alyssa Ravasio watched in</p>
                    </Col>
                    <Col lg={4} md={3}>
                        <h3>Our Offers</h3>
                        <h6 className='text-secondary'>Motorhome</h6>
                        <h6 className='text-secondary'>Luxery Tent</h6>
                        <h6 className='text-secondary'>Classic-Tent</h6>
                        <h6 className='text-secondary'>Tent</h6>
                        <h6 className='text-secondary'>Forest</h6>
                        <h6 className='text-secondary'>Small Trailer</h6>
                    </Col>

                    <Col lg={4} md={3} className='footer-link'>
                        <h3>Get Social</h3>
                        <div className="d-flex justify-content-center">
                            <h2> <a className="text-light" href="https://www.facebook.com/Sr.Faisu/"> <i className="fab fa-facebook me-3"></i></a></h2>

                            <h2><a className="text-light" href="https://github.com/ishrafil2233"><i className="fab fa-github me-3"></i></a> </h2>

                            <h2> <a className="text-light" href="https://www.instagram.com/ih__faisal/"><i className="fab fa-instagram-square me-3"></i></a></h2>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;