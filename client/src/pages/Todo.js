import React, { Fragment } from 'react';
import Modal from '../components/Modal'
import NoteTitle from '../components/NoteTitle'
import NoteBody from '../components/NoteBody'
import { Container, Row, Col } from 'reactstrap'

const Home = () => {
  return (
    <Container>
      <Modal />
      <Row className='mt-5'>
        <Col sm="6">
          <NoteTitle />
        </Col>
      </Row>
    </Container>
    );
}
 
export default Home;