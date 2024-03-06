import React from 'react'
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './Signup';
import Home from './Home';
function MainApp() {
  return (
    <>
       <Router>
       <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/home" element={<Home/>} />
       </Routes>
       </Router>
  
    </>
  )
}

export default MainApp