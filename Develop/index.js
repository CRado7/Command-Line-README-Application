// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter how this project should be used',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter what recorces you used for this project (ie team members)',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter how to test this code',
    },
    {
        type: 'list',
        name: 'licence',
        message: 'Which licence do you want to use?',
        choices: ['MIT', 'WTFPL', 'Artistic', 'Apache', 'None'],
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
    },
];

//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success! Your README.md file has been generated')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('README.md', generateReadMe(data));
    });
}

// Function call to initialize app
init();
