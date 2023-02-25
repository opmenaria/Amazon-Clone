import { Routes, Route } from "react-router-dom"
import React, { useEffect } from 'react';
import Home from './components/Home';
import Checkout from './components/Checkout';
import LogIn from './components/LogIn';
import Header from './components/Header'
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Orders from "./components/Orders";
import Payment from "./components/Payment";

function App() {
  const [, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
