var inquirer = require("inquirer");
var fs = require("fs");
var markdown = //link to generatemarkdown.js???

inquirer.prompt(questions);
// .then (answers =>{
//     return answers;//??
// it})

const questions = [
  {
    name: "Github Username",
    type: "input",
    message: "What is your Github username?"
  },
  {
    name: "Project Title",
    type: "input",
    message: "What is your project title?"
  },
  {
    name: "Description",
    type: "input",
    message: "Please describe this project briefly (1-2 sentences)."
  },
  {
    name: "License",
    type: "checkbox",
    message: "What kind of license does your project need?"
   //choices: ["MIT", "Apache", "GPL", "Bsd"]
  },

    {
    name: "Dependencies",
    type: "input",
    message: "how does the user run installations for dependencies?"
    //default: (npm i)
  },
  {
    name: "Tests",
    type: "input",
    message: "how does the user run tests?"
    //default: (npm test)
  }
  {
    name: "Usage",
    type: "input",
    message: "What does the user need to know about using this project?"
  }
  {
    name: "Contributions",
    type: "input",
    message:
      "Please insert any criteria for contributing to this project"
  }, 
];

fs.writeToFile(sampleReadME.md, answers) {///or link to the markdown file??
    if (err) {
        return console.log(err);
      }
    
      console.log("Success!");
}

function init() {}

init();
