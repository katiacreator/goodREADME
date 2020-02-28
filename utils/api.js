const axios = require("axios");
const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    console.log(queryUrl);
    return (
      axios
        .get(queryUrl)
        // .then(function(response) {
        //   console.log(profileImg, userEmail);
        //   // if statement for email if they don't have one goes here?????
        //   //Pseudocode
        //   var email;
        //   if (response.data.email) {
        //     email = response.data.email;
        //   } else {
        //     email = "no email provided";
        //   }
        //   return response.data.avatar_url, email;
        // })
        .catch(err => console.log(err))
    );
  }
};
module.exports = api;

//PSEUDOCODE:
//I need the username to get the profile pic from the api/
//I need to use axios to make a call to the api to get the profile pic after inserting the username entered during the questions inquire
//I write the code here and i insert the const api on the index.js in the function init section//
