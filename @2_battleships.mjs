import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let veldSpeler1 = [
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

let veldSpeler2 = [
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

let bootLengte = 0;
let aantalBoten1 = 0;
let aantalBoten2 = 0;
let raakSpeler1 = 0;
let raakSpeler2 = 0;
let aanzetSpeler1 = true;


console.log('Speler 1, plaats je boten: ');
while (aantalBoten1 <= 2) {
    bootLengte = parseFloat(await userInput.question('Geef de lengte van de boot: '));
    let bootOrianatie = await userInput.question('Geef de oriantatie van de boot (up, down, right, left): ');
    let bootX = parseFloat(await userInput.question('Geef de X coördinaat van de boot: '));
    let bootY = parseFloat(await userInput.question('Geef de Y coördinaat van de boot: '));
    bootSpeler1(bootLengte, bootOrianatie, bootX, bootY);
    console.log('');
}
printVeld(veldSpeler1);

console.log('Speler 2, plaats je boten: ');
while (aantalBoten2 <= 2) {
    bootLengte = parseFloat(await userInput.question('Geef de lengte van de boot: '));
    let bootOrianatie = await userInput.question('Geef de oriantatie van de boot (up, down, right, left): ');
    let bootX = parseFloat(await userInput.question('Geef de X coördinaat van de boot: '));
    let bootY = parseFloat(await userInput.question('Geef de Y coördinaat van de boot: '));
    bootSpeler2(bootLengte, bootOrianatie, bootX, bootY);
    console.log('');
}
printVeld(veldSpeler2);


while (raakSpeler1 < 3 || raakSpeler2 < 3) {
    if (aanzetSpeler1) {
        console.log('Speler 1, schiet op de boten van speler 2: ');
        let x = parseFloat(await userInput.question('Geef de X coördinaat van het schot: '));
        let y = parseFloat(await userInput.question('Geef de Y coördinaat van het schot: '));
        schietSpeler1(x, y);
        printVeld(veldSpeler1);
        aanzetSpeler1 = false;
    } else {
        console.log('Speler 2, schiet op de boten van speler 1: ');
        let x = parseFloat(await userInput.question('Geef de X coördinaat van het schot: '));
        let y = parseFloat(await userInput.question('Geef de Y coördinaat van het schot: '));
        schietSpeler2(x, y);
        printVeld(veldSpeler1);
        aanzetSpeler1 = true;
    }
}


console.log("Je hebt gewonnen!");

process.exit();



function bootSpeler1(bootLengte, bootOrianatie, bootX, bootY) {
    let i = 0
    if (bootLengte <= 5 && bootLengte >= 2) {
        if (bootOrianatie == "up") {
            if (bootY - bootLengte < 0) {
                console.log('Je boot staat uit het veld.');
                process.exit();
            } else {
                for (i = 0; i < bootLengte; i++) {
                    veldSpeler1[bootY - 1 - i][bootX - 1] = "[B]";
                    aantalBoten1++;
                }
            }
        } else if (bootOrianatie == "down") {
            if (bootY + bootLengte > 10) {
                console.log('Je boot staat uit het veld.');
                process.exit();
            } else {
                for (i = 0; i < bootLengte; i++) {
                    veldSpeler1[bootY - 1 + i][bootX - 1] = "[B]";
                    aantalBoten1++;
                }
            }
        } else if (bootOrianatie == "left") {
            if (bootX - bootLengte < 0) {
                console.log('Je boot staat uit het veld.');
                process.exit();
            } else {
                for (i = 0; i < bootLengte; i++) {
                    veldSpeler1[bootY - 1][bootX - 1 - i] = "[B]";
                    aantalBoten1++;
                }
            }
        } else if (bootOrianatie == "right") {
            if (bootX + bootLengte > 10) {
                console.log('Je boot staat uit het veld.');
                process.exit();
            } else {
                for (i = 0; i < bootLengte; i++) {
                    veldSpeler1[bootY - 1][bootX - 1 + i] = "[B]";
                    aantalBoten1++;
                }
            }
        }
    } else {
        console.log('Je boot is te lang of te kort.');
        process.exit();
    }
}

function bootSpeler2(bootLengte, bootOrianatie, bootX, bootY) {
    let i = 0
    if (bootLengte <= 5 && bootLengte >= 2) {
        if (bootOrianatie == "up") {
            if (bootY - bootLengte < 0) {
                console.log('Je boot staat uit het veld.');
                process.exit();
            } else {
                for (i = 0; i < bootLengte; i++) {
                    veldSpeler2[bootY - 1 - i][bootX - 1] = "[B]";
                    aantalBoten2++;
                }
            }
        } else if (bootOrianatie == "down") {
            if (bootY + bootLengte > 10) {
                console.log('Je boot staat uit het veld.');
                process.exit();
            } else {
                for (i = 0; i < bootLengte; i++) {
                    veldSpeler2[bootY - 1 + i][bootX - 1] = "[B]";
                    aantalBoten2++;
                }
            }
        } else if (bootOrianatie == "left") {
            if (bootX - bootLengte < 0) {
                console.log('Je boot staat uit het veld.');
                process.exit();
            } else {
                for (i = 0; i < bootLengte; i++) {
                    veldSpeler2[bootY - 1][bootX - 1 - i] = "[B]";
                    aantalBoten2++;
                }
            }
        } else if (bootOrianatie == "right") {
            if (bootX + bootLengte > 10) {
                console.log('Je boot staat uit het veld.');
                process.exit();
            } else {
                for (i = 0; i < bootLengte; i++) {
                    veldSpeler2[bootY - 1][bootX - 1 + i] = "[B]";
                    aantalBoten2++;
                }
            }
        }
    } else {
        console.log('Je boot is te lang of te kort.');
        process.exit();
    }
}



function schietSpeler1(x, y) {
    if (x > 10 || x < 1 || y > 10 || y < 1) {
        console.log("Je schot is buiten het veld.");
    } else {
        if (veldSpeler1[y - 1][x - 1] == "[B]") {
            console.log("Raak!");
            console.log('');
            veldSpeler1[y - 1][x - 1] = "[*]";
            raakSpeler1++;
            return raakSpeler1;
        } else {
            console.log("Mis!");
            veldSpeler1[y - 1][x - 1] = "[^]";
        }
    }
}

function schietSpeler2(x, y) {
    if (x > 10 || x < 1 || y > 10 || y < 1) {
        console.log("Je schot is buiten het veld.");
    } else {
        if (veldSpeler2[y - 1][x - 1] == "[B]") {
            console.log("Raak!");
            console.log('');
            veldSpeler2[y - 1][x - 1] = "[*]";
            raakSpeler2++;
            return raakSpeler2;
        } else {
            console.log("Mis!");
            veldSpeler2[y - 1][x - 1] = "[^]";
        }
    }
}

function printVeld(veld) {
    for (let i = 0; i < veld.length; i++) {
        console.log(veld[i].join(" "));
    }
}