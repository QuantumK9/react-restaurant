import Carousel from 'react-bootstrap/Carousel';
// import {Container} from 'semantic-ui-css';
import React from 'react';
import './slider.css'
import bar from './assets/bar.jpg'
import side from './assets/interior-side.jpg'
import interior from './assets/interior.jpg'
import { Container } from 'semantic-ui-react'

function Slider() {
    return (
        <div id='carouselExampleControls' className="carousel slide" data-ride="carousel">
            <Carousel fade controls={false} indicators={true}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bar}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={side}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={interior}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;