// const axios = require("axios");
// const api = {
//   getUser(username) {


  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=1`;
    console.log(queryUrl);
  });

// module.exports = api;
