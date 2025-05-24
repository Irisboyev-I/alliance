import React from 'react'
import "./MainInfo.scss"
import { Col, Container, Row } from 'react-bootstrap'
import LogoPhoto from "../../assets/Group 57.png"
import Advantages from '../HeroSection/Advantages/Advantages'

function MainInfo() {
    return (
        <div className='mainInfo'>
            <Container>
                <Row className='align-items-center justify-content-between'>
                    <Col lg='4' className='photoSide'>
                        <img src={LogoPhoto} alt="Logo" />
                    </Col>
                    <Col lg='7'>
                        <h2 className="title">мы - эксперты в области производства химии</h2>
                        <p>Разнообразный и богатый опыт говорит нам, что перспективное планирование однозначно фиксирует необходимость поставленных обществом задач! Есть над чем задуматься: ключевые особенности структуры проекта могут быть объединены в целые кластеры себе подобных. Интерактивные прототипы, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут описаны максимально подробно. Значимость этих проблем настолько очевидна, что перспективное планирование играет важную роль в формировании системы массового участия.</p>
                    </Col>
                </Row>
                <Advantages textColors='blackColors' />
            </Container>
        </div>
    )
}

export default MainInfo