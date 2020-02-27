function generateMarkdown(data) {
  return `
# ${data.ProjectTitle}
### [(${data.deployedUrl})]${data.deployedUrl}
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
![image]${data.badgeUrl}
## Developer Profile
![image]${data.profileImg}

`;
}

module.exports = generateMarkdown;
