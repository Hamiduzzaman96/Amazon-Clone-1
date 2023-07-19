import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home"
import { BrowserRouter as Router} from "react-router-dom";
import { Route } from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//import { Container } from "@mui/material";
import Login from "./Login";
// import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
//Firebase
import {onAuthStateChanged, auth} from './firebase';
import Footer from "./Footer";

const promise = loadStripe(
  "pk_test_51NU1bpHxHD2uIuppkckGynpiCziu8K028feVD4mACZlw96Sa4ZFPOSNnCzYDUquteUECpzvi0HFGrEFGoMoTcyaU00QYAlB9cS"
  );

function App() {
   const [{ basket,user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    const unsub = onAuthStateChanged(auth,(user) =>{

    if (user) {
      const uid = user.uid;
dispatch({
  type: "SET_USER",
  user: user,
});
}
else {
  dispatch({
    type: "SET_USER",
    user: null,
  });
}
});

  return()=> {
    unsub();
  };
},[]);

  ///

  return (
    <Router>
     
    <main>
     
        <div className="app">
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/payment">
          <Header/>
           <Elements stripe={promise}>
              <Payment/>
            </Elements>
            <Footer/>    
        </Route>
        <Route path="/" component={Home}  exact>
          <Header/>
            <Home/>
            <Footer/>
          
        </Route>
          
          </div>
        <Route path="/checkout" component={Checkout}>
          <Header/>
          <Checkout/>
          <Footer/>
         </Route>
            
            

    </main>

  
  </Router>
  );
}
export default App;
