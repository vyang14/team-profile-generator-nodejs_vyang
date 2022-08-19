const inquirer = require('inquirer');

function createManager () {
    inquirer.prompt(managerQuestions).then((res) => {
        const managerData = new Manager(
            res.name,
            res.id,
            res.email,
            res.office
        );
    generatedTeam.push(managerData);
    createEmployee();
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
        createEngineer();
        generatedTeam.push(engineerData);
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
        createIntern();
        generatedTeam.push(internData);
    });
}


module.export = {createManager, createEngineer, createIntern}