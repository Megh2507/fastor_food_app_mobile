import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
import Login from './components/Login';
import Otp from './components/Otp';
import Navbar from './components/Navbar';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import RestDescript from './components/RestDescript';
function App() {
  return (
    <div >
      {/* <Login/> */}
      {/* <Otp/> */}
      {/* <Home/> */}
      {/* <RestDescript/> */}
      <Router>
  <Routes>
  <Route path="/" exact element={<Login/>} />
  <Route path="/otp" exact element={<Otp/>} />
  <Route path="/home" exact element={<Home/>}/>
  <Route path="/restdescript" exact element={<RestDescript/>}/>
  </Routes>
</Router>
      
    </div>
  );
}

export default App;
