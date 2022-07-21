import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { userNameContext } from "../Context/context";

export default function Navigation() {
  const { username } = useContext(userNameContext);
  return (
    <div>
      <p>Hello {username}</p>
      <nav id="nav-bar">
        <Link to="/">Change User </Link>
        <Link to="/signup"> Signup</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/sell"> Sell</Link>
        <Link to="/basket"> Basket</Link>
        <Link to="/previousorders"> Orders</Link>
      </nav>
    </div>
  );
}
