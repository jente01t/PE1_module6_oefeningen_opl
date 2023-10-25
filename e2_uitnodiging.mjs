import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let studenten = ["Jente", "Alexander", "Gust", "Nick"];

console.log('Studenten: ');

for (let i = 0; i < studenten.length; i++) {
    console.log(studenten[i] + " is uitgenodigd.");
}

process.exit();