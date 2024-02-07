import React from 'react'
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from './component/Contact'
import Home from './component/Home'

function App() {


  return (
    
    <BrowserRouter>     
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/" element={ <Contact/>}/>
    </Routes>
    </BrowserRouter>
    
    
  )
}

export default App


