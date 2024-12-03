import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onLogout, token }) => {
  return (
    <nav>
      <Link to="/checklist">Checklist</Link>
      {token ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
