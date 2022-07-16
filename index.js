//variables to initiate packages
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
)}


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your repository?",
            name: "title"
        },
        {
            type: "input",
            message: "Please type out a description of your application.",
            name: "description"
        },
        {
            type: "input",
            message: "Provide your instructions and examples for usage.",
            name: "usage"
        },
        {
            type: "list",
            message: "Which license did you use for your repository? If your license is not on the list, please select other.",
            name: "license",
            choices: ["Apache License 2.0", "GNU GPLv3", "MIT License", "ISC License", "none"]
        },
        {
            type: "input",
            message: "Please add any contributors to your project.",
            name: "contributors"
        },
        {
            type: "input",
            message: "Please explain any tests and how to use them.",
            name: "tests"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username" // add this to questions section
        },
        {
            type: "input",
            message: "What is your email?", // add this to questions section
            name: "email"
        },
        {
            type: "input",
            message: "What is the deployed link to your application?",
            name: "link" // add this to questions section
        }
    ])
    .then((response) => {
        console.log(response)
         writeToFile("README.md", generateMarkdown(response));
      }
    )
}

// Function call to initialize app
init();


