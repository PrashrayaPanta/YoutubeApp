import React from "react";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <div>
      <div className="fixed left-0 right-0 top-0 flex h-8 items-center justify-center bg-black text-white">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default PublicNavbar;
