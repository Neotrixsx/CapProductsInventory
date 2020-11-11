import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import LoginNavLinks from './component/LoginNavLinks';
import Login from './pages/login/login';
import Registration from './pages/registration/registration';
import Home from './pages/home/home';
import NotFoundPage from './pages/404/404';


function App() {
  return (
    <Router>
      <>
        
        <Switch>
          <Route exact path="/" component={Login} />
          <Redirect from="/login" to="/Login" />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/" component={AllProductsPage} /> */}
          <Route component={NotFoundPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
