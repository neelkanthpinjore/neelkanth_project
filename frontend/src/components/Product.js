import React from 'react'
import { Link } from 'react-router-dom'
import { Card,Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Product = ({ product }) => {
  let id=1;
  return (
    <Card className='my-3 p-3 rounded'   style={{ width: '14rem',display:'inline-block',backgroundColor:'rgb(255,239,213)'}}>
      <Link to={`/viewProd/${product._id}`}>
        <Card.Img src={product.image} variant='top' alt="image"  />
      </Link>

      <Card.Body>
        <Link to={`/viewProd/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='h3'>₹{product.price}</Card.Text>
      </Card.Body>
      <LinkContainer to={`/viewProd/${product._id}`}>
      <Button>View Product</Button>
      </LinkContainer>
    </Card>
  )
}

export default Product
