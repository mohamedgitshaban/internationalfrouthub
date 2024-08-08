import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepages from './pages/Homepages';
import Header from './Layout/Header';
import Footer from './Layout/Footer ';
import ScrollToTop from './Layout/ScrollToTop';
import ContactPage from './pages/ContactUs';
import FetchServices from './pages/FetchServices';
import SingleServices from './pages/SingleServices';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import SingleProduct from './pages/SingleProduct';
import Frozen from './pages/Frozen';
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
   <BrowserRouter>
   <Header />
   <a href='https://wa.me/+201005400407' target='_blank' className=' fixed bottom-8 right-8 z-[99] rounded-3xl bg-darkprimary p-3 flex items-center justify-center' style={{right:"28px ",bottom:"80px" ,width:"50px",height:"50px",borderRadius:"30px"}}><FaWhatsapp className='text-7xl text-white'/>
</a>
    <div id='mybody'>
    <Routes>
    <Route path='/' element={<Homepages/>}/>
    <Route path='/index.html' element={<Homepages/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/Services' element={<FetchServices/>}/>
    <Route path='/Services/:id' element={<SingleServices/>}/>
    <Route path='/product' element={<ProductPage/>}/>
    <Route path='/frozen' element={<Frozen/>}/>
    <Route path='/product/:id' element={<SingleProduct/>}/>
    </Routes>
    <Footer />
    </div>
          <ScrollToTop />
   </BrowserRouter>
  );
}

export default App;
