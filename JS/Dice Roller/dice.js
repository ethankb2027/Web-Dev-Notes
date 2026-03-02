
const userInput = document.getElementById("userInput");
const resultText = document.getElementById("resultText");
const diceImages = document.getElementById("diceImages");
let numRolls;
let resultRoll;
let value;
let images = []


function rollDice(){
    resultRoll = [];
    images = []
    numRolls = Math.floor(Number(userInput.value));
    for(let i = 0; i < numRolls; i++){
        value = Math.floor((Math.random() * 6) + 1);
        resultRoll.push(String(value));
        images.push(`<img src="${value}.png" alt="Dice ${String(value)}.">`);
    }
    resultRoll = resultRoll.join(", ");
    resultText.textContent = `Dice rolled: ${resultRoll}`;
    diceImages.innerHTML = images.join('');
}