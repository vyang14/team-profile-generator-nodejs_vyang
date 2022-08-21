// Importing packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var generatedTeam = [];

// Array of objects containing questions for createManager function
const managerQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
        default: 'Bruce Wayne'
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'id',
        default: '1'
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
        default: 'bruce@wayne.com'
    },
    {
        type: 'input',
        message: 'Please enter your office number.',
        name: 'office',
        default: '1'
    },
];

// Array of objects containing questions for createEngineer function
const engQuestions = [
    {
        type: 'input',
        message: "What is this team member's name?",
        name: 'name',
        default: 'Richard Grayson'
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
        default: '2'
    },
    {
        type: 'input',
        message: 'Please enter their email address.',
        name: 'email',
        default: 'richard@wanye.com'

    },
    {
        type: 'input',
        message: 'Please enter their GitHub username.',
        name: 'github',
        default: 'notRobin12'
    },
];

// Array of objects containing questions for createIntern function
const intQuestions = [
    {
        type: 'input',
        message: "What is this team member's name?",
        name: 'name',
        default: 'Timothy Drake'
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
        default: '3'
    },
    {
        type: 'input',
        message: 'Please enter their email address.',
        name: 'email',
        default: 'timothy@wanye.com'
    },
    {
        type: 'input',
        message: 'Please enter the name of their school.',
        name: 'school',
        default: 'Gotham High'
    },
];

const menu = // Object containing main menu options
    {
        type: 'list',
        message: "Select the type of team member would you like to add.",
        name: 'role',
        choices: ['Engineer', 'Intern', 'Done adding members'],
    };

// Function to call inquirer with option to add additional members
function createTeam () {
    inquirer.prompt(menu).then((res) => {
        console.log(res.role);
        switch(res.role){
            case 'Engineer':
                return createEngineer();
            case 'Intern':
                return createIntern();
            case 'Done adding members':
                console.log(generatedTeam);
                return createHTML(generatedTeam);
        }
    });
}

// Function to call inquirer with manager questions
function createManager () {
    inquirer.prompt(managerQuestions).then((res) => {
        const managerData = new Manager(
            res.name,
            res.id,
            res.email,
            res.office
        );
    generatedTeam.push(managerData);
    console.log(generatedTeam);
    createTeam();
    });
}

// Function to call inquirer with engineer questions
function createEngineer() {
    inquirer.prompt(engQuestions).then((res) => {
        const engineerData = new Engineer(
            res.name,
            res.id,
            res.email,
            res.github
        );
    generatedTeam.push(engineerData);
    console.log(generatedTeam);
    createTeam();
    });
}

// Function to call inquirer with intern questions
function createIntern() {
    inquirer.prompt(intQuestions).then((res) => {
        const internData = new Intern(
            res.name,
            res.id,
            res.email,
            res.school
        );
    generatedTeam.push(internData);
    console.log(generatedTeam);
    createTeam();
    });
}

// Function to write README file
function writeToFile(data) {
    fs.writeFileSync('./dist/index.html', data, (err) =>
    err ? console.log(err) : console.log('Created successfully'));
    return;
}

// Function for boiler plate HTML text and inserting card info
function createHTML (team) {
    var htmlContent = `<!DOCTYPE html>
    <html lang="en-us">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@400;500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
        <link rel="icon" href="./icon.png">
        <title>Team Profile</title>
    </head>
    <body>
        <header class="banner">
            <h1 class="display-3">Team Profile</h1>
        </header>
        <section class="container">
            <div class="row align-items-center justify-content-center">
                ${createCard(team)}
            </div>
        </section>
    
    </body>
    </html>`
    return writeToFile(htmlContent);
}

// Function to create HTML cards containing teammate info
function createCard (team) {
    console.log(`team length = ${team.length}`)
    console.log(team); 
    var cardContent = '';
    for (let i = 0; i < team.length; i++) {
        console.log(`i = ${i}`);
        if (team[i].getRole() === 'Manager'){
                cardContent += `<div class="card col-3">
                <ul class ="list-group">
                    <h3>${team[i].name}</h3>
                    <h5>Manager 💼</h5>
                    <li class="list-group-item">Employee ID: ${team[i].id}</li>
                    <li class="list-group-item">Email: ${team[i].email}</li>
                    <li class="list-group-item">Office #: ${team[i].office}</li>
                </ul>
            </div>`;
        } else if (team[i].getRole() === 'Engineer'){
                cardContent +=  `<div class="card col-3">
                <ul class ="list-group">
                    <h3>${team[i].name}</h3>
                    <h5>Engineer 🦾</h5>
                    <li class="list-group-item">Employee ID: ${team[i].id}</li>
                    <li class="list-group-item">Email: ${team[i].email}</li>
                    <li class="list-group-item">GitHub: ${team[i].github}</li>
                </ul>
            </div>`
        } else if (team[i].getRole() === 'Intern'){ 
                cardContent +=  `<div class="card col-3">
                <ul class ="list-group">
                    <h3>${team[i].name}</h3>
                    <h5>Intern 🔰</h5>
                    <li class="list-group-item">Employee ID: ${team[i].id}</li>
                    <li class="list-group-item">Email: ${team[i].email}</li>
                    <li class="list-group-item">School: ${team[i].school}</li>
                </ul>
            </div>`;
        }
        }
    return cardContent;
    }

// Function to initialize app
function init() {
    createManager();
}

// Function call to initialize app
init();

