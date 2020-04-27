import React from 'react';
import Todos from "./components/Todos"; 
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from './components/Modal'
import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import store from './store'


function App() {

  
  return (
    <Provider store={store}>
      <Header />
      <Container >
        <Modal style={{marginTop: '10rem'}}/> 
        <Todos />
      </Container> 
    </Provider>
  );
}

export default App;
