import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let fibonacci = [0, 1];

for (let i = 0; i < 8; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
}

console.log(fibonacci);

process.exit();