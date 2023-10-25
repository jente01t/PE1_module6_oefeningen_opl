import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let prijzen = [15, 30 , 40 , 50];

function korting (prijzen) {
    prijzen = prijzen - prijzen * 0.15;
    return prijzen;
}

for (let i = 0; i < prijzen.length; i++) {
    console.log(korting(prijzen[i]));
}

process.exit();