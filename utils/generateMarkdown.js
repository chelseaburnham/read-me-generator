// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `  
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
  
  ##  License
  This project is licensed under the ${response.license}.
  
  ##  Credits
  ${response.credits}
  
  ##  Tests
  ${response.tests}
  
  ##  Questions
  If you have any questions about the repo, feel free to email me at ${response.email}. You can find more of my work at [http://github.com/${response.username}].`;
}

module.exports = generateMarkdown;
