import React,{useEffect} from 'react'
import {Button,Dropdown} from 'react-bootstrap'
import {LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import Message from '../components/Message'

const AdminScreen=({history})=>{
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

    return (
        <>
        <div className="adminScreen">
        <h1>Welcome Neeraj!</h1>
        {
          userInfo?(<>
                  <div className="d-grid gap-2" >
           <Link to='/addProd' className='btn btn-light my-3' style={{padding:'15px',border:'2px solid black',marginRight:'10px'}}>
            Add Product
          </Link> 
          <Link to='/changePass' className='btn btn-light my-3' style={{padding:'15px',border:'2px solid black'}}>
            Change Email/Pass
          </Link>            
  <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
    Delete Product
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <LinkContainer to="/deleteProd/lehnga">
  <Dropdown.Item >Lehnga</Dropdown.Item>
  </LinkContainer>
  <LinkContainer to="/deleteProd/sherwani">
  <Dropdown.Item >Sherwani</Dropdown.Item>
  </LinkContainer>
  <LinkContainer to="/deleteProd/jewellery">
  <Dropdown.Item >Jewellery</Dropdown.Item>
  </LinkContainer>
  <LinkContainer to="/deleteProd/accessories">
  <Dropdown.Item >Accessories</Dropdown.Item>
  </LinkContainer>
  </Dropdown.Menu>
</Dropdown>
<br></br>
    <Button variant="info" onClick={logoutHandler}>LOG OUT</Button>
</div>
          </>):<Message variant='danger'>Not Authorized</Message> 
        }
        </div>
        </>
    )
}

export default AdminScreen