import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Carousel, Image , Card ,Button} from 'react-bootstrap'
const ProductCarousel=()=>{
      return (
      <>
         <Carousel >
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="image"
      alt="First slide"
      style={{ width: '5rem'}}
    />
    <Carousel.Caption className='carousel-caption' >
      <div className="caption">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item >
    <img
      className="d-block w-100"
      src="image2"
      alt="Second slide"
    />
    <Carousel.Caption className='carousel-caption' >
      <div className="caption">
      <h3>Second slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
      </>
      )
}

export default ProductCarousel


 
 