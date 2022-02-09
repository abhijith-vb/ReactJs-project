import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Client from './components/Clients';
import { Button } from '@material-ui/core';
import { useState } from 'react';




function App() {

  
  

  return (
    <div className="App">


     
      
      <Router>
        <Header/>
        <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/client" element={<Client/>}/>
        </Routes>
      </Router>
            
    </div>
   
  );
}

export default App;
