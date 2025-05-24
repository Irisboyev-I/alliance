import React from 'react'
import "./Footer.scss"
import { footerData } from "../../constants/data.js"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo-black.png"
import { FaEnvelope, FaInstagram, FaLocationArrow, FaVk } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg='12' className='footer-top'>
            <Col lg='1' className='d-flex align-items-center' ><Link to={'/'}><img src={logo}></img></Link></Col>
            <Col lg='2' className='d-flex align-items-center' ><span>+7 (499) 686-10-14</span></Col>
            <Col lg='4' className='d-flex align-items-center' ><FaLocationArrow className='fontawesome' /> <p className="adress">г. Мосвка, Холодильный пер. 4к1с8</p></Col>
            <Col lg='3' className='d-flex align-items-center' ><FaEnvelope className='fontawesome' /> <p className="adress">a.dragunov@tdaliance.ru</p></Col>
            <Col lg='1' className='d-flex align-items-center' ><FaVk className='fontawesome' /> <FaInstagram className='fontawesome' /></Col>
          </Col>
          <hr />
          {
            footerData.map(({ id, title, links }) => {
              return <Col lg='4' key={id} className='footer-nav'>
                <div className="title">
                  <p>{title}</p>
                  <ul>
                    {
                      links.map(({ li, href, id }) => {
                        return <Link className='text-decoration-none' to={href} key={id}><li>{li}</li></Link>
                      })
                    }
                  </ul>
                </div>
              </Col>
            })
          }
        </Row>
      </Container>
    </footer>
  )
}

export default Footer