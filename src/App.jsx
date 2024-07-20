
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css'; // Ant Design uslublarini import qilish
import Login from './components/login/Login';
import Register from './components/register/Register'; // Register sahifasini import qilish
import Home from './components/home/Home'; 
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
