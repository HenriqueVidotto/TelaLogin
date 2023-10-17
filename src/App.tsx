import { useState } from 'react';

import {BrowserRouter,Route,Routes} from 'react-router-dom'

import './App.css'
import Recuperar from './Pages/Recuperar.tsx';
import Login from './Pages/Login.tsx';

function App() {
 

  return (
  
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/Recuperar' element={<Recuperar />}/>
    </Routes>
    </BrowserRouter>
     

  )
}

export default App
