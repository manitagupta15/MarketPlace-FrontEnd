const axios = require("axios");

exports.postNewUser = (username, url) => {
  const path = axios.create({
    baseURL: "https://nc-marketplace-api-manita.herokuapp.com/api",
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

exports.fetchItems = () => {
  const path = axios.create({
    baseURL: "https://nc-marketplace-api-manita.herokuapp.com/api",
  });
  return path.get("/items").then(({ data: { items } }) => {
    return items;
  });
};
exports.fetchUsers = () => {
  const path = axios.create({
    baseURL: "https://nc-marketplace-api-manita.herokuapp.com/api",
  });
  return path.get(`/users`).then(({ data: { users } }) => {
    return users;
  });
};

exports.postItem = (objToPost) => {
  const path = axios.create({
    baseURL: "https://nc-marketplace-api-manita.herokuapp.com/api",
  });
  return path.post("/items", objToPost).then((res) => {
    return res.data.item;
  });
};

exports.deleteItemById = (id) => {
  const path = axios.create({
    baseURL: "https://nc-marketplace-api-manita.herokuapp.com/api",
  });
  return path.delete(`/items/${id}`).then(() => {
    return;
  });
};

exports.fetchItemById = (id) => {
  const path = axios.create({
    baseURL: "https://nc-marketplace-api-manita.herokuapp.com/api",
  });
  return path.get(`/items/${id}`).then((resp) => {
    return resp.data.item;
  });
};

exports.postOrderByUsername = (username, postObj) => {
  const path = axios.create({
    baseURL: "https://nc-marketplace-api-manita.herokuapp.com/api",
  });
  return path.post(`/users/${username}/orders`, postObj).then((resp) => {
    return resp.data.item;
  });
};

exports.getOrdersByUsername = (username) => {
  const path = axios.create({
    baseURL: "https://nc-marketplace-api-manita.herokuapp.com/api",
  });
  return path.get(`/users/${username}/orders`).then((resp) => {
    return resp.data.items;
  });
};

exports.patchUserKudos = (kudoUser, count) => {
  const path = axios.create({
    baseURL: "https://nc-marketplace-api-manita.herokuapp.com/api",
  });

  const input = { kudos_inc: +count };

  return path.patch(`/users/${kudoUser}`, input).then((resp) => {
    return resp.data.user;
  });
};
