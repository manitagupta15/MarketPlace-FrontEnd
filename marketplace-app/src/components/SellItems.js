import React, { useState, useContext } from "react";
import { postItem } from "../api";
import { userNameContext } from "../Context/context";

export default function SellItems() {
  const { username } = useContext(userNameContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [postedItem, setPostedItem] = useState({});

  const [postObj, setPostObj] = useState({});
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    setShow(false);
    e.preventDefault();
    const newObj = {};
    newObj.item_name = name;
    newObj.description = description;
    newObj.img_url = url;
    newObj.category_name = category;
    newObj.price = price;
    setPostObj(newObj);
    postItem(newObj).then((postedItem) => {
      setPostedItem(postedItem);
      setShow(true);
    });

    setName("");
    setDescription("");
    setUrl("");
    setCategory("");
    setPrice(0);
  };

  return (
    <div>
      <p>You are now logged in as: {username}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Item Name:{" "}
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Description:
          <input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Image URL:
          <input
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Price:
          <input
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Category Name:
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">Choose your Option</option>
            <option value="Electronics">&#8986;Electronics</option>
            <option value="Clothing">&#129509;Clothing</option>
            <option value="Household">&#127996;Household</option>
          </select>
        </label>
        <button type="submit">Sell</button>
      </form>
      {show === true ? (
        <p>{postedItem.item_name} posted successfully!</p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
