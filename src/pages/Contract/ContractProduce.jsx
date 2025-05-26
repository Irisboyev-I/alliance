import React from 'react'
import "./ContractProduce.scss"
import AboutBanner from '../../components/Banner/AboutBanner/AboutBanner'
import Navbar from '../../components/HeroSection/Navbar/Navbar'
import ProductCategories from '../../components/ProductCategories/ProductCategories'
import { Col, Container, Row } from 'react-bootstrap'

function ContractProduce() {
    return (
        <div className='contract'>
            <Navbar textColors='black-edition' />
            <AboutBanner text='Контрактное производство' pageName='Контрактное производство' />
            <ProductCategories remove='d-none' />
            <Container>
                <Row>
                    <Col xs='12'>
                        <div className="titleSEO">
                            <h4>SEO Заголовок</h4>
                            <p>Также как дальнейшее развитие различных форм деятельности предполагает независимые способы реализации существующих финансовых и административных условий. Каждый из нас понимает очевидную вещь: курс на социально-ориентированный национальный проект играет важную роль в формировании как самодостаточных, так и внешне зависимых концептуальных решений. Внезапно, интерактивные прототипы набирают популярность среди определенных слоев населения, а значит, должны быть.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContractProduce