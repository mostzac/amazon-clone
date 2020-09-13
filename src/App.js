import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

//stripe Publishable api key
const promise = loadStripe(
  "pk_test_51HPwfJJhGEF1DNHk3hQdMuDdbl08GDxcyrS4G8K82VMiEqpDpBWEbuDk25tE4jlEkasoHw3mssdcBFjPscm6XuPy00Dj6O4AZF"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("The User is >>>", authUser);

      if (authUser) {
        //the user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user if logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []); // leave [] empty, useEffect will only run once when the app componect loads

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/roders">
            <Orders />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
