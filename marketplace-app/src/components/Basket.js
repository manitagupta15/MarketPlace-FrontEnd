import React, { useState } from "react";

export default function Basket({ basketItems, setBasketItems }) {
  function handleDelete(e) {
    const newArr = basketItems.filter((item) => +item.item_id !== +e.target.id);
    setBasketItems(newArr);
  }
  return (
    <div>
      {basketItems.map((item) => {
        return (
          <article key={item.item_id}>
            <hr />
            <li>{item.item_id}</li>
            <li>{item.item_name}</li>
            <li>{item.description}</li>
            <img src={item.img_url} alt="item"></img>
            <li>{item.price}</li>
            <li>{item.category_name}</li>
            <button id={item.item_id} onClick={handleDelete}>
              Remove From Basket
            </button>
          </article>
        );
      })}
    </div>
  );
}
