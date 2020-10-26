import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Checkout from "./Checkout";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__container">
          <Switch>
            <Route path="/category/:categoryId">
              <div className="app__header">
                <Header />
              </div>
              <div className="app__body">
                <Sidebar />
                <Main />
              </div>
            </Route>

            <Route path="/checkout">
              <div className="app__header">
                <Header />
              </div>
              <div className="app__body">
                <Checkout />
              </div>
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
