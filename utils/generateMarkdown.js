function generateMarkdown(data) {
  return `
# ${data.GithubUsername}
# ${data.ProjectTitle}
# ${data.Description}
# ${data.License}
# ${data.Dependencies}
# ${data.Tests}
# ${data.Usage}
# ${data.Contributions}

`;
}

module.exports = generateMarkdown;
