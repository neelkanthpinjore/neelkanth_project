import React from 'react'
import ProductCarousel from '../components/ProductCarousel'
import {Link,Redirect} from 'react-router-dom'

const Homescreen=()=>{
  return (<>
        <header id="showcase">
          <div className="showcaseElement">
      <h1>Welcome To Neelkanth</h1>
    <p>The Palace of Beauty</p>
    <Link to='/contact' className="button">
    Contact Us
    </Link>
          </div>
  </header>
  </>)
}

export default Homescreen