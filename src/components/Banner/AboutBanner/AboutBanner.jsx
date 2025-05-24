import React from 'react'
import "./AboutBanner.scss"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AboutBanner({ text }) {
    return (
        <div className='aboutBanner'>
            <Container>
                <h2 className="title">{text}</h2>
                <p className="path"><Link to={'/'} className='text-decoration-none'>Главная - </Link><span>О компании</span></p>
            </Container>
        </div>
    )
}

export default AboutBanner