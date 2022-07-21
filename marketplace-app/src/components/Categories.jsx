import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteItemById, fetchItems } from "../api";

export default function Categories({ items, setItems }) {
  const navigate = useNavigate();
  const [dropDown, setDropdown] = useState("");

  useEffect(() => {
    fetchItems().then((items) => {
      setItems(items);
    });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();

    fetchItems().then((returnItems) => {
      const filteredItems = returnItems.filter((item) => {
        return item.category_name === dropDown;
      });

      setItems(filteredItems);
    });
  };

  const handleDelete = (e) => {
    deleteItemById(+e.target.id).then(() => {
      window.location.reload();
    });
  };

  return (
    <div>
      <form onSubmit={handleChange}>
        <select
          onChange={(e) => {
            setDropdown(e.target.value);
          }}
        >
          <option value="">Choose your Option</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>
        <button>Submit</button>
      </form>
      {items.map((item) => {
        return (
          <article key={item.item_id}>
            <hr />
            <p> item Id: {item.item_id}</p>
            <p> item Name: {item.item_name}</p>
            <p>description : {item.description}</p>
            <img className="user-avatar" src={item.img_url} alt="item" />
            <p>price : {item.price}</p>
            <p>category name : {item.category_name}</p>
            <button id={item.item_id} onClick={handleDelete}>
              Delete
            </button>
          </article>
        );
      })}
    </div>
  );
}
