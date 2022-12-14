import React, {useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingScreen = ({history}) => {

    const cart = useSelector(state => state.cartReducer)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress?.address)
    const [city, setCity] = useState(shippingAddress?.city)
    const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode)
    const [country, setCountry] = useState(shippingAddress?.country)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2/>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
            <Form.Label>Address</Form.Label>
            <Form.Control type='text' placeholder='enter address' required value={address} onChange={(e)=>setAddress(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='name'>
            <Form.Label>City</Form.Label>
            <Form.Control type='text' placeholder='enter city' required value={city} onChange={(e)=>setCity(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='name'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type='text' placeholder='enter postal code' required value={postalCode} onChange={(e)=>setPostalCode(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='name'>
            <Form.Label>Country</Form.Label>
            <Form.Control type='text' placeholder='enter country' required value={country} onChange={(e)=>setCountry(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>Continue</Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen

