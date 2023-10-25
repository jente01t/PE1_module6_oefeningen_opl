import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let student;
let studentenlijst = [];

while (student != "S") {
    student = await userInput.question('Geef de naam van de student: ');
    if (student != "S") {
        studentenlijst.push(student);
    } 
}

console.log("De studenten zijn: " + studentenlijst.join(", "));

console.log('De studentenlijst: ')
for (let i = 0; i < studentenlijst.length; i++) {
    console.log(studentenlijst[i]);
}

process.exit();