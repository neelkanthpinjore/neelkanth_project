import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    productListReducer,
    productDetailsReducer,
    productCreateReducer,
    productDeleteReducer,
  } from './reducers/productReducer.js'

  import {
    userLoginReducer,
    userUpdateProfileReducer,
  } from './reducers/userReducer.js'

/*
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer
} from './reducers/productReducers'

import {
  userLoginReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
  productList: productListReducer,//contains list of products sroted by category to be shown on homepage
  productDetails: productDetailsReducer,//contains single product to be shown on product page
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  userLogin: userLoginReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdate: userUpdateReducer
})
*/

const reducer = combineReducers({
    productList: productListReducer,//contains list of products sroted by category to be shown on homepage
    productDetails: productDetailsReducer,//contains single product to be shown on product page
    userLogin: userLoginReducer,
    productCreate: productCreateReducer,
    productDelete: productDeleteReducer,
    userUpdateProfile: userUpdateProfileReducer
  })

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
