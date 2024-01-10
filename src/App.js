import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import Registeration from './components/registeration/Registeration';
import  Login from './components/login/Login';


function App() {


 
  return (
   <BrowserRouter>
    <Routes>
    {/* <Route path="/" element={<Registeration />} /> */}
    <Route exact path="/" element={<Login />}/>
    <Route exact path="/home" element={< HomePage />} />
     
    
  </Routes>
</BrowserRouter>
  );
}

export default App;
