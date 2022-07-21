import React, { useEffect, useState } from "react";
import { postItem } from "../api";

export default function List({ username }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [postedItem, setPostedItem] = useState({});

  const [postObj, setPostObj] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {};
    newObj.item_name = name;
    newObj.description = description;
    newObj.img_url = url;
    newObj.category_name = category;
    newObj.price = price;
    setPostObj(newObj);
  };

  useEffect(() => {
    postItem(postObj).then((postedItem) => {
      setPostedItem(postedItem);
    });
  }, [postObj]);

  return (
    <div>
      <p>You are now logged in as: {username}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Item Name:{" "}
          <input
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Description:{" "}
          <input
            id="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Image URL:{" "}
          <input
            id="img_url"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Price:{" "}
          <input
            id="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Category Name:{" "}
          <input
            id="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          ></input>
        </label>
        <button type="submit">Sell</button>
      </form>
    </div>
  );
}
