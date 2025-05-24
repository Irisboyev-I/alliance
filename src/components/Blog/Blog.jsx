import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogPosts } from "../../constants/data.js"
import "./Blog.scss"
import { Container, Row } from 'react-bootstrap';

function Blog() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
    };

    return (
        <div className='blog'>
            <Container>
                <h2 className="title">Блог экспертов в области производства</h2>
                <Row className='justify-content-center align-items-center'>
                    <Slider {...settings}>
                        {
                            blogPosts.map(({ id, title, excerpt }) => {
                                return <div key={id} className='blogCard' >
                                    <div className="non-vision"></div>
                                    <div className="text">
                                        <h3>{title}</h3>
                                        <p>{excerpt}</p>
                                    </div>
                                </div>
                            })
                        }
                    </Slider>
                </Row>
            </Container>
        </div>
    )
}

export default Blog