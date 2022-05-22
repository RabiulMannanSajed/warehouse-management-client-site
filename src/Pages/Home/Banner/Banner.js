import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Image/Banner/spice-banner-02.jpg';
import banner2 from '../../../Image/Banner/spice-banner-2.jpg';
import './Banner.css';
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='banner-text'>Our Warehouse </h3>
                    <p className='banner-text' >We have three large warehouse were
                        we  Stored our goods.we stored all dry spices products items that's
                        why we don't need to use any kind of (Formaldehyde).In our warehouse
                        adequate lighting and ventilation system  that's why we don't need to
                        worry about any kind of fungi problem.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src={banner2}
                    alt="second slide"
                />

                <Carousel.Caption>
                    <h3 className='banner-text' >Lab Test</h3>
                    <p className='banner-text' >we don't compromise on food quality we
                        have a lab to test the quality of all spices products when they come
                        from our supplier. after passing all kinds of lab tests we permit them
                        to be stored in our warehouse. we have also government-certified permission..</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;