import React from 'react'
import "./OwnProduce.scss"
import Navbar from '../../components/HeroSection/Navbar/Navbar'
import AboutBanner from '../../components/Banner/AboutBanner/AboutBanner'
import OwnProducts from '../../components/OwnProducts/OwnProducts'

function OwnProduce() {
  return (
    <div className='ownProduce'>
      <Navbar textColors='black-edition' />
      <AboutBanner text='Собственные торговые марки' pageName='Собственные торговые марки' />
      <OwnProducts remove="d-none" />
    </div>
  )
}

export default OwnProduce