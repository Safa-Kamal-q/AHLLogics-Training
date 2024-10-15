import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LogIn from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBooks from './pages/AllBooks';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/all-books" element={<AllBooks />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
