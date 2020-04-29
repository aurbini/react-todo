import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './pages/Login'
import Todo from './pages/Todo'
import { useSelector } from "react-redux";



const PrivateRoute = ({component: Component, ...rest}) => {

  let isLoggedIn = useSelector(state => state.user)
  console.log(isLoggedIn)
  return (
    <Route {...rest} render={(props) => (
      isLoggedIn
        ? <Component {...props} />
        : <Redirect to='/login' />
    )}/>
  )
}


const Routes = () => {

  return ( 
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path='/todos' component={Todo} />
      </Switch>
    </Router>
    );
}
 
export default Routes