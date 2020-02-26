var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
  {
    name: "Project Title",
    type: "input",
    message: "What is your project title?"
  },
  {
    name: "Description",
    type: "input",
    message: "Please describe this project in 1-2 sentences."
  },
  {
    name: "Table of Contents",
    type: "list",
    message: "Please select headings to be included in your table of contents."
  },
  {
    name: "Installation",
    type: "input",
    message: "how to install this project?"
  },
  {
    name: "Usage",
    type: "",
    message: ""
  },
  {
    name: "License",
    type: "checkbox",
    message: "Please select a license type for this project"
  },
  {
    name: "Contributions",
    type: "input",
    message:
      "Please insert the first and last name of all contributors on this project"
  },
  {
    name: "Tests",
    type: "",
    message: ""
  }
]);

const questions = [
  "Please insert an img link to your github profil pic",
  "Please insert your github username"
];

function writeToFile(fileName, data) {}

function init() {}

init();
