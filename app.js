const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/Employee.js');
const engineer = require('./lib/Engineer.js');
const intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

var teamlist = [];
//startBuilding();
setNumbers();

function setNumbers() {
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
            message: "What is the manager's name?",
            name: 'managerName',
            type: 'input'
        },
        {
            message: 'What is their ID number?',
            name: 'idNumber',
            type: 'input'
        },
        {
            message: "What is the manager's email?",
            name: 'manEmail',
            type: 'input'
        },
        {
            message: 'What is their office number?',
            name: 'offnum',
            type: 'input'
        }
    ])
    .then(function(data) {
        var manager = new Manager(data.managerName, data.idNumber, data.manEmail, data.offnum);
        teamlist.push(manager);
        console.log(manager);
        setNumbers();
    });

}




function startBuilding() {
    console.log("Let's build a team");
    setManager();
}
