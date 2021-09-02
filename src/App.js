import React from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import Setups from './Setups';
import $$$ from './$$$';
import YourAccount from './YourAccount';
import OnTop from './OnTop';
import SignUp from './SignUp';
import Checkout from './Checkout';

function App() {
  return (

    <div className="App">
      <div className="app">
      <Router>
      <Switch>
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/signup" >
          <SignUp />
        </Route>
        <Route path="/store">
          <Header />
          <$$$ />
        </Route>
        <Route path="/setups">
          <Header />
          <Setups />
        </Route>
        <Route path="/yourAccount">
          <Header />
          <YourAccount />
        </Route>
        <Route path="/OnTop">
          <Header />
          <OnTop />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
  </Router>
  </div>
</div>
);
}

export default App;
