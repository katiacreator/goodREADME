function generateMarkdown(data) {
  return `
# ${data.ProjectTitle}
## *Italic* Insert Link to deployed app here: [Link Title](http://www.samplelink.com)
## ${data.Description}
# Table of Contents (Optional)
##
# Installation Info
## ${data.Dependencies}
# How to Run Tests
## ${data.Tests}
# Tips for Using this Project
## ${data.Usage}
# License(s)
## ${data.License}
# Contributions to this Project
## ${data.Contributions}

`;
}

module.exports = generateMarkdown;
