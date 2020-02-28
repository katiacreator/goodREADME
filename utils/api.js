const axios = require("axios");
const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    return axios
      .get(queryUrl)
      .then(function(response) {
        let userEmail;
        if (response.email !== null) {
          userEmail = response.email;
        } else {
          userEmail = response.blog;
        }
        return response.data;
      })
      .catch(err => console.log(err));
  }
};
module.exports = api;
