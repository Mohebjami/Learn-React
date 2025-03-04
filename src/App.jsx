import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/main/View/login';
import Body from './components/main/View/Body';
import Footer from './components/main/View/Footer';
import Navbar from './components/main/View/Navbar'

function App() {
  return (
    <>
      <Navbar/>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/body" element={<Body />} />
          </Routes>
        </Router>
      <Footer/>
    </>

  );
}

export default App;
