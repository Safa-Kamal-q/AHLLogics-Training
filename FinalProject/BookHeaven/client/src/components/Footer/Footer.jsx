import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white px-8 py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="mt-4 text-sm text-zinc-300">
            We are committed to offering a diverse collection of books that cater to all readers. Whether you're into fiction, non-fiction, or educational resources, we've got something for everyone.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-4">
            <li className="mt-2">
              <Link to="/" className="text-sm text-zinc-300 hover:underline">
                Home
              </Link>
            </li>
            <li className="mt-2">
              <Link to="/all-books" className="text-sm text-zinc-300 hover:underline">
                All Books
              </Link>
            </li>
            <li className="mt-2">
              <Link to="/about-us" className="text-sm text-zinc-300 hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex mt-4 space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-600 mt-8 pt-4 text-center">
        <p className="text-sm text-zinc-400">
          &copy; 2024, AHLLogic.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
