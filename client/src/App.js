import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/userActions'
import './app.css'



function App() {

  useEffect(()=>
    store.dispatch(loadUser())
  ,[])

  

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
