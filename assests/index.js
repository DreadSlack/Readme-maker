// TODO: Include packages needed for this application
var fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [ {
    type: "input", 
    name: "name",
    message: "What is the name of your application"
},{
    type: 'list',
    name: 'license',
    choices: ['Mit', 'Apache'], 
    message: 'Which license did you use'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(){
        console.log("file wrote")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(answers){
        console.log(answers);
        writeToFile('README.md', generateMarkdown(answers));
    })
    .catch((error)=> {
        console.log('error:', error);
    })
}

// Function call to initialize app
init();
