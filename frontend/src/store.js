// import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
//reducers
import { productListReducer, productDetailsReducer } from '../src/reducers/productReducer'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const reducers = { productListReducer, productDetailsReducer, cartReducer, userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer }
const initialState = {
    cartReducer: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage},
    userLoginReducer: { userInfo: userInfoFromStorage},
}
const middleware = [thunk]

const store = configureStore({
    reducer: reducers,
    preloadedState: initialState,
    middleware: middleware
})

export default store