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

function insertManager(){
return
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css" integrity="sha384-SI27wrMjH3ZZ89r4o+fGIJtnzkAnFs3E4qz9DIYioCQ5l9Rd/7UAa8DHcaL8jkWt" crossorigin="anonymous">
    <title>Team Page</title>
</head>
<body>
`;
}


function closePage(){
return
`   <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/js/bootstrap.min.js" integrity="sha384-3qaqj0lc6sV/qpzrc1N5DC6i1VRn/HyX4qdPaiEFbn54VjQBEU341pvjz7Dv3n6P" crossorigin="anonymous"></script>
    </body>
    </html>`;
    }
