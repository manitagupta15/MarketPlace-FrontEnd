import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../api";
import { userNameContext } from "../Context/context";

export default function Login() {
  const [users, setUsers] = useState([]);

  const { setUsername } = useContext(userNameContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers().then((resultUsers) => {
      setUsers(resultUsers);
    });
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <li key={user.username}>
            UserName : {user.username} Avatar:{" "}
            <img
              className="user-avatar"
              src={user.avatar_url}
              alt="your avatar"
            />
            <button
              onClick={() => {
                setUsername(user.username);
                navigate("/categories");
              }}
            >
              Submit
            </button>
          </li>
        );
      })}
    </div>
  );
}
