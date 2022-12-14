import React, { useState } from "react";
import { postNewUser } from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [nameText, setNameText] = useState("");
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    postNewUser(nameText, url).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <p>Haven't registered yet? Signup below</p>
      <form onSubmit={handleSubmit}>
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
        <button>Submit</button>
      </form>
    </div>
  );
}
