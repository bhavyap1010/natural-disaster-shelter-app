import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import GetInvolved from './pages/GetInvolved';
import Remove from './pages/Remove';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/remove" element={<Remove />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
