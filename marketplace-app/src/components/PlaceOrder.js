import React, { useContext } from "react";
import { postOrderByUsername } from "../api";
import { userNameContext } from "../Context/context";

export default function PlaceOrder({ basketItems }) {
  const {username} = useContext(userNameContext);
  let total = 0;
  basketItems.forEach((item) => {
    total += item.price;
    postOrderByUsername(username, { item_id: item.item_id });
  });
  return (
    <div>
      <ol>
        {basketItems.map((item) => {
          return (
            <article key={item.item_id}>
              <hr />
              <li>
                <p>{item.item_name}</p>
                <p>{item.price}</p>
              </li>
            </article>
          );
        })}
      </ol>
      <hr />
      {basketItems.length === 0 ? <p></p> : <h4>Total Price: {total}</h4>}
    </div>
  );
}
