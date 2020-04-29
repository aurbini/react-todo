import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const Home = (props) => {
  return (
    <Container>
      <Jumbotron>
        <h1 className="display-3">Welcome to your notetaker</h1>
        <p className="lead">Please Login to save your todos.</p>
      </Jumbotron>
    </Container>
  );
};

export default Home;