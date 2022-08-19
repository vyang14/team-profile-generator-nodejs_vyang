const Employee = require('./Employee');

export default class Engineer extends Employee {
    constructor(name, id, email, github) {
        console.log(this);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getName() {
        console.log(this);
        var thisName = this.name;
        return thisName;
    }

    getId() {
        console.log(this);
        var thisId = this.id;
        return thisId;
    }

    getEmail() {
        console.log(this);
        var thisEmail = this.email;
        return thisEmail;
    }

    getGithub() {
        console.log(this);
        var thisGithub = this.github;
        return thisGithub;
    }

    getRole() {
        var thisrole = 'Engineer';
        return thisrole;
    }
}