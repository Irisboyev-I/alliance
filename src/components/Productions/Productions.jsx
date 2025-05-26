import React from 'react'
import "./Productions.scss"
import { productionData } from "../../constants/data.js"
import { Col, Container, Row } from 'react-bootstrap'

function Productions() {
    return (
        <div className='productions'>
            <Container>
                <Row className='align-items-center justify-content-between'>
                    {
                        productionData.map(({ title, description, id }) => {
                            return <Col lg='6' key={id}>
                                <h2 className="title">{title}</h2>
                                <p>{description}</p>
                            </Col>
                        })
                    }
                    <Col lg='4'>
                        <img className='gril' src={productionData[0].image} alt="Gril" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Productions