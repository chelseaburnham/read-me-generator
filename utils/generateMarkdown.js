// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  } return "";
}

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This is licensed under the ${license} license.`
  } return "";
}

// Function to generate markdown for README
function generateMarkdown(response) {
  return `  
${renderLicenseBadge(response.license)}

  # ${response.title}

  ##  Description
  ${response.description}
  
  ##  Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ##  Installation
  ${response.installation}
  
  ##  Usage
  ${response.usage}
  
  ${renderLicenseSection(response.license)}
  ${response.license}
  
  ##  Contributing
  ${response.contributing}
  
  ##  Tests
  ${response.tests}
  
  ##  Questions
  If you have any questions about the repo, feel free to email me at ${response.email}. You can find more of my work at [http://github.com/${response.username}].`;
}

module.exports = generateMarkdown;
