import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Form,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { updateUserProfile } from '../actions/userActions'

const ChangePassword=({match,history})=>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success,loading,error } = userUpdateProfile

   
  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
        setEmail(userInfo.email)
    }
  }, [dispatch, history, userInfo, success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: userInfo._id, email, password }))
    }
  }

    return (
      <>
      <Link to='/adminScreen' className='btn btn-light my-3'>
      Go Back
    </Link>
    <h1 style={{marginBottom:'25px'}}>Change EMAIL/Password</h1>
    {message && <Message variant='danger'>{message}</Message>}
    {success && <Message variant='success'>Profile Updated</Message>}
    {!userInfo?<Message variant='danger'>Not Authorized</Message> :loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) :(
          <>
             <Form onSubmit={submitHandler}>
    <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary' style={{marginTop:'15px'}}>
              Update
            </Button>
               </Form>
          </>
        )}
   </>
    )
}

export default ChangePassword