
const winningNumber = Math.trunc((Math.random() * 99) + 1);
let userNumber;
let attemptNumber = 1;
let winStatus = false;

do{
    userNumber = window.prompt(`Attempt #${attemptNumber}: Guess the winning number (1-100, integer)`);
    switch(true){
        case userNumber == winningNumber:
            winStatus = true;
            break;
        case userNumber > winningNumber:
            attemptNumber++;
            window.alert("BRO THAT GUESS IS WAY TOO HIGH!");
            break;
        case userNumber < winningNumber:
            attemptNumber++;
            window.alert("WTF WHY SO SMALL!");
            break;
        default:
            attemptNumber++;
            window.alert("Input an actual number bruh.");
            break;
    }
}while(!winStatus)

window.alert(`You guessed the winning number ${winningNumber}! It only took you ${attemptNumber} attempts.`);