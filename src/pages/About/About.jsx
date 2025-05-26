import React from 'react'
import "./About.scss"
import Navbar from '../../components/HeroSection/Navbar/Navbar'
import AboutBanner from '../../components/Banner/AboutBanner/AboutBanner'
import Relationships from '../../components/Relationships/Relationships'
import MainInfo from '../../components/MainInfo/MainInfo'
import Productions from '../../components/Productions/Productions'

function About() {
    return (
        <div className='about'>
            <Navbar textColors='black-edition' />
            <AboutBanner text='о компании' />
            <MainInfo />
            <Productions />
            <Relationships />
        </div>
    )
}

export default About