const inquirer = require("inquirer");
const fs = require("fs");
let api = require("./utils/api.js");
let generateMD = require("./utils/generateMarkdown.js");

const questions = [
  {
    name: "username",
    type: "input",
    message: "Please enter your Github username."
  },
  {
    name: "fullname",
    type: "input",
    message: "Please enter your first and last name."
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
    default: "Link to deployed app coming soon!"
  },
  {
    name: "Description",
    type: "input",
    message: "Please describe this project briefly (2-3 sentences)."
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
    message: "What does the user need to know about using this project?",
    default: "Stay tuned for version 2.0 coming soon!"
  },
  {
    name: "License",
    type: "input",
    message: "What kind of license(s) does your project include?",
    default: "N/A"
  },
  {
    name: "Contributions",
    type: "input",
    message: "Please insert any criteria for contributing to this project.",
    default: "None at this time."
  },
  {
    name: "tools",
    type: "input",
    message:
      "Please describe the languages and other tools used to create this project",
    default: "HTML5, CSS3, Javascript"
  },
  {
    name: "badgeUrl",
    type: "input",
    message:
      "Please insert a url link for any badges you would like to include for this project.",
    default: "N/A"
  }
];

function init() {
  inquirer.prompt(questions).then(function(answers) {
    var username = answers.username;
    api.getUser(username).then(function(response) {
      let profileImg = response.avatar_url;
      let userEmail;
      if (response.email !== null) {
        userEmail = response.email;
      } else {
        userEmail = response.blog;
      }
      let readmeText = generateMD(answers, profileImg, userEmail);
      console.log(readmeText);
      fs.appendFile("goodREADME.md", readmeText, function(err) {
        if (err) throw err;
      });
      console.log("Markdown has been generated successfully!");
    });
  });
}

init();
