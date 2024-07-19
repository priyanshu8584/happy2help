import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signin from './pages/Signup'
import Signup from './pages/Signin'
import {Home} from './pages/Home'
import './App.css'
import {Landing }from './components/Landing'
import { AboutUs } from './components/AboutUs'
import { Fundraisers } from './components/Fundraisers'
import { ContactUs } from './components/ContactUs'
import { DonateNow } from './components/DonateNow'

function App() {
  

  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/" element={<Landing/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/fundraisers" element={<Fundraisers/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/donate" element={<DonateNow/>}/>

        </Routes>
       
       </BrowserRouter>
    </div>
      
  )
}

export default App
