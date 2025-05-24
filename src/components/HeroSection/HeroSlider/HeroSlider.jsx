import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "../../../constants/data.js"
import "./HeroSlider.scss"
import { Col, Container } from 'react-bootstrap';

function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className='HeroSlider'>
      <Container>
        <Slider {...settings}>
          {slides.map(({ id, title, description }) => (
            <div key={id} className='textContainer'>
              <div className='textBox'>
                <h1>{title}</h1>
                <p>{description}</p>
                <button>Подробнее о компании</button>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  )
}

export default HeroSlider