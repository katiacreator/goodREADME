const axios = require("axios");
const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    console.log(queryUrl);
    console.log("11111111111");
    return axios
      .get(queryUrl)
      .then(function(response) {
        let userEmail;
        if (response.data.email !== null) {
          userEmail = response.data.email;
        } else {
          userEmail = response.data.blog;
        }
        console.log("222222222222");
        console.log(response.data);
        console.log("3333333333333333");
        console.log(userEmail);
        return response.data;
      })
      .catch(err => console.log(err));
  }
};
module.exports = api;
