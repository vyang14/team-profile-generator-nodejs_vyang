// Importing packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// Array containing questions for inquirer
const managerQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is employee ID?',
        name: 'role',
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'username',
    },
];

const teamQuestions = [
    {
        type: 'input',
        message: "What is your team member's name?",
        name: 'name',
    },
    {
        type: 'list',
        message: "What is this team member's role?",
        name: 'role',
        choices: ['Engineer', 'Marketing', 'Sales', 'Permitting', 'Intern'],
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
