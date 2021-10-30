import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="https://i.ibb.co/DrbnQ9k/Campfire-with-a-vintage-kettle-next-to-the-beautiful-lake.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 >Not Just Better Care, But A Better Experience</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/wwGSfgf/Sun-rises-over-distant-Swiss-Alps.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Better doctor, Better treatement</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/18r4742/Motor-home-and-sunset-during-springtime.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Better doctor, Better treatement</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ryxM55b/Equipment-and-accessories-for-mountain-hiking-in-the-wilderness.jpg"
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-dark">Serving All People Through Exemplary Care</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;