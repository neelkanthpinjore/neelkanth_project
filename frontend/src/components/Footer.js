import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = ({text}) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>{text}</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer