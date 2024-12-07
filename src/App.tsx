import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { Home } from './components/Home';
import { Activity } from './components/Activity';
import { Footer } from './components/Footer';
import { Club } from './components/Club';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoatdong" element={<Activity />} />
        <Route path="/caulacbo" element={<Club />} />
        <Route path="/sechia" element={<div>Sẻ chia & đóng góp</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
