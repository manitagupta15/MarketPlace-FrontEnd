import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers, patchUserKudos } from "../api";
import { userNameContext } from "../Context/context";

export default function Login() {
  const [users, setUsers] = useState([]);
  const [kudos, setKudos] = useState(0);
  const [kudoUserName, setKudoUserName] = useState("Manita");
  const [count, setCount] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  const { setUsername } = useContext(userNameContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers().then((resultUsers) => {
      setUsers(resultUsers);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    patchUserKudos(kudoUserName, count);
  }, [kudoUserName, kudos, count]);

  if (isLoading) return <p>loading...</p>;

  return (
    <div>
      {users.map((user) => {
        return (
          <article key={user.username}>
            <p> UserName : {user.username} </p>
            <img
              className="user-avatar"
              src={user.avatar_url}
              alt="your avatar"
            />
            <p>Kudos: {user.kudos}</p>
            <p>
              <button
                onClick={() => {
                  setCount(1);
                  setKudos((user.kudos += 1));
                  setKudoUserName(user.username);
                }}
              >
                <i className="thumbsUp">&#128077;</i>
              </button>
              <button
                onClick={() => {
                  setUsername(user.username);
                  navigate("/categories");
                }}
              >
                Submit
              </button>

              <button
                onClick={() => {
                  setCount(-1);
                  setKudos((user.kudos -= 1));
                  setKudoUserName(user.username);
                }}
              >
                <i className="thumbsUp">&#128078;</i>
              </button>
            </p>
            <hr></hr>
          </article>
        );
      })}
    </div>
  );
}
