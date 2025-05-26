import React from 'react'
import "./ProductCategories.scss"
import { productCategories } from "../../constants/data.js"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductCategories({ remove }) {
    return (
        <div className='productCategories '>
            <Container>
                <h2 className={`title ${remove}`}>Контрактное производство</h2>
                <Row>
                    {
                        productCategories.map(({ id, title, description, image }) => {
                            return <Col lg='4' md='6' className='blxBox' key={id}>
                                <Link to='/' className="text-decoration-none">
                                    <div className='cont'>
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                    </div>
                                    <img src={image} alt={title} />
                                </Link>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default ProductCategories