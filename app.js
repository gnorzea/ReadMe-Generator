const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const fs = require('fs');

const questions= [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a detailed description of your project.'
    },
    {
        type: 'input',
        name: 'technology',
        message: 'What are the technologies used in your project?'
    }, 
    
];

const writeFile = (fileName, data)=>{
    fs.writeFile(fileName, data, err => {if(err){return (err)}
else{console.log("ReadMe file generated!")}})
}
const promptUser = () => {return inquirer.prompt(questions)}

const initializeApp = () => {
    promptUser().then(userInput=>{
        writeFile("ReadMe.md", generateMarkdown(userInput))
    })
}

initializeApp();
