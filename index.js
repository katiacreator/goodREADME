const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("./utils");
const appendFileAsync = utils.promisify(fs.appendFile);
//let api = require("./utils/api.js");
let generateMD = require("./utils/generateMarkdown.js");
const axios = require("axios");

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
    message:
      "What does the user need to know about using this project? To make an unordered list, place a * before each point you want to make ex * this is a point. To make an ordered list, place a number before your points ex. 1. this is a point 2. this is a point"
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
    message:
      "What kind of license(s) does your project need? Separate with a comma if more than one"
  },
  {
    name: "Contributions",
    type: "input",
    message: "Please insert any criteria for contributing to this project"
  },
  {
    name: "badgeUrl",
    type: "input",
    message: "Please insert a url link for a badge you would like to include."
  }
];

function init() {
  inquirer.prompt(questions).then(function(answers) {
    console.log("=======================");
    console.log(answers);
    console.log("=======================");
    // answers = JSON.stringify(answers);
    console.log(answers);
    //api call info goes here??
    // let username = api(answers);

    // const queryUrl = `https://api.github.com/users/${username}`;
    //console.log(queryUrl);
    // AXIOS GOES HERE????
    /*axios
      .get(queryUrl)
      .then(function(response) {
        console.log(response.avatar_url);
        return response.avatar_url;
      })
      .catch(err => console.log(err));*/
    // let axios = profileImg;

    //generate markdown
    let readmeText = generateMD(answers);
    ///////////////let readmeText = `${generateMD(answers)}${axios}`;
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
