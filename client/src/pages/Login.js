import React from 'react';
import LoginForm from '../components/Login'
import Register from '../components/Register'
import { Container, Col, Row } from 'reactstrap'

const Login = () => {

  return (
    <Container >
      <Row className='justify-content'>
        <Col xs={12} sm={{size: 6, offset: 3}} 
          style={{
            backgroundColor: '#eee', 
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            boxShadow: "3px 3px 5px 6px #ccc",
            padding: '3rem'}}>
          <LoginForm /> 
          <Register 
            style={{marginTop: '2rem'}} />
        </Col> 
      </Row>
    </Container>
    );
}
 
export default Login;