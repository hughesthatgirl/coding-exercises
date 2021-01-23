const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'first_name',
        message: 'What is your first name?'
    },
    {
        type: 'list',
        name: 'languages',
        message: 'What languages do you know?',
        choices: [
            'HTML',
            'CSS',
            'JS',
            'PHP',
            'Java'
        ]
    },
    {
        type: 'list',
        name: 'communication',
        message: 'What is your preferred method of communication?',
        choices: [
            'Text',
            'Call',
            'Email'
        ]
    }
]

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});