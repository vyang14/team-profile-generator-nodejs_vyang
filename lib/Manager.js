const Employee = require('./Employee');

export default class Manager extends Employee {
    constructor(name, id, email, office) {
        console.log(this);
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
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

    getOffice() {
        console.log(this);
        var thisOffice = this.office;
        return thisOffice;
    }

    getrole() {
        var thisrole = 'Manager';
        return thisrole;
    }
}