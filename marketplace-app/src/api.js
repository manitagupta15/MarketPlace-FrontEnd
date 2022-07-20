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
