import React from 'react';
import Modal from '../components/Modal'
import NoteTitle from '../components/NoteTitle'
import { Container, Row } from 'reactstrap'

const Home = () => {
  return (
    <Container fluid={true}>
      <Row style={{justifyContent: 'center'}}>
        <Modal />
      </Row>
      <Row 
        className='mt-5'
        style={{
          marginTop: '3rem',  
          justifyContent: 'center'}}
      >
        <NoteTitle />
      </Row>
    </Container>
    );
}
 
export default Home;