function generateMarkdown(data) {
  return `
# ${data.ProjectTitle}
## [Link] (${data.deployedUrl})
---
# What Does This Project Do?
## ${data.Description}
# Installation Info to Run This Project
## Enter ${data.Dependencies} in command line
# How to Run Tests For This Project?
## Enter ${data.Tests} in command line
# Tips For Using This Project
## ${data.Usage}
# Project Demo
# ![Image](${data.imageUrl})
# ${data.altImage}
# License(s)
## ${data.License}
# Contributions to this Project
## ${data.Contributions}
# [https://img.shields.io/badge/Version-v1.0-blue]
`;
}

module.exports = generateMarkdown;
