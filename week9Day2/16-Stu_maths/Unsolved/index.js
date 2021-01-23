// TODO: Import `maths.js`
const maths = require('./maths');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

let operation = process.argv[2];
let numOne = parseInt(process.argv[3]);
let numTwo = parseInt(process.argv[4]);
let value;

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

switch(operation){
    case 'sum':
        value = maths.sum(numOne, numTwo);
        console.log(value);
        break;
    default:
        console.log('not valid');
}
