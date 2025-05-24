import React from 'react'
import "./Home.scss"
import WorkerScheme from '../../components/WorkerScheme/WorkerScheme'
import ProductCategories from '../../components/ProductCategories/ProductCategories'
import OwnProducts from '../../components/OwnProducts/OwnProducts'
import Relationships from '../../components/Relationships/Relationships'
import Blog from '../../components/Blog/Blog'
import { Col, Container, Row } from 'react-bootstrap'
import HeroSlider from '../../components/HeroSection/HeroSlider/HeroSlider'
import Advantages from '../../components/HeroSection/Advantages/Advantages'
import Navbar from "../../components/HeroSection/Navbar/Navbar"

function Home() {
    return (
        <div>
            <div className="hero">
                <Navbar />
                <Container>
                    <Row>
                        <Col md='10'><HeroSlider /> </Col>
                        <Col xs='auto' className='dn'><Advantages /></Col>
                    </Row>
                </Container>
            </div>
            <WorkerScheme />
            <ProductCategories />
            <OwnProducts />
            <Relationships />
            <Blog />
        </div>
    )
}

export default Home