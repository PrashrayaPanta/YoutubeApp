import React from "react";
import { Link } from "react-router-dom";

const PrivateNavbar = () => {
  return (
    <div>
      <div>
        <div className="fixed left-0 right-0 top-0 flex h-8 items-center justify-center bg-black text-white">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default PrivateNavbar;
