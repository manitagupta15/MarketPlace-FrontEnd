import React, { useState } from "react";

export default function Login({ setUsername }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(text);
    setText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name={text}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
}
