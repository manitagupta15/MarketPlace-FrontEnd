import React, { useContext } from "react";
import { getOrdersByUsername } from "../api";
import { userNameContext } from "../Context/context";

export default async function Previousorders() {
  const { username } = useContext(userNameContext);
  const orderList = await getOrdersByUsername(username);

  return (
    <div>
      {orderList.map((order) => {
        <li>{order.item_id}</li>;
      })}
    </div>
  );
}
