import React, { useState } from "react";
import { checkValidUsername } from "../api";
export default function Login({ username, setUsername }) {
  const [text, setText] = useState("");

  console.log(username, "<---before submit");

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername(text);
    console.log(text);

    console.log(username, "<----in login"); // why username is not updating here

    checkValidUsername(text).then((user) => {
      //after username is updated change text to username
      if (user) return <p>User Already exit</p>;
    });
    setText("");
  };

  return (
    <div>
      <form>
        <label>Username: </label>
        <input
          type="text"
          name={text}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}
