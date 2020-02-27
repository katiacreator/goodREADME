const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const appendFileAsync = util.promisify(fs.appendFile);
let generateMD = require("./utils/generateMarkdown.js");
// let api = require("./util.api.js");

const questions = [
  {
    name: "GithubUsername",
    type: "input",
    message: "What is your Github username?"
  },
  {
    name: "ProjectTitle",
    type: "input",
    message: "What is your project title?"
  },
  {
    name: "deployedUrl",
    type: "input",
    message:
      "Please insert a link for your deployed project. Press enter if not ready for deployment",
    default: ""
  },
  {
    name: "Description",
    type: "input",
    message: "Please describe this project briefly (1-2 sentences)."
  },
  {
    name: "Dependencies",
    type: "input",
    message: "how does the user run installations for dependencies?",
    default: "npm i"
  },
  {
    name: "Tests",
    type: "input",
    message: "how does the user run tests?",
    default: "npm test"
  },
  {
    name: "Usage",
    type: "input",
    message: "What does the user need to know about using this project?"
  },
  {
    name: "imageUrl",
    type: "input",
    message: "Please insert an image/gif/video demo link for your project."
  },
  {
    name: "altImage",
    type: "input",
    message: "Press include a description for users that cannot view images"
  },
  {
    name: "License",
    type: "input",
    message: "What kind of license does your project need?"
  },
  {
    name: "Contributions",
    type: "input",
    message: "Please insert any criteria for contributing to this project"
  }
];

function init() {
  inquirer.prompt(questions).then(function(answers) {
    console.log("=======================");
    console.log(answers);
    console.log("=======================");
    // answers = JSON.stringify(answers);
    console.log(answers);
    //generate markdown
    var readmeText = generateMD(answers);
    console.log("=======================");
    // console.log(JSON.stringify(readmeText));
    console.log(readmeText);
    console.log("=======================");
    fs.appendFile("test.md", readmeText, function(err) {
      if (err) throw err;
    });
    console.log("Success!");
  });
}

init();
