import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'
import { useHistory } from 'react-router-dom'

const Header = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const userLogin = useSelector(state=>state.userLoginReducer)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  const loginHandler = () => {
    history.push('/login')
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Link to ='/'>
          <Navbar.Brand>Proshop</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to='/cart'>
              <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
            </Link>
            {userInfo ? (
              <div>
                <Link to='/profile'>
                  <i className="fas fa-user"></i>Profile
                </Link>
                <Nav.Link onClick={logoutHandler}><i className="fas fa-user"></i>Logout</Nav.Link>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <Nav.Link onClick={loginHandler}><i className="fas fa-user"></i>Login</Nav.Link>
                </Link>
              </div>
              
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
