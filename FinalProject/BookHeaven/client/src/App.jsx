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
import AllBorrowedBooks from './pages/AllBorrowedBooks'
import AddBook from './pages/AddBook'

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
        <Route path="/login" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="view-book-details/:id" element={<ViewBookDetails />} />
        <Route path="/profile" element={<Profile />}>
          {role === "User" ? <Route index element={<BorrowedBooks />} /> : <Route index element={<AllBorrowedBooks />} />}
          {role === "Admin" && <Route path="/profile/add-book" element={<AddBook />} />}
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
