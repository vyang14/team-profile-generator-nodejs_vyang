// Importing packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
import * as teamFx from './src/team.js'
var generatedTeam = [];

// Array containing questions for createManager function
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

// Array containing questions for createEngineer function
const engQuestions = [
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

// Array containing questions for createIntern function
const intQuestions = [
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
        message: 'Please enter the name of their school.',
        name: 'school',
    },
];

const menu =
    {
        type: 'list',
        message: "Select the type of team member would you like to add.",
        name: 'role',
        choices: ['Engineer', 'Intern', 'Done adding members'],
    };

function createTeam () {
    inquirer.prompt(menu).then((res) => {
        writeToFile('index.html', generateProfile(res));
        switch(res){
            case 'Engineer':
                return createEngineer();
            case 'Intern':
                return createIntern();
            case 'Done adding members':
                return createHTML(generatedTeam);
        }
    });
}

function createHTML (team) {
    var htmlContent = ``
}

function createCards (team) {

}
    
// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) =>
    err ? console.log(err) : console.log('Created successfully'));
    return;
}

// Function to initialize app
function init() {
    createManager();
}

// Function call to initialize app
init();

