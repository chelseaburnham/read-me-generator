//variables to initiate packages
const fs = require("fs")
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


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
            type: "input",
            message: "Which license did you use for your repository? If your license is not on the list, please select other.",
            name: "license"
        },
        {
            type: "input",
            message: "Since you selected other, please type the license you used in your repository?",
            name: "license2"
        },
        {
            type: "input",
            message: "Did anyone contribute to your application?",
            name: "contributors"
        },
        {
            type: "input",
            message: "Who would you like to add as contributors?",
            name: "contributors2"
        },
        {
            type: "input",
            message: "Would you like to include any tests?",
            name: "tests"
        },
        {
            type: "input",
            message: "Since you answered yes, please include and explain these tests.",
            name: "tests2"
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
        },
    ])
