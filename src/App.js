import { Routes, Route } from "react-router-dom"
import React, { useEffect } from 'react';
import Home from './components/Home';
import Checkout from './components/Checkout';
import LogIn from './components/LogIn';
import Header from './components/Header'
import { auth } from "./firebase";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Orders from "./components/Orders";
import Payment from "./components/Payment";
import Jewlery from "./components/Jewlery";
import { useDispatch } from "react-redux";
import MensFas from "./components/MensFas";
import WomFas from "./components/WomFas";
import Electronic from "./components/Electronic";
import AllItem from "./components/Allitem";
import axios from "axios";
import ItemDetail from "./components/ItemDetail";

function App() {
  const dispatch = useDispatch()

  const fetchApi = async () => {
    const resApi = await axios.get('https://fakestoreapi.com/products/?limit=8')
    if (resApi) {
      dispatch({
        type: "FETCH_API",
        apiData: resApi.data
      })
    }
    const resJewl = await axios.get('https://fakestoreapi.com/products/category/jewelery/?limit=4')
    if (resJewl) {
      dispatch({
        type: "FETCH_JEWL",
        resJewl: resJewl.data
      })
    }
    const resElec = await axios.get('https://fakestoreapi.com/products/category/electronics/?limit=4')
    if (resElec) {
      dispatch({
        type: "FETCH_ELEC",
        resElec: resElec.data
      })
    }
    const resMens = await axios.get(`https://fakestoreapi.com/products/category/men's clothing/?limit=4`)
    if (resMens) {
      dispatch({
        type: "FETCH_MENS",
        resMens: resMens.data
      })
    }
    const resWoms = await axios.get(`https://fakestoreapi.com/products/category/women's clothing/?limit=4`)
    if (resWoms) {
      dispatch({
        type: "FETCH_WOMS",
        resWoms: resWoms.data
      })
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

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
        <Route path="/allitem" element={<AllItem />} />
        <Route path="/jewelery" element={<Jewlery />} />
        <Route path="/electronic" element={<Electronic />} />
        <Route path="/mensfas" element={<MensFas />} />
        <Route path="/womfas" element={<WomFas />} />
        <Route path="/details" element={<ItemDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
