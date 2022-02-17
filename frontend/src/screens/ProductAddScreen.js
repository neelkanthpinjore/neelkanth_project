import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  createProduct,
} from '../actions/productActions'

const ProductAddScreen=({history})=>{
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)
 
  const dispatch = useDispatch()
  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
    if (successCreate) {
      history.push(`/viewProd/${createdProduct._id}`)
    } 
  }, [dispatch, history, successCreate])
  
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const { data } = await axios.post('/api/upload', formData, config)
      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
       createProduct({
        name,
        price,
        image,
        category,
        description
      })
    )
  }

      return (
        <>   
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
          <Link to='/adminScreen' className='btn btn-light my-3'>
            Go Back
          </Link>
          <h1 style={{marginBottom:'10px'}}>Add Product</h1>
          {!userInfo?<Message variant='danger'>Not Authorized</Message> :loadingCreate ? (
          <Loader />
        ) : errorCreate ? (
          <Message variant='danger'>{errorCreate}</Message>
        ) :(
          <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter Name" value={name}
                onChange={(e) => setName(e.target.value)} />
      </Form.Group>

  <Form.Group className="mb-3" controlId="price">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" placeholder="Price" value={price}
                onChange={(e) => setPrice(e.target.value)} />
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="description">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Description" value={description}
                onChange={(e) => setDescription(e.target.value)}/>
  </Form.Group>
   
  <Form.Group className="mb-3" controlId="category">
  <Form.Label>Category: </Form.Label>
  <Form.Control type="text" placeholder="lehnga/sherwani/jewellery/accessories" value={category}
                onChange={(e) => setCategory(e.target.value)} />
</Form.Group>

<Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              
              <Form.Group controlId="formFile" className="mb-3">
             <Form.Control type="file"  onChange={uploadFileHandler}/>
              </Form.Group>
              {uploading && <Loader />}
            </Form.Group>

  <Button variant="primary" type="submit" style={{marginTop:'15px',marginBottom:'10px'}}>
    Submit
  </Button>
</Form>)}
        </>
      )
}

export default ProductAddScreen