function generateMarkdown(data) {
  return `
# ${data.answers.ProjectTitle}
### [${data.answers.ProjectTitle}](${data.answers.deployedUrl})
---
## What Does This Project Do?
### ${data.answers.Description}
## Installation Info to Run This Project
### Enter ${data.answers.Dependencies} in command line
## How to Run Tests For This Project?
### Enter ${data.answers.Tests} in command line
## Tips For Using This Project
### ${data.answers.Usage}
## Project Demo
![Image](${data.answers.imageUrl})
### ${data.answers.altImage}
## License(s)
### ${data.answers.License}
## Contributions to this Project
### ${data.answers.Contributions}
![Badge](${data.answers.badgeUrl})
## Questions
![image](${data.user.profileImg})
### If you would like to discuss this project or to learn more, please contact ${data.answers.username} at ${data.user.userEmail}

`;
}

module.exports = generateMarkdown;
