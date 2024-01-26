import React from 'react'

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layout/Header';

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";

import Footer from './components/layout/Footer';
import Contact from './components/contact/Contact';

const App = () => {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/contact' element={<Contact />} />

   </Routes>
   <Footer />
   
   </BrowserRouter>
  )
}

export default App