const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter your GitHub username (required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information aobut yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => confirmAbout
        },
    ]);
};

const promptProject = porfolioData => {

    if (!porfolioData.projects) {
        porfolioData.projects = [];
    }

    console.log(`
        =================
        Add a New Project
        =================
    `);

    return inquirer.prompt
        ([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name your project? (required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a project name');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: "Provide a description of the project (required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Enter a description');
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'languages',
                message: 'What did you build this project with? (Check all that apply)',
                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
            },
            {
                type: 'input',
                name: 'link',
                message: 'Enter the GitHub link to your project. (required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Enter project link');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'feature',
                message: 'Would you like to feature this project?',
                default: false
            },
            {
                type: 'confirm',
                name: 'confirmAddProject',
                message: 'Would you like to add another project?',
                default: false
            }

        ])
        .then(projectData => {
            porfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(porfolioData);
            } else {
                return porfolioData;
            }
        });
};


promptUser()
    .then(promptProject)
    .then(porfolioData => {
        console.log(porfolioData);
    });



// const fs = require('fs');
// const generatePage = require('./src/page-template.js')

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const [name, github] = profileDataArgs;

// fs.writeFile('index.html', generatePage(name, github), err =>{
//     if(err) throw err;
//     console.log('Porfolio complete! Checkout index.html to see the output!');
// });

// var commandLineArgs = process.argv
// console.log(commandLineArgs)



// const printProfileData = (profileDataArgs) => {
//     for (let i = 0; i < profileDataArgs.length; i += 1) {
//         console.log(profileDataArgs[i]);
//     }
// console.log("===========");

// profileDataArgs.forEach(profileItem =>
//     console.log(profileItem));
// };

// printProfileData(profileDataArgs);

