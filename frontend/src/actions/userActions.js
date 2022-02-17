import axios from 'axios'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      })
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const { data } = await axios.post(
        '/api/user/login',
        { email, password },
        config
      )
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
  
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    document.location.href = '/login'
  }

  export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_UPDATE_PROFILE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const flag={
         email:user.email,
         password:user.password
      }
      const { data } = await axios.put(`/api/user/${user.id}`, flag, config)
  
      dispatch({
        type: USER_UPDATE_PROFILE_SUCCESS,
        payload: data,
      })
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload: message,
      })
    }
  }