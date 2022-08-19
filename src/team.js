const inquirer = require('inquirer');

function createManager (data) {
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

function createEngineer() {
    inquirer.prompt(empQuestions).then((res) => {
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

function createIntern() {
    inquirer.prompt(empQuestions).then((res) => {
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

module.export = {createManager, createEngineer, createIntern}