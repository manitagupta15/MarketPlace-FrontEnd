import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { deleteItemById } from "../api";

export default function DeleteItem({ setItemIdState }) {
  const [deleteId, setDeleteId] = useState("");

  const { item_id } = useParams();

  console.log(item_id);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItemIdState(deleteId);
    deleteItemById(deleteId);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter the id you want to delete: </label>
        <input
          type="text"
          id="item_id"
          value={deleteId}
          onChange={(e) => {
            setDeleteId(e.target.value);
          }}
        ></input>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}
