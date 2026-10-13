import React from 'react'
import My_login from './Components/My_login'
import Home from './Components/Home'
import Register from './Components/Register'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<My_login />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
