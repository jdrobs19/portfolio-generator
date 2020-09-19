// var commandLineArgs = process.argv
// console.log(commandLineArgs)

const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArgs) => {
    for (let i = 0; i < profileDataArgs.length; i += 1) {
        console.log(profileDataArgs[i]);
    }
console.log("===========");

profileDataArgs.forEach(profileItem =>
    console.log(profileItem));
};



printProfileData(profileDataArgs);