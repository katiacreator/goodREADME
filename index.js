var inquirer = require("inquirer");
var fs = require("fs");
var markdown = //link to generatemarkdown.js???

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
    name: "Table of Contents",//or is it that call these questions are the toc?//
    type: "list",
    message: "Please select headings to be included in your table of contents."
  },
  {
    name: "Installation",
    type: "input",
    message: "how does the user install this project?"
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
    // choices: []
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
// .then (answers =>{
//     return answers;//??
// })

const questions = [
//   "Please insert an img link to your github profile pic",
//   "Please insert your github username add github icon from git mark folder for visuals"
];

fs.writeToFile(goodReadME.pdf, data) {///or link to the markdown file??
    if (err) {
        return console.log(err);
      }
    
      console.log("Success!");
}

function init() {}

init();
