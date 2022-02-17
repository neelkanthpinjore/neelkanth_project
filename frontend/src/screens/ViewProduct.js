import React, { useEffect } from 'react'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'
import { Link } from 'react-router-dom'

const ViewProduct=({match})=>{
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id))
    }
  }, [dispatch, match])

return(
    <>
    <div className="viewProd">
    <Link to={`/products/${product.category}`} className='btn btn-light my-3'>
            Go Back
    </Link>
    {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) :
      (
        <Row>
                <Col md={6}>
                  <Image src={product.image} alt="nice" fluid />
                </Col>
                <Col md={3}>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>Price: ₹{product.price}</ListGroup.Item>
                    <ListGroup.Item>
                      Description:" {product.description} "
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                </Row>
        )
      }
    </div>
         </>
)
}
export default ViewProduct