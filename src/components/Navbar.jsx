import React from 'react';
import { Link } from 'react-router-dom';
import LWSLogo from '../assets/images/logo.svg';
import Search from '../ui/Search';

function Navbar() {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <img src={LWSLogo} width="150px" className="object-contain" />

        <ul className="hidden md:flex items-center space-x-6">
          <Link
            className="font-semibold cursor-pointer"
            to="/"
            id="lws-bookStore"
          >
            <li>Book Store</li>
          </Link>
          <Link className="cursor-pointer" to="/add" id="lws-addBook">
            <li>Add Book</li>
          </Link>
        </ul>
        <Search />
      </div>
    </nav>
  );
}

export default Navbar;
