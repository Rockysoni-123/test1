import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllNews from './pages/AllNews';
import TopHeadings from './pages/TopHeadings';
import Country from './pages/Country';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllNews />} />
        <Route path="/top-headlines/:category" element={<TopHeadings />} />
        <Route path="/country/:code" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;