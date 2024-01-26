import React from 'react'

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layout/Header';

import "./styles/app.scss";
import "./styles/header.scss";

const App = () => {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />

   </Routes>
   
   </BrowserRouter>
  )
}

export default App