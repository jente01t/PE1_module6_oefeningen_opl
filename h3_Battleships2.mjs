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
let bootOrianatie = parseFloat (await userInput.question('Geef de oriantatie van de boot (up, down, right, left): '));
let bootX = parseFloat(await userInput.question('Geef de X coördinaat van de boot: '))
let bootY = parseFloat(await userInput.question('Geef de Y coördinaat van de boot: '))


let x = parseFloat(await userInput.question('Geef de X coördinaat van het schot: '));
let y = parseFloat(await userInput.question('Geef de Y coördinaat van het schot: '));

function schiet (x, y) {
    if (x < 0 || x >= 10 || y < 0 || y >= 10) {
        console.log('Je schiet uit het veld.')
        process.exit();
    } else {
        veld[y-1][x-1] = "[X]";
    }
    return veld;
}

function boot (bootLengte, bootOrianatie, bootX, bootY) {
    if (bootOrianatie == "up") {
        if (bootY - bootLengte < 0) {
            console.log('Je boot staat uit het veld.');
            process.exit();
        }
    } else if (bootOrianatie == "down") {
        if (bootY + bootLengte > 10)  {
            console.log('Je boot staat uit het veld.');
            process.exit();
        }
    } else if (bootOrianatie == "left") {
        if (bootX - bootLengte < 0) {
            console.log('Je boot staat uit het veld.');
            process.exit();
        }
    } else if (bootOrianatie == "right") {
        if (bootX + bootLengte > 10) {
            console.log('Je boot staat uit het veld.');
            process.exit();
        }
    }
}

schiet(x, y);

for (let i = 0; i < veld.length; i++) {
    console.log(veld[i].join(" "));
}


process.exit();

