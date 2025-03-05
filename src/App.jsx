import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/login';
import Body from './components/main/View/Body';
import Footer from './components/main/View/Footer';
import Navbar from './components/main/View/Navbar'
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <>
      <Navbar/>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/body" element={<Body />} />
            <Route path="/sginIn" element={<SignUp />} />
          </Routes>
        </Router>
      <Footer/>
    </>

  );
}

export default App;
