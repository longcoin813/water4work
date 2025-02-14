import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">My Shop</h1>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/cart" className="mx-2">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
