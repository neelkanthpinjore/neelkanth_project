import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCarousel from '../components/ProductCarousel'
import Footer from '../components/Footer'

const ContactScreen=()=>{
    return (<>
    <header id="contactContainer"> 
    <div className="contactElement">
    <i class="fa-solid fa-phone"></i> <p>+91 8168155247 <br></br>+91 9896198720</p>
    <i class="fa-solid fa-location-dot"></i><p>Gurudwara Road, Pinjore, Distt. Panchkula, Haryana</p>
    <i class="fa-solid fa-at"></i><p>neelkanthpinjore@gmail.com</p> <br></br>
    <Link to='/' class="button">
    Home
    </Link>
    </div>
    </header>
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'><i class="fa-brands fa-github">  harshdeep1808</i></Col>
        </Row>
      </Container>
    </footer>
    </>)
  }
  
  export default ContactScreen