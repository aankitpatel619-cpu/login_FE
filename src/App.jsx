import React, { useEffect } from 'react'
import My_login from './Components/My_login'
import Home from './Components/Home'
import Register from './Components/Register'
import './App.css'
import { BrowserRouter, Routes,Route, useNavigate } from 'react-router-dom'


export default function App() {

  const navigate = useNavigate();

  useEffect(()=>{
   let token  = localStorage.getItem("token")
  let id  = localStorage.getItem("id")


   if(token){
    navigate(`/home/${id}`)
   }

  },[])


  return (
    <>
        <Routes>
          
          <Route path="/" element={<My_login />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      
    </>
  )
}
