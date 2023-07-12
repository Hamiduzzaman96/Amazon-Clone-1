import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home"
import { BrowserRouter as Router} from "react-router-dom";
import { Route } from "react-router-dom";
import Checkout from "./Checkout";
import { Container } from "@mui/material";
import Login from "./Login";

function App() {
  return (
    <Router>
     
     <Header/>
    <main>
     
        <div className="app">
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/" component={Home}  exact/>
          </div>
          <Route path="/checkout" component={Checkout}/>

    </main>

  
  </Router>
  );
}
export default App;
