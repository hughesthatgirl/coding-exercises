// TODO: What are we importing?
//Importing the fs module
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
//Passing it the file to add on to, passing it what should be added, and then a call back to handle an error
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  //if there is an error console.error else console.log 'commit logged'
  err ? console.error(err) : console.log('Commit logged!')
);
