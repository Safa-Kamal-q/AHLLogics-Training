import React from "react";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About us",
      link: "/about-us",
    },
    {
      title: "All Books",
      link: "all-books",
    },
  ];

  return (
    <div className="flex bg-zinc-800 text-white px-8 py-4 item-center justify-between">
      <div className="flex item-center">
        <img
          className="h-10 me-3"
          src="../public/img/logo.png"
          alt="logo"
        />
        <h1 className="text-2xl font-semibold text-wight py-1">BookHeaven</h1>
      </div>
      <div className="nav-links-bookheaven flex item-center gap-4">
        <div className="flex gap-1">
          {links.map((items, i) => (
            <div className="hover:text-yellow-100 transition-all duration-300 px-2 py-2" key={i}>
              {items.title}
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-1 border border-wight rounded hover:bg-zinc-300 transition-all duration-300">logIn</button>
          <button className="px-4 py-1 bg-yellow-100 rounded hover:bg-zinc-300 text-zinc-900 transition-all duration-300">SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
