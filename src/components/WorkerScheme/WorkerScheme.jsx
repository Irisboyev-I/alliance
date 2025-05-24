import React from 'react'
import { workScheme } from "../../constants/data.js"
import "./WorkerScheme.scss"
import { Col, Container, Row } from 'react-bootstrap'

function WorkerScheme() {
  return (
    <section className="workerScheme">
      <Container>
        <h2 className="title">схема работы</h2>
        <Row>
          {
            workScheme.map(({ id, title, description }) => {
              return <Col lg='3' sm='6' key={id}>
                <div>
                  <span>0{id}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Col>
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default WorkerScheme