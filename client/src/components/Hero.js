import React from 'react';
import { Jumbotron } from 'reactstrap';


const Hero = () => {
  return (
    <Jumbotron>
      <h1 className="display-3">Welcome to your notetaker</h1>
      <p className="lead">Please Login to save your todos.</p>
  </Jumbotron>
    );
}
 
export default Hero;