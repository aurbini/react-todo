import React from 'react'
import { NavLink, Nav } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'

const Logout = () => {

  const dispatch = useDispatch()

  return ( 
    <Nav>
      <NavLink href="/todos">
        Notes
      </NavLink>
      <NavLink onClick={() => dispatch(logout())}  href="#">
        Logout
      </NavLink>
    </Nav>
   );
}
 
export default Logout;