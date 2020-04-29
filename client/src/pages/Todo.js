import React, { Fragment } from 'react';
import Modal from '../components/Modal'
import Todos from '../components/Todos'
import { Container } from 'reactstrap'

const Home = () => {
  return (
    <Container>
      <Modal />
      <Todos />
    </Container>
    );
}
 
export default Home;