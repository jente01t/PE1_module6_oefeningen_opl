import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getallen = [1, 5, 40 ,20 ,15 ,97, 0, 9, 3, 10];

getallen.sort(function(a, b){return a - b});

console.log(getallen);

process.exit();