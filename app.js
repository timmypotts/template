const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const htmlGen = require('./lib/htmlGen.js')

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
            if (answers.choice === "Engineer") {
                newEngineer();
            }
            else if (answers.choice === "Intern") {
                newIntern();
            }
            else {
                finishTeam(teamlist);
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
            console.log(manager.name);
            openHTML(manager);
            writeManager(manager);
            console.log('\n');
            menu();
        });

}

function newEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Please enter the engineer's name:",
            name: "name",
        },
        {
            type: 'input',
            message: "Please enter the engineer's ID number:",
            name: "employeeId",
        },
        {
            type: 'input',
            message: "Please enter the new engineer's ID email address.",
            name: "email",
        },
        {
            type: 'input',
            message: "Please enter the new engineer's GitHub username.",
            name: "git",
        }
    ])
        .then(function (data) {
            let engineer = new Engineer(data.employeeName, data.employeeID, data.employeeEmail, data.engineerGitHub);
            teamlist.push(engineer);
            console.log('\n');
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
        .then(function (data) {
            let intern = new Intern(data.name, data.employeeId, data.email, data.school);
            teamlist.push(intern);
            console.log('\n');
            menu();
        });
}


function openHTML(manager) {
    var init = htmlGen.initializeHTML(manager);
    fs.writeFile('team.html', init, function (err) {
        if(err) throw err;
    });
}

function writeManager(manager){
    var managerhtml = htmlGen.insertManager(manager);
    fs.appendFile('team.html', managerhtml, function (err) {
        if(err) throw err;
    });
}

function addToFile(data) {
    fs.appendFile("team.html", data, function(err) {
        if(err) return err;
    });
}


function addEmployees(teamlist) {
    teamlist.forEach(function(data) {
        switch (data.role) {
            case "Intern":
                addToFile(htmlGen.insertIntern(data));
                break;
            case "Engineer":
                addToFile(htmlGen.insertEngineer(data));
                break;
            default:
                break;
        }
    });
}


function finishTeam(teamlist) {
    addEmployees(teamlist);
    close = htmlGen.closeHTML();
    fs.appendFile('team.html', close, function (err) {
        if (err) throw err;
    });
    console.log('DONE!');
}

function startBuilding() {
    console.log("Let's build a team");
    setManager();
}


