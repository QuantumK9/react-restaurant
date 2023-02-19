import Carousel from 'react-bootstrap/Carousel';
// import {Container} from 'semantic-ui-css';
import React from 'react';
import './slider.css'
import bar from './assets/bar.jpg'
import side from './assets/interior-side.jpg'
import interior from './assets/interior.jpg'
import { Container } from 'semantic-ui-react'

function slider() {
    return (
        <div>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bar}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={side}
                    alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-40"
                    src={interior}
                    alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
</div>
    );
}

export default slider;