import React, { useEffect } from 'react';
import {Table,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts,deleteProduct } from '../actions/productActions'

const DeleteScreen=({ history, match })=>{
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products} = productList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
    dispatch(listProducts(match.params.category))
  }, [dispatch])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProduct(id))
      window.location.reload()
    }
  }

     return (
         <>
         <Link to='/adminScreen' className='btn btn-light my-3'>
            Go Back
          </Link>
          <h1 style={{marginBottom:'25px'}}>Delete Product</h1>
          {(  
            loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : products.length===0? (
        <Message variant='danger'>No product available of Category: {match.params.category}</Message>
      ):
           <>
           <Table striped bordered hover>
  <thead>
    <tr >
      <th>ID</th>
      <th>Name</th>
      <th>Price</th>
      <th>Category</th>
      <th>.</th>
    </tr>
  </thead>
  <tbody>
    {
      products.map((product)=>(
        <>
        <tr key={product._id}>
        <td >{product._id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.category}</td>
        <td>
        <Button 
                        variant='danger'
                        className='btn-sm'
                        onClick={() => deleteHandler(product._id)}
        >  
                        <i className='fas fa-trash'></i>
                      </Button> 
        </td>
        </tr>
      </>
      ))
    }
  </tbody>
</Table>
            </>
          )}
         </>
     )
}

export default DeleteScreen;