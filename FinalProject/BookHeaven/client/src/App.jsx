import React, { useEffect } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import { Routes, Route } from "react-router-dom";
import AllBooks from './pages/AllBooks';
import { useSelector, useDispatch } from 'react-redux'
import { authAction } from './store/auth'
import Profile from "./pages/Profile"
import BorrowedBooks from "./components/Profile/BorrowedBooks"
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails'

function App() {

  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
    ) {
      dispatch(authAction.login());
      dispatch(authAction.changeRole(localStorage.getItem("role")))
    }
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/all-books" element={<AllBooks />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="view-book-details/:id" element={<ViewBookDetails/>}/>
        <Route path="/Profile" element={<Profile />}>
          <Route index element={<BorrowedBooks/>}/>
        </Route>
      
      </Routes>
      <Footer />
    </>
  )
}

export default App
