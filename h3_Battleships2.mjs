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

let bootLengte = parseFloat (await userInput.question('Geef de lengte van de boot: '));
let bootOrianatie = parseFloat (await userInput.question('Geef de oriantatie van de boot: '));

let x = parseFloat(await userInput.question('Geef de breedte van het schot: '));
let y = parseFloat(await userInput.question('Geef de hoogte van het schot: '));

function schiet (x, y) {
    veld[y-1][x-1] = "[X]";
}

function boot (bootLengte, bootOrianatie) {
    
}

console.log(schiet(x, y));



process.exit();

