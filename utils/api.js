// const api = {
//   getUser(username) {
const inquirer = require("inquirer");
inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=1`;
    console.log(queryUrl);
  });

// module.exports = api;
// const fs = require("fs");
// const axios = require("axios");
// const inquirer = require("inquirer");

// const fs = require("fs");
// const util = require("util");
// const axios = require("axios");

// const appendFileAsync = util.promisify(fs.appendFile);
// const readFileAsync = util.promisify(fs.readFile);

// const config = { headers: { accept: "application/json" } };

// axios.get("https://icanhazdadjoke.com/", config).then(function(res) {
//   const { joke } = res.data;

//   fs.appendFile("jokes.txt", `${joke}\n`, function(err) {
//     if (err) throw err;
//     console.log("Saved!");
//   });
