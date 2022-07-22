import React from "react";
import { useNavigate } from "react-router-dom";

export default function Basket({ basketItems, setBasketItems }) {
  function handleDelete(e) {
    const newArr = basketItems.filter((item) => +item.item_id !== +e.target.id);
    setBasketItems(newArr);
  }
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/placeorder");
  };
  return (
    <div>
      {basketItems.length !== 0 ? (
        <button id="order-btn" onClick={handleOrder}>
          Place Order
        </button>
      ) : (
        <p>Please Add items to your baskets...</p>
      )}
      {basketItems.map((item) => {
        return (
          <article key={item.item_id}>
            <hr />
            <p>Item Id: {item.item_id}</p>
            <p>Name: {item.item_name}</p>
            <p>Description: {item.description}</p>
            <img src={item.img_url} alt="item"></img>
            <p>Price: £{item.price}</p>
            <p>Category: {item.category_name}</p>
            <button id={item.item_id} onClick={handleDelete}>
              Remove From Basket
            </button>
          </article>
        );
      })}
    </div>
  );
}
