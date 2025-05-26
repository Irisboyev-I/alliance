import React from 'react'
import "./AboutBanner.scss"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AboutBanner({ text, pageName }) {
    return (
        <div className='aboutBanner'>
            <Container>
                <h2 className="title">{text}</h2>
                <p className="path"><Link to={'/'} className='text-decoration-none'>Главная - </Link><span>{pageName}</span></p>
            </Container>
        </div>
    )
}

export default AboutBanner