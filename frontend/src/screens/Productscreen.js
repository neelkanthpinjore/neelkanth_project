import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col,Badge } from 'react-bootstrap'
import Product from '../components/Product.js'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import { listProducts } from '../actions/productActions'

const Productscreen=({match})=>{
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products} = productList
  useEffect(() => {
    dispatch(listProducts(match.params.category))
  }, [dispatch])
       return (
           <>
           <Link to='/' className='btn btn-light my-3'>
            Go Back
          </Link>
          <h1> Latest {match.params.category}</h1>
              {
             products.length===0?<Message variant='danger'>Out of Stock!</Message>
             : loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
               <>
               <div className="productContainer" key={product._id}> 
               <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
               </div>
              </>
            ))}
          </Row>
        </>
       )}
       </>
    )
}

export default Productscreen