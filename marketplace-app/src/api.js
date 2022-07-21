const axios = require("axios");

exports.postNewUser = (username, url) => {
  const path = axios.create({
    baseURL: "https://nc-marketplace-api-ma.herokuapp.com/api",
  });
  return path
    .post("/users", {
      username: username,
      avatar_url: url,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

// exports.fetchUsername = (username) => {
//   const path = axios.create({
//     baseURL: "https://nc-marketplace-api-ma.herokuapp.com/api",
//   });
//   return path.get(`/users/${username}`).then(({ data: { user } }) => {
//     console.log(user, "<---user");
//     return user;
//   });
// };

exports.fetchItems = () => {
  const path = axios.create({
    baseURL: "https://nc-marketplace-api-ma.herokuapp.com/api",
  });
  return path.get("/items").then(({ data: { items } }) => {
    return items;
  });
};
exports.fetchUsers = () => {
  const path = axios.create({
    baseURL: "https://nc-marketplace-api-ma.herokuapp.com/api",
  });
  return path.get(`/users`).then(({ data: { users } }) => {
    return users;
  });
};
