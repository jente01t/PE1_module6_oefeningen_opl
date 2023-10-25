import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let naam = await userInput.question('Geef de naam die je zoekt: ');
let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"]

function zoekNaam (namen, naam) {
    for (let i = 0; i < namen.length; i++) {
        if (naam == namen[i]) {
            console.log(i);
        }
    }
}

zoekNaam(namen, naam);

process.exit();