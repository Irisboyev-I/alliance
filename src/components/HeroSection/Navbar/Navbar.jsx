import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Logo from "../../../assets/logo.png"
import { menuLink, Contact } from "../../../constants/data.js"
import './Navbar.scss'
import { Link } from 'react-router-dom'

function Navbar({ textColors }) {
  return (
    <nav className={textColors}>
      <Container>
        <Row className='align-items-center'>
          <Col xs='2' className='logoo'><Link to={'/'}><img src={Logo} alt="" /></Link></Col>
          <Col md='7' sm='10'>
            <ul className='menuLink'>
              {
                menuLink.map(({ id, text, slug }) => {
                  return <Link key={id} to={slug} className='text-decoration-none'><li>{text}</li></Link>
                })
              }
            </ul>
          </Col>
          <Col className='dn'>
            <ul className='contactInfo'>
              {
                Contact.map(({ id, contactInfo }) => {
                  return <li key={id}>{contactInfo}</li>
                })
              }
            </ul>
          </Col>
        </Row>
      </Container>
    </nav>
  )
}

export default Navbar