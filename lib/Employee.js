class Employee {
    constructor(name, id, email) {
        console.log(this);
        this.name = name;
        this.id = id;
        this.email = email;
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

    getrole() {
        var thisrole = 'Employee';
        return thisrole;
    }
}

module.exports = Employee;