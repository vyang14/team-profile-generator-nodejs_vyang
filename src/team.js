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

function createEmployee() {
    inquirer.prompt(empQuestions).then((res) => {
        const managerData = new Manager(
            res.name,
            res.id,
            res.email,
            res.office
        );
        createEmployee();
        generatedTeam.push(managerData);
    });
}

module.export = {createManager, createEmployee}