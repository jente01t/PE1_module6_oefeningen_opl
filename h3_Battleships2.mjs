import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let veld = [
    ["[ ]", "[ ]", "[ ]", "[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]","[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
]

//let bootLengte = parseFloat (await userInput.question('Geef de lengte van de boot: '));
//let bootOrianatie = parseFloat (await userInput.question('Geef de oriantatie van de boot: '));
//let bootX = parseFloat(await userInput.question('Geef de X coördinaat van de boot: '))
//let bootY = parseFloat(await userInput.question('Geef de Y coördinaat van de boot: '))


let x = parseFloat(await userInput.question('Geef de X coördinaat van het schot: '));
let y = parseFloat(await userInput.question('Geef de Y coördinaat van het schot: '));

function schiet (x, y) {
    if (x < 0 || x >= 10 ||y < 0 || y >= 10) {
        console.log('Je schiet uit het veld.')
    } else {
        veld[y-1][x-1] = "[X]";
    }
}

//function boot (bootLengte, bootOrianatie) {
    
//}

console.log(schiet(x, y));



process.exit();

