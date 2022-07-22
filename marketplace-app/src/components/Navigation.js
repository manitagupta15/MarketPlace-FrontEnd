import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { userNameContext } from "../Context/context";

export default function Navigation() {
  const { username } = useContext(userNameContext);
  return (
    <div>
      <h2>
        Welcome <p className="name">{username} </p>
      </h2>

      <hr></hr>
      <nav id="nav-bar">
        <Link to="/">&#128511;Change User</Link>
        <Link to="/signup">&#128373;Signup</Link>
        <Link to="/categories">&#128293;Categories</Link>
        <Link to="/sell">&#127974;Sell</Link>
        <Link to="/basket">&#128722;Basket</Link>
        <Link to="/previousorders">&#128717;My Orders</Link>
      </nav>
      <hr></hr>
    </div>
  );
}
