import React from 'react';
import Modal from '../components/Modal'
import NoteTitle from '../components/NoteTitle'
import { Container, Row, Col } from 'reactstrap'

const Home = () => {
  return (
    <Container>
      <Modal />
      <Row className='mt-5'>
          <NoteTitle />
      </Row>
    </Container>
    );
}
 
export default Home;