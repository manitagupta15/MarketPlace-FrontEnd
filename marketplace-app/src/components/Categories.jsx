import { useEffect } from "react";
import { useState } from "react";
import { deleteItemById, fetchItemById, fetchItems } from "../api";

export default function Categories({ items, setItems, setBasketItems }) {
  const [dropDown, setDropdown] = useState("");

  useEffect(() => {
    fetchItems().then((item) => {
      setItems(item);
    });
  }, [setItems]);

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
          <option value="Electronics">&#8986;Electronics</option>
          <option value="Clothing">&#129509;Clothing</option>
          <option value="Household">&#128716;Household</option>
        </select>
        <button>Submit</button>
      </form>
      {items.map((item) => {
        return (
          <article key={item.item_id}>
            <hr />
            <p>Item Id: {item.item_id}</p>
            <p>Item Name: {item.item_name}</p>
            <p>Description: {item.description}</p>
            <img className="user-avatar" src={item.img_url} alt="item" />
            <p>Price: £{item.price}</p>

            <p>Category: {item.category_name}</p>
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
