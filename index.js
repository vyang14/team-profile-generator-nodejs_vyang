// Importing packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
import * as teamFx from './src/team.js'
var generatedTeam = [];

// Array containing questions for inquirer
const managerQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'managerID',
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'Please enter your office number.',
        name: 'managerOffice',
    },
];

const empQuestions = [
    {
        type: 'list',
        message: "Select the type of team member would you like to add.",
        name: 'role',
        choices: ['Engineer', 'Intern', 'Done adding members'],
    },
    {
        type: 'input',
        message: "What is this team member's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter their email address.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter their GitHub username.',
        name: 'username',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) =>
    err ? console.log(err) : console.log('Created successfully'));
    return;
}

// Function to initialize app
function init() {
    inquirer.prompt(managerQuestions).then((res) => {
        writeToFile('index.html', generateProfile(res));
    });
}

// Function call to initialize app
init();

function generateTeam () {

}