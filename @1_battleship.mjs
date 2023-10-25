import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let veld = [
    ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
    ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
]

let bootLengte = parseFloat(await userInput.question('Geef de lengte van de boot: '));
let bootOrianatie = await userInput.question('Geef de oriantatie van de boot (up, down, right, left): ');
let bootX = parseFloat(await userInput.question('Geef de X coördinaat van de boot: '));
let bootY = parseFloat(await userInput.question('Geef de Y coördinaat van de boot: '));
let raak = 0;


boot(bootLengte, bootOrianatie, bootX, bootY);


for (let i = 0; i < veld.length; i++) {
    console.log(veld[i].join(" "));
}

while (raak < bootLengte) {
    let x = parseFloat(await userInput.question('Geef de breedte van het schot: '));
    let y = parseFloat(await userInput.question('Geef de hoogte van het schot: '));
    schiet(x, y);
    for (let i = 0; i < veld.length; i++) {
        console.log(veld[i].join(" "));
    }
}

console.log("Je hebt gewonnen!");

process.exit();





function boot(bootLengte, bootOrianatie, bootX, bootY) {
    let i = 0
    if (bootLengte <= 5 && bootLengte >= 2) {
        if (bootOrianatie == "up") {
            if (bootY - bootLengte < 0) {
                console.log('Je boot staat uit het veld.');
                process.exit();
            } else {
                for (i = 0; i < bootLengte; i++) {
                    veld[bootY - 1 - i][bootX - 1] = "[B]";
                }
            }
        } else if (bootOrianatie == "down") {
            if (bootY + bootLengte > 10) {
                console.log('Je boot staat uit het veld.');
                process.exit();
            } else {
                for (i = 0; i < bootLengte; i++) {
                    veld[bootY - 1 + i][bootX - 1] = "[B]";
                }
            }
        } else if (bootOrianatie == "left") {
            if (bootX - bootLengte < 0) {
                console.log('Je boot staat uit het veld.');
                process.exit();
            } else {
                for (i = 0; i < bootLengte; i++) {
                    veld[bootY - 1][bootX - 1 - i] = "[B]";
                }
            }
        } else if (bootOrianatie == "right") {
            if (bootX + bootLengte > 10) {
                console.log('Je boot staat uit het veld.');
                process.exit();
            } else {
                for (i = 0; i < bootLengte; i++) {
                    veld[bootY - 1][bootX - 1 + i] = "[B]";
                }
            }
        }
    } else {
        console.log('Je boot is te lang of te kort.');
        process.exit();
    }
}



function schiet(x, y) {
    if (x > 10 || x < 1 || y > 10 || y < 1) {
        console.log("Je schot is buiten het veld.");
    } else {
        if (veld[y - 1][x - 1] == "[B]") {
            console.log("Raak!");
            veld[y - 1][x - 1] = "[*]";
            raak++;
            return raak;
        } else {
            console.log("Mis!");
            veld[y - 1][x - 1] = "[^]";
        }
    }
}
