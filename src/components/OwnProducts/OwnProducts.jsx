import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import agtech from "../../assets/AGTECH.png"
import ap from "../../assets/AP.png"
import "./OwnProducts.scss"
import { Link } from 'react-router-dom'

function OwnProducts() {
    return (
        <div className='ownProducts'>
            <Container>
                <h2 className="title">собственные торговые марки</h2>
                <Row>
                    <Col lg='6'>
                        <Link to={'/'} className='text-decoration-none'>
                            <div className="boxNow">
                                <img src={agtech} alt="" />
                                <div className="text">
                                    <h3>Автохимия AG-Tech</h3>
                                    <p>Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для поставленных обществом задач.</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col lg='6'>
                        <Link to={'/'} className='text-decoration-none'>
                            <div className="boxNow">
                                <img src={ap} alt="" />
                                <div className="text">
                                    <h3>Автохимия AP</h3>
                                    <p>Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для поставленных обществом задач.</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OwnProducts