const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

var teamlist = [];
startBuilding();

function menu() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What position do you want to add?",
            choices: ['Engineer', "Intern", "Finish Team"]
        }
    ])
    .then(answers => {
        if (answers.choice === "Engineer"){
            newEngineer();
        }
        else if (answers.choice === "Intern"){
            newIntern();
        }
        else {
            finishTeam();
        }
    });
}


function setManager() {
    console.log('Your team needs a manager.\n');
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the manager's name?",
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is their ID number?',
            name: 'idNumber',
        },
        {
            type: 'input',
            message: "What is the manager's email?",
            name: 'manEmail',
        },
        {
            type: 'input',
            message: 'What is their office number?',
            name: 'offnum',
        }
    ])
    .then(function(data) {
        var manager = new Manager(data.managerName, data.idNumber, data.manEmail, data.offnum);
        teamlist.push(manager);
        console.log(manager);
        menu();
    });

}

function newEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Please enter the engineer's name:",
            name: "employeeName",
        },
        {
            type: 'input',
            message: "Please enter the engineer's ID number:",
            name: "employeeID",
        },
        {
            type: 'input',
            message: "Please enter the new engineer's ID email address.",
            name: "employeeEmail",
        },
        {
            type: 'input',
            message: "Please enter the new engineer's GitHub username.",
            name: "engineerGitHub",
        }
    ])
    .then(function(data) {
        let engineer = new Engineer(data.employeeName, data.employeeID, data.employeeEmail, data.engineerGitHub);

        teamlist.push(engineer);
        menu();
    });
}


function newIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "Please enter the new intern's name."
        },
        {
            type: "input",
            name: "employeeID",
            message: "Please enter the new intern's ID number."
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "Please enter the new intern's ID email address."
        },
        {
            type: "input",
            name: "internSchool",
            message: "Please enter the new intern's school."
        }
    ])
    .then(function(data) {
        let intern = new Intern(data.employeeName, data.employeeID, data.employeeEmail, data.internSchool);

        teamlist.push(intern);
        menu();
    });
}


function finishTeam(){
    console.log('DONE!');
}


function startBuilding() {
    console.log("Let's build a team");
    setManager();
}
