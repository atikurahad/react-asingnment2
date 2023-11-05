import React from 'react';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/project" element={<Project />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>

    <Footer/>
    </div>
  );
}

export default App;
