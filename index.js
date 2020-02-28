const inquirer = require("inquirer");
const fs = require("fs");
let api = require("./utils/api.js");
let generateMD = require("./utils/generateMarkdown.js");

const questions = [
  {
    name: "username",
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
    default: "N/A"
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
    message:
      "What does the user need to know about using this project? To make an unordered list, place a * before each point you want to make ex * this is a point. To make an ordered list, place a number before your points ex. 1. this is a point 2. this is a point",
    default: "N/A"
  },
  {
    name: "imageUrl",
    type: "input",
    message: "Please insert an image/gif/video demo link for your project.",
    default: "N/A"
  },
  {
    name: "altImage",
    type: "input",
    message: "Press include a description for users that cannot view images",
    default: "N/A"
  },
  {
    name: "License",
    type: "input",
    message:
      "What kind of license(s) does your project need? Separate with a comma if more than one",
    default: "N/A"
  },
  {
    name: "Contributions",
    type: "input",
    message: "Please insert any criteria for contributing to this project",
    default: "N/A"
  },
  {
    name: "badgeUrl",
    type: "input",
    message: "Please insert a url link for a badge you would like to include.",
    default: "N/A"
  }
];

function init() {
  inquirer.prompt(questions).then(function(answers) {
    console.log("=======================");
    console.log(answers);
    //api call info goes here??
    var username = answers.username;
    api.getUser(username).then(function(response) {
      console.log(response.data);
      let user = {
        profileImg: data.avatar_url,
        userEmail: data.email,
        answers: answers
      };

      //generate markdown
      let readmeText = generateMD(user);
      console.log("=======================");
      console.log(readmeText);
      console.log("=======================");

      fs.appendFile("sample.md", readmeText, function(err) {
        if (err) throw err;
      });
      console.log("Markdown has been generated successfully!");
    });
  });
}

init();
