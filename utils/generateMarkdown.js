function generateMarkdown(data, profileImg, userEmail) {
  return `
# ${data.ProjectTitle}
### [${data.ProjectTitle}](${data.deployedUrl})
---
## What Does This Project Do?
### ${data.Description}
## Installation Information to Run This Project
### ${data.Dependencies}
## How to Run Tests For This Project?
### ${data.Tests}
## Usage Notes
### ${data.Usage}
## License(s)
### ${data.License}
## Contributions to this Project
### ${data.Contributions}
## Languages and Tools Used
### ${data.tools}
## ![Badge](${data.badgeUrl})
## Questions
## <img src = "${profileImg}" alt = "user profile picture" width = "150"/>
### Feel free to contact ${data.fullname} at ${userEmail}.

`;
}

module.exports = generateMarkdown;
