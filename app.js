const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('Employee.js');
const engineer = require('Engineer.js');
const intern = require('Intern.js');
const manager = require('Manager.js');

var teamlist = [];

function 


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
        var manager = new manager(data.managerName, data.idNumber, data.manEmail, data.offnum);
        teamlist.push(manager);

    });

}




function startBuilding() {
    console.log("Let's build a team");
    setManager();
}
