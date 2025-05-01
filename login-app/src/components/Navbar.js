import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee", marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: 10 }}>Cadastro</Link>
      <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
      <Link to="/principal">Principal</Link>
    </nav>
  );
};

export default Navbar;
