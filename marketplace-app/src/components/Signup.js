import React, { useState } from "react";
import { postNewUser } from "../api";
import Login from "./Login";
import { Link } from "react-router-dom";

export default function Signup() {
  const [nameText, setNameText] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    postNewUser(nameText, url).then(() => {
      console.log("hello");
    });
  };

  return (
    <div>
      <p>Haven't registered yet? Signup below</p>
      <form>
        <label>Username: </label>
        <input
          type="text"
          name={nameText}
          value={nameText}
          onChange={(e) => {
            setNameText(e.target.value);
          }}
        ></input>
        <label>Avatar URL: </label>
        <input
          type="text"
          name={url}
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          <Link to="/"> Submit</Link>
        </button>
      </form>
    </div>
  );
}
