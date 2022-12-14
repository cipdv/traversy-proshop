import React, {useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

const PlaceOrderScreen = () => {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cartReducer)

    cart.itemsPrice = Number(cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)).toFixed(2)
    cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 10
    cart.taxPrice = Number((0.15 * cart.itemsPrice).toFixed())
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    const placeOrderHandler = () => {
        console.log('order')
    }
    

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>Shipping</h2>
                    <p>
                        <strong>Address</strong>
                        {cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                    </p>
                </ListGroup.Item>

                <ListGroup.Item>
                    <h2>Payment Method</h2>
                    <p>
                        <strong>Method: </strong>
                        {cart.paymentMethod}
                    </p>
                </ListGroup.Item>

                <ListGroup.Item>
                    <h2>Order Items</h2>
                    {cart.cartItems.length === 0 ? <Message>Your cart is empty</Message> : (
                        <ListGroup variant='flush'>
                            {cart.cartItems.map((item, index) => (
                                <ListGroup.Item key={index}>
                                    <Row>
                                        <Col md={1}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col>
                                            <Link to={`/product/${item.product}`}>
                                                {item.name}
                                            </Link>
                                        </Col>
                                        <Col md={4}>
                                            {item.qty} x ${item.price} = ${item.qty * item.price}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Order Summary</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Items</Col>
                            <Col>${cart.itemsPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Tax</Col>
                            <Col>${cart.taxPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Total</Col>
                            <Col>${cart.totalPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button type='button' className='btn-block' disabled={cart.cartItems === 0} onClick={placeOrderHandler}>Place Order</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderScreen
