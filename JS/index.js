
// JS INTRO✅ 

console.log(`Hello World`);
console.log('This is another message');

//window.alert("This is an alert");
//window.alert(`Where the huzz at?`);

document.getElementById(`h1ID`).textContent = `get SABOTAGED`;
document.getElementById(`pID`).textContent = `get sabotaged AGAIN!`;

//single line comment

/*
    multi
    line
    comment
*/

// VARIABLES🅿️ 

let fullname;
fullname = "The Creator";
let age = 250000000;
let livestatus = true;

document.getElementById('var1').textContent = `This website was created by ${fullname}.`;
document.getElementById('var2').textContent = `${fullname} is ${age} years old.`;
document.getElementById('var3').textContent = `Is he watching you: ${livestatus}.`;
document.getElementById('var4').textContent = `The previous variable type is ${typeof livestatus}.`;

// ARITHMETIC OPERATORS➕

let ariVar = 30

ariVar = ariVar + 2;
ariVar = ariVar - 2;
ariVar = ariVar * 2;
ariVar = ariVar / 10;
ariVar = ariVar ** 2;
ariVar = ariVar % 7;

console.log(`ARITHMETIC OPERATORS: ${ariVar}`);

let ariVar1 = 20;
ariVar1 += 2;
ariVar1 -= 2;
ariVar1 *= 2;
ariVar1 /= 10;
ariVar1 **= 2;
ariVar1 %= 12;

console.log(`ARITHMETIC OPERATORS: ${ariVar1}`);

ariVar1++;
ariVar1++;
ariVar1--;

console.log(`ARITHMETIC OPERATORS: ${ariVar1}`);

//operator precedence: () ---> ** ---> * / % ---> + -

// ACCEPT USER INPUT🤌

//let accInput = window.prompt("What color is your Bugatti?"); // easy way
//console.log(accInput);

let accInput1; //professional way
document.getElementById("accSubmit").onclick = function(){
    accInput1 = document.getElementById("accUserInput").value;
    document.getElementById("accChange").textContent = `This guy really typed in "${accInput1}"`;
}

// TYPE CONVERSION🏪

let typeX = "skibidi";
let typeY = "skibidi";
let typeZ = "skibidi";

typeX = Number(typeX);
typeY = String(typeY);
typeZ = Boolean(typeZ);

console.log("TYPE CONVERSION:", typeX, typeof typeX);
console.log("TYPE CONVERSION:", typeY, typeof typeY);
console.log("TYPE CONVERSION:", typeZ, typeof typeZ);

typeX = 25;
typeY = 25;
typeZ = 25;

typeX = Number(typeX);
typeY = String(typeY);
typeZ = Boolean(typeZ);

console.log("TYPE CONVERSION:", typeX, typeof typeX);
console.log("TYPE CONVERSION:", typeY, typeof typeY);
console.log("TYPE CONVERSION:", typeZ, typeof typeZ);

typeX = "";
typeY = "";
typeZ = "";

typeX = Number(typeX);
typeY = String(typeY);
typeZ = Boolean(typeZ);

console.log("TYPE CONVERSION:", typeX, typeof typeX);
console.log("TYPE CONVERSION:", typeY, typeof typeY);
console.log("TYPE CONVERSION:", typeZ, typeof typeZ);

let typeX1;
let typeY1;
let typeZ1;

typeX1 = Number(typeX1);
typeY1 = String(typeY1);
typeZ1 = Boolean(typeZ1);

console.log("TYPE CONVERSION:", typeX1, typeof typeX1);
console.log("TYPE CONVERSION:", typeY1, typeof typeY1);
console.log("TYPE CONVERSION:", typeZ1, typeof typeZ1);

// CONSTANTS🛑

const CONSTPI = 3.14159 //makes the assignment permanent
//error will occur if you try to reassign a value to a constant
//good rule of thumb is to have the constant all uppercase if they're a number or boolean

// MATH OBJECTS✖️

mathX = -4.7;
mathY = 0;
mathZ = 4.3;

console.log("MATH OBJECTS:", Math.round(mathX));
console.log("MATH OBJECTS:", Math.floor(mathX));
console.log("MATH OBJECTS:", Math.ceil(mathX));
console.log("MATH OBJECTS:", Math.trunc(mathX));
console.log("MATH OBJECTS:", Math.pow(mathX, mathY));
console.log("MATH OBJECTS:", Math.sqrt(mathZ));
console.log("MATH OBJECTS:", Math.log(mathZ));
console.log("MATH OBJECTS:", Math.sin(mathZ));
console.log("MATH OBJECTS:", Math.cos(mathZ));
console.log("MATH OBJECTS:", Math.tan(mathZ));
console.log("MATH OBJECTS:", Math.abs(mathZ));
console.log("MATH OBJECTS:", Math.sign(mathX));
console.log("MATH OBJECTS:", Math.max(mathX, mathY, mathZ));
console.log("MATH OBJECTS:", Math.min(mathX, mathY, mathZ));

// RANDOM NUMBER GENERATOR🎲

console.log("RNG:", Math.random());
console.log("RNG:", Math.ceil(Math.random() * 6));

const RNGMAX = 200;
const RNGMIN = 50;
console.log("RNG:", Math.round(Math.random() * (RNGMAX - RNGMIN)) + RNGMIN);

// IF STATEMENTS🎏

let ifX = Math.random();

if(ifX <= 0.5){
    if(ifX < 0.25){
        console.log("IF STATEMENTS:", "wow that's disappointingly small...");
    }
    else{
        console.log("IF STATEMENTS:", "below average");
    }
}
else if(ifX >= 0.67 && ifX < 0.68){
    console.log("IF STATEMENTS:", "67 HAHAHAHAHAHAH 67 67 67");
}
else{
    console.log("IF STATEMENTS:", "above average");
}

// TERNARY OPERATOR🚂

const ternTime = Math.trunc(Math.random() * 2400);
const ternGreeting = ternTime < 1200 ? "Good Morning" : "Good Not Morning";
console.log("TERNARY OPERATOR:",`The time is currently ${ternTime}. ${ternGreeting}!`);

// SWITCHES💡

const switchGrade = Math.trunc(Math.random() * 100);
let switchReport;

switch(true){ //what the switch does is see if the inside of the () matches the cases
    case switchGrade >= 90:
        switchReport = "You're Asian";
        break;
    case switchGrade >= 80:
        switchReport = "You're below average";
        break;
    case switchGrade >= 70:
        switchReport = "You failed your whole family";
        break;
    case switchGrade < 70:
        switch(switchGrade){
            case 67:
                switchReport = "OMG 67 HAHAHAHHAHAAH 67 67 67 6-7 6&7 SIX SEVEN AHAHAHHAHAH";
                break;
            default:
                switchReport = "You're going to be a McDonald's worker for your entire life";
                break;
        }
        break;
    default:
        switchReport = "How did this message get broadcasted?";
}

console.log("SWITCHES:", `Your grade is ${switchGrade}. ${switchReport}`);

// STRING METHODS🧵

const stringName = "Username   Yeah";
console.log("STRING METHODS: Sample Text:", stringName)

console.log("STRING METHODS:", `charAt ${stringName.charAt(0)}`);
console.log("STRING METHODS:", `indexOf ${stringName.indexOf("e")}`);
console.log("STRING METHODS:", `lastIndexOf ${stringName.lastIndexOf("e")}`);
console.log("STRING METHODS:", `length ${stringName.length}`);
console.log("STRING METHODS:", `trim ${stringName.trim()}`);
console.log("STRING METHODS:", `toUpperCase ${stringName.toUpperCase()}`);
console.log("STRING METHODS:", `toLowerCase ${stringName.toLowerCase()}`);
console.log("STRING METHODS:", `repeat ${stringName.repeat(3)}`);
console.log("STRING METHODS:", `startsWith ${stringName.startsWith("U")}`);
console.log("STRING METHODS:", `endsWith ${stringName.endsWith("a")}`);
console.log("STRING METHODS:", `includes ${stringName.includes(" ")}`);
console.log("STRING METHODS:", `replaceAll ${stringName.replaceAll(" ", "-")}`);
console.log("STRING METHODS:", `padStart ${stringName.padStart(20, "-")}`);
console.log("STRING METHODS:", `padEnd ${stringName.padEnd(20, "-")}`);

// STRING SLICING✂️

const stringEmail = "notEpstein@jmail.com";
const stringLabel = "STRING SLICING✂️:";
console.log(stringLabel, "Sample Text:", stringEmail);

console.log(stringLabel, stringEmail.slice(0, stringEmail.indexOf("@")));
console.log(stringLabel, stringEmail.slice(stringEmail.indexOf("@") + 1));
console.log(stringLabel, stringEmail.slice(-3));

// METHOD CHAINING🔗

const methodLabel = "METHOD CHAINING🔗:";
const methodUser = "   beN DovER";
console.log(methodLabel, methodUser);

const methodUserAfter = methodUser.trim().charAt(0).toUpperCase() + methodUser.trim().slice(1).toLowerCase();
console.log(methodLabel, methodUserAfter);

// LOGICAL OPERATORS🥸

/*
    AND - &&
    OR  - ||
    NOT - !
*/

// STRICT EQUALITY🟰

/*
      = assignment operator
     == comparison operator (compares values)
    === strict comparison operator (compares values and types)
     != inequality operator
    !== strict inequality operator
*/

// WHILE LOOPS➰

const whileLabel = "WHILE LOOPS➰:";

let whileX = 0;
while(whileX < 5){
    console.log(whileLabel, whileX);
    whileX += 1;
}

let whileY = 0;
do{
    console.log(whileLabel, whileY);
    whileY += 1;
}while(whileY < 5)

// FOR LOOPS➿

const forLabel = "FOR LOOPS➿:";

for(let i = 1; i <= 20; i+=2){
    if(i === 7){
        continue;
    }
    else if(i === 19){
        break;
    }
    else{
        console.log(forLabel, i);
    }
}

// FUNCTIONS🚜

const functionsLabel = "FUNCTIONS🚜:"

function functionMessage(name, time){
    return time < 1200 ? `Good Morning ${name}!` : `Good Not Morning ${name}!`;
}

console.log(functionsLabel, functionMessage("Elon", 1300));

// VARIABLE SCOPE🔭

//Variables inside curly braces (i.e. functions) have local scope. Otherwise, it's a global scope variable
//If both a local and global scope variable coexist, the local variable will be prioritized

const variableLabel = "VARIABLE SCOPE🔭:";

const variableScope = 10; //Global scope variable

function localFunction(){
    const variableScope = 5; //Local scope variable
    console.log(variableLabel, variableScope);
}

localFunction();

// ARRAYS☀️

const arrayLabel = "ARRAYS☀️:"

let sampleArray = ["Eren","Armin","Mikasa"];
console.log(arrayLabel, "Sample Array:", sampleArray);

console.log(arrayLabel, sampleArray[0]);
console.log(arrayLabel, sampleArray[-1]);

sampleArray[1] = "Levi";
sampleArray[3] = "Reiner";
console.log(arrayLabel, sampleArray);

sampleArray = ["Eren","Armin","Mikasa"];
sampleArray.push("Levi");
console.log(arrayLabel, sampleArray);

sampleArray = ["Eren","Armin","Mikasa"];
sampleArray.unshift("Levi");
console.log(arrayLabel, sampleArray);

sampleArray = ["Eren","Armin","Mikasa"];
sampleArray.shift();
console.log(arrayLabel, sampleArray);

sampleArray = ["Eren","Armin","Mikasa"];
console.log(arrayLabel, sampleArray.length);
console.log(arrayLabel, sampleArray.indexOf("Armin"));
console.log(arrayLabel, sampleArray.indexOf("Levi"));

for(let anyName of sampleArray){
    console.log(arrayLabel, anyName);
}

sampleArray = ["Eren","Armin","Mikasa"];
sampleArray.sort();
console.log(arrayLabel, sampleArray);

sampleArray = ["Eren","Armin","Mikasa"];
sampleArray.sort().reverse();
console.log(arrayLabel, sampleArray);

// SPREAD OPERATOR🥜

const spreadLabel = "SPREAD OPERATOR🥜:";

let spreadSample = [1,2,3,4,5];
console.log(spreadLabel, "Sample Array:", spreadSample);

let spreadMax = Math.max(spreadSample);
console.log(spreadLabel, spreadMax);
spreadMax = Math.max(...spreadSample);
console.log(spreadLabel, spreadMax);

let spreadSample1 = "CaseOh";
spreadSample1 = [...spreadSample1];
console.log(spreadLabel, spreadSample1);

spreadSample1 = spreadSample1.join("-");
console.log(spreadLabel, spreadSample1);

let spreadCombined = [spreadSample, spreadSample1];
console.log(spreadLabel, spreadCombined);

spreadCombined = [...spreadSample, ...spreadSample1, "last element"];
console.log(spreadLabel, spreadCombined);

// REST PARAMETERS🛌

const restLabel = "REST PARAMETERS🛌:";

function openFridge(...foods){
    console.log(restLabel, foods);
    console.log(restLabel, ...foods);
}

openFridge("apple","pie","rice");

function nameCombinator(...parts){
    console.log(restLabel, parts.join(" "));
}

nameCombinator("Frederick","Douglas","Powe","III");

// RANDOM PASSWORD GENERATOR🎲

const randomLabel = "RANDOM PASSWORD GENERATOR🎲:";

function passwordGenerator(length, lower, upper, numbers, symbols){

    const lowerChars = "qwertyuiopasdfghjklzxcvbnm";
    const upperChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()";
    let allowedChars = "";
    let password = "";

    allowedChars += lower ? lowerChars : "";
    allowedChars += upper ? upperChars : "";
    allowedChars += numbers ? numberChars : "";
    allowedChars += symbols ? symbolChars : "";

    if(length < 1 && !(lower || upper || numbers || symbols)){
        console.log(randomLabel, "Understandable. Have a great day.");
    }
    else if(length < 1){
        console.log(randomLabel, "You gotta have something.");
    }
    else if(!(lower || upper || numbers || symbols)){
        console.log(randomLabel, "Select at least one of the features man.");
    }
    else{
        for(let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        console.log(randomLabel, password);
    }
}

passwordGenerator(15, true, true, true, true);

// CALLBACKS📲

//Used to handle async operations
//"When you're done with this task, do this task next"

const callbackLabel = "CALLBACKS📲:";

callbackFunctionBefore(callbackFunctionAfter);

function callbackFunctionBefore(callbackAny){
    console.log(callbackLabel, "This message comes first.");
    callbackAny();
}

function callbackFunctionAfter(){
    console.log(callbackLabel, "This message comes after.");
}

// forEach()4️⃣

//method used to iterate over the elements of an array and apply a specified function (callback) to each element

const forEachLabel = "forEach()4️⃣:"

const forEachSample = [1,2,3,4,5];

function forEachFunction(number){
    console.log(forEachLabel, number);
}
forEachSample.forEach(forEachFunction);

function forEachTriple(element, index, array){ //element, index, array are provided
    array[index] = element * 3;
    console.log(forEachLabel, array);
}
forEachSample.forEach(forEachTriple); //changes the original array
console.log(forEachLabel, forEachSample);

// map()🗺️

//accepts a callback and applies a function to each element of an array, then returns a new array

const mapLabel = "map()🗺️:"

const mapSample = [1,2,3,4,5];
function mapFunction(element){
    return Math.pow(element, 2);
}
const mapResult = mapSample.map(mapFunction);
console.log(mapLabel, mapSample); //same as forEach(), but returns a new array
console.log(mapLabel, mapResult);

const mapDates = ["2023-5-13","2019-10-15","2005-5-13"];
const mapDatesAfter = mapDates.map(mapDatesFunction);
console.log(mapLabel, mapDatesAfter);
function mapDatesFunction(element){
    const mapParts = element.split("-");
    return `${mapParts[1]}/${mapParts[2]}/${mapParts[0]}`;
}

// filter()💧

//creates a new array by filtering out elements

const filterLabel = "filter()💧:";

const filterSample = [1,2,3,4,5,6,7];
const filterEvenNums = filterSample.filter(filterFunction);
console.log(filterLabel, filterSample);
console.log(filterLabel, filterEvenNums);
function filterFunction(element){
    return element % 2 === 0;
}

// reduce()🤏

//reduce the elements of an array to a single value

const reduceLabel = "reduce()🤏:";

const reduceSample = [20,30,40,15,16,4];
const reduceTotal = reduceSample.reduce(reduceFunction);
console.log(reduceLabel, reduceSample);
console.log(reduceLabel, reduceTotal);
function reduceFunction(accumulator, element){
    return accumulator + element;
}

// FUNCTION EXPRESSIONS😑

const fxnExpLabel = "FUNCTION EXPRESSIONS😑:";

const fxnExpHello = function(){
    console.log(fxnExpLabel, "Hello World");
};

fxnExpHello();

//setTimeout(fxnExpHello, 1000);

/*
setTimeout(function(){
    console.log(fxnExpLabel, "Hello Again");
}, 2000);
*/

const fxnExpNums = [1,2,3,4,5];
const fxnExpSqrs = fxnExpNums.map(function(element){
    return Math.pow(element, 2);
});
console.log(fxnExpLabel, fxnExpSqrs);

// ARROW FUNCTIONS🎯

const arrowLabel = "ARROW FUNCTIONS🎯:";

const arrowHello = () => console.log(arrowLabel, "Hello Earth🌍");
arrowHello();

const arrowGreeting = (name, age) => {console.log(arrowLabel, `Hello ${name}! `)
                                      console.log(arrowLabel, `Damn you're only ${age} years old?`)};
arrowGreeting("Lincoln", 999);

//setTimeout( () => console.log(arrowLabel, "Bruh"), 1000);

const arrowNums = [1,2,3,4,5];
const arrowSqrs = arrowNums.map((element) => Math.pow(element, 2));
console.log(arrowLabel, arrowSqrs);

// JS OBJECTS⚽

const objectLabel = "JS OBJECTS⚽:";

const person1 = {
    ObFullName: "Barack Obama",
    ObGreeting: function(){console.log(objectLabel, "Uhhh this is Barack.")}
}

const person2 = {
    ObFullName: "Joe Biden",
    ObGreeting: () => console.log(objectLabel, "SSSOOOOODDDAAAAA")
}

console.log(objectLabel, person1.ObFullName);
person1.ObGreeting();
console.log(objectLabel, person2.ObFullName);
person2.ObGreeting();

// THIS🫨

//reference to the object where THIS is used (the object depends on the immediate context)
//person.name = this.name
//doesn't work with arrow functions because it references the window object

const thisLabel = "THIS🫨:";

const thisPerson1 = {
    thisName: "Donald Trump",
    thisGreeting: function(){console.log(thisLabel, `My name is ${this.thisName}, and I'm the best!`)}
}
thisPerson1.thisGreeting();

console.log(this); //returns the properties of the current window

// CONSTRUCTORS🚧

const constructLabel = "CONSTRUCTORS🚧:";

function Car(make, model, year, color){ //the first letter is capital to denote an object is being CONSTRUCTED
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(constructLabel, `You drive the ${this.make}.`)}
}

const car1 = new Car("Ford","Mustang",2024,"red");
const car2 = new Car("Mazda","MX-5",1990,"pink");

console.log(constructLabel, car1.make, car1.model, car1.year, car1.color);
console.log(constructLabel, car2.make, car2.model, car2.year, car2.color);
car1.drive();
