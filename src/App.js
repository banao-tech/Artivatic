import React from "react";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./containers/Home/Home.js";
import Contact from "./containers/Contact/contact";
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Product from "./containers/Product/product.js";
import Team from "./containers/team/team.js";
import Aboutus from "./containers/aboutus/aboutus"
import "./App.css";

function App() {
  const history = createBrowserHistory();

  return (
    <div className="App">
      <Header />
      <Router history={history}>
        <Route
          exact
          path="/">
          <Redirect to="/home" />
        </Route>
        <Route path={"/home"} component={Home}></Route>
        <Route path={"/contact-us"} component={Contact}></Route>
        <Route path={"/products"} component={Product}></Route>
        <Route path={"/teams"} component={Team}></Route>
        <Route path={"/Aboutus"} component={Aboutus}></Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
