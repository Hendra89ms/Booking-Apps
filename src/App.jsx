import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, List, Hotel } from './pages'
import { Spinner } from './components'
import Coba from './pages/coba/Coba';


export default function App() {

  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotels' element={<List />} />
      <Route path='/hotel/:id' element={<Hotel />} />
      <Route path='/coba' element={<Coba />} />
    </Routes>

  );
}
