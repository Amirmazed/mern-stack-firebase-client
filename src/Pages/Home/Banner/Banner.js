import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/download1.jpeg';
import banner2 from '../../../images/banner/download2.jpg';
import banner3 from '../../../images/banner/download3jpg.jpg';

//
// https://i.ibb.co/c1VWFpF/Banner1.jpg
// https://i.ibb.co/cYmhMyF/Banner2.jpg
// https://i.ibb.co/qF87RJd/Banner3.jpg
// https://i.ibb.co/q0nXwNC/Banner4.jpg

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>Discover the most engaging places</h1>
                        <p>Your journey starts here</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                     
                        <h1>Discover the most engaging places</h1>
                        <p>Your journey starts here</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1>Discover the most engaging places</h1>
                        <p>Your journey starts here</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;