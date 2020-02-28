const axios = require("axios");
const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    console.log(queryUrl);
    return axios
      .get(queryUrl)
      .then(function(response) {
        // if statement for email if they don't have one goes here?????
        //Pseudocode
        console.log(response.data);
        let userEmail;
        if (response.data.email !== null) {
          userEmail = response.data.email;
        } else {
          userEmail = response.data.blog;
        }
        return response.data;
      })
      .catch(err => console.log(err));
  }
};
module.exports = api;

//PSEUDOCODE:
//I need the username to get the profile pic from the api/
//I need to use axios to make a call to the api to get the profile pic after inserting the username entered during the questions inquire
//I write the code here and i insert the const api on the index.js in the function init section//
