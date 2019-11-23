const inquirer = require('inquirer');
const fs = require('fs');


function Employee(name, id, title, email, gitName){
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
    this.git = 'github.com/' + gitName;
}