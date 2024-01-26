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

import Footer from './components/layout/Footer';

const App = () => {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />

   </Routes>
   <Footer />
   
   </BrowserRouter>
  )
}

export default App