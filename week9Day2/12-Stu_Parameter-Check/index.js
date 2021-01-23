// console.log(process.argv);

const arg1 = process.argv[0];
const arg2 = process.argv[1];

const compareArgs = () => {
    if (arg1 === arg2){
        return true;
    }

    return false;
} 

const result = compareArgs();

console.log(result);