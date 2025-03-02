import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './components/test';
import Body from './components/main/Body';
import Footer from './components/main/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/body" element={<Body />} />
        <Route path='/footer' element={<Footer/>} />
      </Routes>
    </Router>
  );
}

export default App;
