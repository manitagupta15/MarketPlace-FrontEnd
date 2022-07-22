import { countBy } from "lodash";

import React, { useContext } from "react";
import { postOrderByUsername } from "../api";
import { userNameContext } from "../Context/context";

export default function PlaceOrder({ basketItems, setBasketItems }) {
  const { username } = useContext(userNameContext);

  let total = 0;
  basketItems.forEach((item) => {
    total += item.price;
    postOrderByUsername(username, { item_id: item.item_id });
  });

  return (
    <div>
      <table class="auto-index">
        <tr>
          <th>Serial no.</th> <th>Item name</th>
          <th>Price</th>
        </tr>

        {basketItems.map((item) => {
          return (
            <tr key={item.item_id}>
              <td>{countBy}</td>
              <td>{item.item_name}</td>
              <td>{item.price}</td>
            </tr>
          );
        })}
      </table>
      <hr />
      {basketItems.length === 0 ? (
        <p></p>
      ) : (
        <h4>Total Price: {total}&#9786;</h4>
      )}
    </div>
  );
}
