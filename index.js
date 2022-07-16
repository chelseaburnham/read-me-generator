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
            message: "What is your project's name?",
            name: "title"
        },
        {
            type: "input",
            message: "Please write a short description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What are the steps required to install your project?",
            name: "installation"
        },
        {
            type: "input",
            message: "Provide your instructions and examples for usage.",
            name: "usage"
        },
        {
            type: "list",
            message: "What kind of license should your project have?",
            name: "license",
            choices: ["MIT License", "Apache 2.0 License", "GPL 3.0 License", "BSD 3 License", "None"]
        },
        {
            type: "input",
            message: "Please add any contributors to your project.",
            name: "credits"
        },
        {
            type: "input",
            message: "Please explain any tests and how to use them.",
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


