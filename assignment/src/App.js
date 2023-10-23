import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Profile from './Pages/Profile';
import MyArchitect from './Pages/MyArchitect';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes> 
          <Route path="/" element={<Login />} /> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/architect" element={<MyArchitect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
