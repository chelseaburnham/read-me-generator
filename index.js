// Variables to initiate packages
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// Array of questions for user input
const questions = ["What is your GitHub username?", "What is your email?", "What is your project's name?", "Please write a short description of your project.", "What are the steps required to install your project?", "Provide your instructions and examples for usage.", "What kind of license should your project have?", "Please add any contributors to your project.", "Please explain any tests and how to use them."];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
)}

// Function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: "username"
        },
        {
            type: "input",
            message: questions[1],
            name: "email"
        },
        {
            type: "input",
            message: questions[2],
            name: "title"
        },
        {
            type: "input",
            message: questions[3],
            name: "description"
        },
        {
            type: "input",
            message: questions[4],
            name: "installation"
        },
        {
            type: "input",
            message: questions[5],
            name: "usage"
        },
        {
            type: "list",
            message: questions[6],
            name: "license",
            choices: ["MIT License", "Apache 2.0 License", "GPL 3.0 License", "BSD 3 License", "None"]
        },
        {
            type: "input",
            message: questions[7],
            name: "credits"
        },
        {
            type: "input",
            message: questions[8],
            name: "tests"
        },
    ])
    .then((response) => {
        console.log(response)
         writeToFile("README.md", generateMarkdown(response));
      }
    )
}

// Function call to initialize app
init();


