import { Routes, Route } from "react-router-dom"
import React, { useEffect } from 'react';
import Home from './components/Home';
import Checkout from './components/Checkout';
import LogIn from './components/LogIn';
import Header from './components/Header'
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";
import Footer from "./components/Footer";

function App() {
  const [{ user }, dispatch] = useStateValue()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in
        dispatch({
          type: 'SET-USER',
          user: authUser
        })
      } else {
        //logged out
        dispatch({
          type: 'SET-USER',
          user: null
        })
      }
    })
    return (
      unsubscribe()
    )
  }, [dispatch])
  console.log(user);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
