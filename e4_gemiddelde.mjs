import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let puntenLijst = [1, 5, 7 ,9 ,5 ,6 ,7 ,4 ,8 ,3 ,10];
let gemiddelde = 0;

for (let i = 0; i < puntenLijst.length; i++) {
    gemiddelde = gemiddelde + puntenLijst[i];
}

gemiddelde = gemiddelde / puntenLijst.length;

console.log('Het gemiddelde van de punten is: ' + gemiddelde);

process.exit();