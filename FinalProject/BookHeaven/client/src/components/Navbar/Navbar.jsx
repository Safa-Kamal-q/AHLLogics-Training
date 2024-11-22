import React from "react";
import { useState } from "react"
import { FaGripLines } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "All Books",
      link: "all-books",
    },
    {
      title: "About us",
      link: "/about-us",
    },
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "Admin Profile",
      link: "/profile",
    },
  ];

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role= useSelector((state) => state.auth.role);
  
  if (isLoggedIn === false) {
    links.splice(3, 3)
  }

  if(isLoggedIn === true && role==="User"){
    links.splice(4, 1)
  }

  if(isLoggedIn === true && role==="Admin"){
    links.splice(3, 1)
  }

  const [MobileNav, setMobileNav] = useState("hidden");

  return (
    <>
      <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 item-center justify-between">
        <Link to="/" className="flex item-center">
          <img
            className="h-10 me-3"
            src="../public/img/logo.png"
            alt="logo"
          />
          <h1 className="text-2xl font-semibold text-wight py-1">BookHeaven</h1>
        </Link>
        <div className="nav-links-bookheaven block md:flex item-center gap-4">
          <div className="hidden md:flex gap-1">
            {links.map((items, i) => (
              <div className="flex item-center">
                {items.title === "Profile" || items.title==="Admin Profile" ? <Link
                  to={items.link}
                  key={i}
                  className="px-4 py-1 border border-wight rounded hover:bg-zinc-300 transition-all duration-300"
                >
                  {" "}{items.title}
                </Link>
                  : <Link
                    to={items.link}
                    key={i}
                    className="hover:text-yellow-100 transition-all duration-300 px-2 py-2" 
                  >
                    {items.title}{" "}
                  </Link>}
              </div>
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            {isLoggedIn === false &&
              <>
                <Link
                  to="/login"
                  className="px-4 py-1 border border-wight rounded hover:bg-zinc-300 transition-all duration-300"
                >
                  LogIn
                </Link>
                <Link
                  to="/sign-up"
                  className="px-4 py-1 bg-yellow-100 rounded hover:bg-zinc-300 text-zinc-900 transition-all duration-300"
                >
                  SignUp
                </Link>
              </>}
          </div>
          <button
            className="block md:hidden text-wight text-2xl hover:text-zinc-400"
            onClick={() =>
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            <FaGripLines />
          </button>
        </div>
      </nav>
      <div className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>
        {links.map((items, i) => (
          <Link
            to={items.link}
            className={`${MobileNav} text-white text-4xl mb-8 font-semibold hover:text-yellow-100 transition-all duration-300`}
            key={i}
            onClick={() =>
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            {items.title}
          </Link>
        ))}
        {isLoggedIn === false &&
          <>
            <Link
              to="/LogIn"
              className={`${MobileNav} px-8 mb-8 text-3xl font-semibold  py-2 border border-wight rounded text-white hover:bg-zinc-300 transition-all duration-300`}
              onClick={() =>
                MobileNav === "hidden"
                  ? setMobileNav("block")
                  : setMobileNav("hidden")
              }
            >
              LogIn
            </Link>
            <Link
              to="/SignUp"
              className={`${MobileNav} px-8 mb-8 text-3xl font-semibold py-2 bg-yellow-100 rounded hover:bg-zinc-300 text-zinc-900 transition-all duration-300`}
              onClick={() =>
                MobileNav === "hidden"
                  ? setMobileNav("block")
                  : setMobileNav("hidden")
              }
            >
              SignUp
            </Link>
          </>
        }
      </div>
    </>
  );
};

export default Navbar;
