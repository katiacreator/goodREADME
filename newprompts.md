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
    message: "Please describe this project briefly."
  },
  {
    name: "Motivation",
    type: "input",
    message: "Please describe your motivation for building this application."
  },
  {
    name: "Use Case",
    type: "input",
    message: "Please describe some use cases for this project (where applicable)."
  },
  {
    name: "Wireframes",
    type: "input",
    message: "Please submit links to your wireframes or include images here."
  },
  {
    name: "Final Project Screenshots",
    type: "input",
    message: "Please include snapshots of your final project as a preview."
  },
  {
    name: "Pseudocode",
    type: "input",
    message: "Please include pseudocode for this project if you'd like to showcase to employers your thought process for building this application."
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
    default: "N/A"
  },
  {
    name: "Usage",
    type: "input",
    message: "What does the user need to know about using this project?",
    default: "Stay tuned for version 2.0 coming soon!"
  },
  {
    name: "Stretch Goals",
    type: "input",
    message: "What does the developer envision for the improved version of this application?",
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