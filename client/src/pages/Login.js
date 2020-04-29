import React from 'react';
import LoginForm from '../components/Login'
import Register from '../components/Register'
import { Container, Col, Row } from 'reactstrap'

const Login = () => {

  return (
    <Container >
      <Row className='justify-content'>
        <Col xs={12} sm={{size: 6, offset: 3}} style={{backgroundColor: '#eee'}}>
          <LoginForm /> 
          <Register />
        </Col> 
      </Row>
    </Container>
    );
}
 
export default Login;