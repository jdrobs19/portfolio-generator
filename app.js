const fs = require('fs');
const generatePage = require('./src/page-template.js')

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(name, github), err =>{
    if(err) throw err;
    console.log('Porfolio complete! Checkout index.html to see the output!');
});

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

