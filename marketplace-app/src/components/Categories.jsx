import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteItemById, fetchItemById, fetchItems } from "../api";
import Basket from "./Basket";

export default function Categories({ items, setItems, setBasketItems }) {
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

  const handleAdditionToBasket = (e) => {
    const newObj = {};
    fetchItemById(+e.target.id).then((item) => {
      newObj.item_id = item.item_id;
      newObj.item_name = item.item_name;
      newObj.description = item.description;
      newObj.category_name = item.category_name;
      newObj.img_url = item.img_url;
      newObj.price = item.price;
    });
    setBasketItems((currItems) => {
      return [...currItems, newObj];
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
            <button id={item.item_id} onClick={handleAdditionToBasket}>
              Add to Basket
            </button>
          </article>
        );
      })}
    </div>
  );
}
