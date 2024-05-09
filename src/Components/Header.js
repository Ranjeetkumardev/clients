import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");

  const handleLogout = async () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <section className="w-full z-40 shadow-2xl sticky left-0 right-0 top-0 ">
      <ul className="flex justify-center items-center bg-green-600 p-4 font-bold ">
        <Link to="/">
          <li className="font-bold p-2 text-white hover:bg-black rounded-lg mx-4">
            Home
          </li>
        </Link>

        {token ? (
          <Link to="/" onClick={handleLogout}>
            <span className="font-bold p-2 text-white hover:bg-black rounded-lg mx-4">
              LogOut
            </span>
          </Link>
        ) : (
          <Link to="/register">
            <span className="font-bold p-2 text-white hover:bg-black rounded-lg mx-4">
              Login
            </span>
          </Link>
        )}

        <Link to="/checkout">
          <li className="font-bold p-2 text-white hover:bg-black rounded-lg mx-4">
            Checkout
          </li>
        </Link>
        <Link to="/book">
          <li className="font-bold p-2 text-white hover:bg-black rounded-lg mx-4">
            Books
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default Header;
