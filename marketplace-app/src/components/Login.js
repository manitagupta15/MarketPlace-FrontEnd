import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers, patchUserKudos } from "../api";
import { userNameContext } from "../Context/context";

export default function Login() {
  const [users, setUsers] = useState([]);
  const [kudos, setKudos] = useState();
  const [kudoUserName, setKudoUserName] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const { setUsername } = useContext(userNameContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers().then((resultUsers) => {
      setUsers(resultUsers);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>loading...</p>;

  const handleKudo = (e) => {
    setKudos((currentkuddos) => {
      return currentkuddos + 1;
    });
    // console.log(kudoUserName);
    //  patchUserKudos(kudos, kudoUserName);
  };

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
            <p
              value={kudos}
              // onChange={(e) => {
              //   setKudos(e.target.value);
              //   setKudoUserName(user.username);
              // }}
            >
              Kudos:{user.kudos}
            </p>
            <p>
              <button
                onClick={(e) => {
                  setKudos(4);
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
            </p>
            <hr></hr>
          </article>
        );
      })}
    </div>
  );
}
