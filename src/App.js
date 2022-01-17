import React, { useState,useEffect } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
// import {} from 'react-router-dom';
// // Cette ligne ci dessus selectionne tout les dossiers dans nodemodules
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';

const App = () => {
  
  return (
    <>

    <BrowserRouter>
    <Routes>

      <Route path="/" exact element={<Home/>} />
      <Route path="/competences" element={<Knowledges/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<NotFound />} />

    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;