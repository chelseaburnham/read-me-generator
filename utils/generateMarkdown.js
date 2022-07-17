// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
// badges: 
// MIT - [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// Apache 2.0 - [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// GPL 3.0 - [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// BSD 3 - [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)


}

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {}

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
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
