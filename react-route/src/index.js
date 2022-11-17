import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import './index.css';
//import App from './App';
import About from './components/About';
import Contect from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import Blogs from './components/Blogs';


export default function App(){

  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Blogs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contect/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

