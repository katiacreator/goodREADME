const axios = require("axios");
const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    console.log(queryUrl);
    // AXIOS GOES HERE????
    axios
      .get(queryUrl)
      .then(function(response) {
        console.log(response.data.avatar_url);
        return response.data.avatar_url;
      })
      .catch(err => console.log(err));
  }
};
module.exports = api;

//PSEUDOCODE:
//I need the username to get the profile pic from the api/
//I need to use axios to make a call to the api to get the profile pic after inserting the username entered during the questions inquire
//I write the code here and i insert the const api on the index.js in the function init section//
