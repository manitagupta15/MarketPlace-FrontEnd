import React, { useContext, useState } from "react";
import { getOrdersByUsername } from "../api";
import { userNameContext } from "../Context/context";

export default function Previousorders() {
  const [previousOrders, setPreviousOrders] = useState([]);

  const { username } = useContext(userNameContext);

  getOrdersByUsername(username).then((prevOrder) => {
    setPreviousOrders(prevOrder);
  });

  return (
    <div>
      <table>
        <tr>
          <th>Order Name</th>
        </tr>
        <tr>
          <td>
            {previousOrders.map((order) => {
              return <p key={order.item_name}>{order.item_name}</p>;
            })}
          </td>
        </tr>
      </table>
    </div>
  );
}
