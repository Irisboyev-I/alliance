import React from 'react'
import "./Productions.scss"
import { productionData } from "../../constants/data.js"
import { Col, Container, Row } from 'react-bootstrap'

function Productions() {
    return (
        <div className='productions'>
            <Container>
                <Row>
                    {
                        productionData.map(({ title, description, id }) => {
                            return <Col lg='6' key={id}>
                                <h2 className="title">{title}</h2>
                                <p>{description}</p>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Productions