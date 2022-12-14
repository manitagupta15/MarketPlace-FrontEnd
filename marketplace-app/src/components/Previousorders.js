import { countBy } from "lodash";

import React, { useContext, useState } from "react";
import { getOrdersByUsername } from "../api";
import { userNameContext } from "../Context/context";

export default function Previousorders() {
  const [previousOrders, setPreviousOrders] = useState([]);

  const { username } = useContext(userNameContext);

  getOrdersByUsername(username).then((prevOrder) => {
    setPreviousOrders(prevOrder);
  });

  if (previousOrders.length === 0) return <p>No Previous Orders...</p>;

  return (
    <div>
      <p className="previous-orders">Previous Orders</p>
      <table class="auto-index">
        <tr>
          <th>Serial no.</th>
          <th>Item name</th>
        </tr>

        {previousOrders.map((order) => {
          return (
            <tr>
              <td>{countBy}</td>
              <td>{order.item_name}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
