// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown');

const generateReadMe = ({title, description, installation, usage, contribution, licence, GitHub, email, test, licenceType, MIT}) =>
`
${licenceType.MIT}

# ${title} 

## Description

${description}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

    
    ![alt text](assets/images/screenshot.png)

## Credits

${contribution}

## License

${licence}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Questions

If you would like to see more of my projects, please vist my <a href="https://github.com/${GitHub}">GitHub</a> account.

If you have any questions <a href="mailto:${email}">email me!</a>

## Tests

${test}`;

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
        choices: ['MIT', 'WTFPL', 'Artistic', 'Apache'],
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
