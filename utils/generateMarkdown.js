function generateMarkdown(data, profileImg, userEmail) {
  return `
# ${data.ProjectTitle}
### [${data.ProjectTitle}](${data.deployedUrl})
---
## What Does This Project Do?
### ${data.Description}
## Installation Info to Run This Project
### Enter ${data.Dependencies} in command line
## How to Run Tests For This Project?
### Enter ${data.Tests} in command line
## Tips For Using This Project
### ${data.Usage}
## Project Demo
![Image](${data.imageUrl})
### ${data.altImage}
## License(s)
### ${data.License}
## Contributions to this Project
### ${data.Contributions}
![Badge](${data.badgeUrl})
## Questions
<img src = "${profileImg}" alt = "user profile picture" width = "150"/>
### Feel free to contact ${data.username} at ${userEmail}.
`;
}

module.exports = generateMarkdown;
