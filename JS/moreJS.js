
// CLASSES🏫

const classesLabel = "CLASSES🏫:"

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(classesLabel, `Product: ${this.name}`);
        console.log(classesLabel, `Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return (this.price + (this.price * salesTax)).toFixed(2);
    }
}

const classesProduct1 = new Product("Stadium Bottled Water", 48900.99);
classesProduct1.displayProduct();

const salesTax = 0.07;
console.log(classesLabel, `Total price (with tax) is $${classesProduct1.calculateTotal(salesTax)}.`);

// STATIC keyword⚡

const staticLabel = "STATIC keyword⚡:";

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
}
console.log(staticLabel, MathUtil.PI);
console.log(staticLabel, MathUtil.getDiameter(10));
console.log(staticLabel, MathUtil.getCircumference(10));

class User{
    static userCount = 0;
    
    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(staticLabel, `There is ${this.userCount} person online.`);
    }
}
const user1 = new User("Spongebob");
console.log(staticLabel, user1.username);
console.log(staticLabel, User.userCount);
User.getUserCount();

// INHERITANCE🤑

const inheritanceLabel = "INHERITANCE🤑:";

class Animal{ //parent class
    alive = true;

    eat(){
        console.log(inheritanceLabel, `This ${this.name} is eating.`);
    }
}
class Rabbit extends Animal{ //child class
    name = "rabbit";
    hop(){
        console.log(inheritanceLabel, `This ${this.name} is hopping.`);
    }
}
const rabbit1 = new Rabbit();
rabbit1.eat();
rabbit1.hop();

// SUPER keyword🦸

const superLabel = "SUPER keyword🦸:";

class SuperHumans{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    message(power){
        console.log(superLabel, `${this.name} will save the day using ${power}!`)
    }
}
class Flying extends SuperHumans{
    constructor(name, age, speed){
        super(name, age);
        this.ability1 = "flight";
        this.flyingSpeed = `This ${this.name} can fly ${speed}MPH`;
    }

    heroMoto1(){
        super.message(this.ability1);
    }
}
class Invisible extends SuperHumans{
    constructor(name, age, duration){
        super(name, age);
        this.ability2 = "invisibility";
        this.invisDur = `This ${this.name} can stay invisible for ${duration}s`;
    }

    heroMoto2(){
        super.message(this.ability2);
    }
}
const superman = new Flying("Superman",25,1000);
const wizard = new Invisible("Harry Potter",75,500);
console.log(superLabel, superman.flyingSpeed);
console.log(superLabel, wizard.invisDur);
superman.heroMoto1();
wizard.heroMoto2();

// GETTERS & SETTERS🏐

//getter = special method that makes a property READABLE
//setter = special method that makes a property WRITEABLE

const getSetLabel = "GETTERS & SETTERS🏐:"

class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive value.");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive value.");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._height * this._width).toFixed(1)}cm^2`;
    }
}
const rectangle = new Rectangle(1000, 50);
console.log(getSetLabel, rectangle.width);
console.log(getSetLabel, rectangle.height);

rectangle.width = -1000;
rectangle.height = -20;
console.log(getSetLabel, rectangle.width);
console.log(getSetLabel, rectangle.height);
console.log(getSetLabel, rectangle.area);

// DESTRUCTURING🏗️

// extract values from arrays and objects, then assign them to variables in a convenient way
//[] = array destructuring
//{} = object destructuring

const destructuringLabel = "DESTRUCTURING🏗️:";

let a = 1; //swap values of two variables
let b = 2;
[a, b] = [b, a];
console.log(destructuringLabel, a, b);

let colors = ["red","yellow","green","blue","purple"]; //swap two elements in an array
[colors[1], colors[4]] = [colors[4], colors[1]];
console.log(destructuringLabel, colors);

colors = ["red","yellow","green","blue","purple"]; //assign array elements to variables
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(destructuringLabel, firstColor, secondColor, thirdColor, extraColors);

const destrPerson = { //extract values from objects
    fullName: "Yuji Itadori",
    cursedTech: "Hands",
    rival: "Sukuna"
}
const {fullName, cursedTech, rival, employment="McDonald's Worker"} = destrPerson;
console.log(destructuringLabel, fullName, cursedTech, rival, employment);

function displayPerson({fullName, cursedTech, rival}){ //destructure in function parameters
    console.log(destructuringLabel, `${fullName} is going to defeat ${rival} using ${cursedTech}.`);
}
displayPerson(destrPerson);

// NESTED OBJECTS🪹

const nestedLabel = "NESTED OBJECTS🪹:";

const captainMel = {
    fullName: "Meliodas Liones",
    spouse: "Elizabeth Liones",
    battleStats: {
        ability: "full counter",
        durability: "outstanding",
        strength: "unbelievable"
    }
}
console.log(nestedLabel, captainMel.fullName, captainMel.battleStats, captainMel.battleStats.ability);

class Person{ //parent object
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{ //child object
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
const bigBenYahu = new Person("Benjamin Netanyahu",67,"Jew Street","Jerusalem","Israel");
for(const stat in bigBenYahu){
    console.log(nestedLabel, bigBenYahu[stat]);
}

// ARRAYS OF OBJECTS🏹

const arrayObjectLabel = "ARRAYS OF OBJECTS🏹:";

let arrayObjectSample = [{fruitName: "apple", color: "red", calories: 95},
                         {fruitName: "banana", color: "yellow", calories: 110},
                         {fruitName: "peach", color: "pink", calories: 75},
                         {fruitName: "durian", color: "shit", calories: -10},
]
console.log(arrayObjectLabel, arrayObjectSample[1].color);

arrayObjectSample.splice(1, 3);
console.log(arrayObjectLabel, arrayObjectSample);

arrayObjectSample = [{fruitName: "apple", color: "red", calories: 95},
                     {fruitName: "banana", color: "yellow", calories: 110},
                     {fruitName: "peach", color: "pink", calories: 75},
                     {fruitName: "durian", color: "shit", calories: -10},
];
const fruitNames = arrayObjectSample.map(fruit => fruit.fruitName);
console.log(arrayObjectLabel, fruitNames);

const maxFruit = arrayObjectSample.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(arrayObjectLabel, maxFruit);

// SORTING📍

//sort() = method used to sort elements of an array in place
//         Sorts elements as strings in lexicographic order, not alphabetical
//         lexicographic = (alphabet + numbers + symbols) as strings

const sortingLabel = "SORTING📍";

let sortAlphabet = ["Denji", "Reze", "Makima", "Shark"];
sortAlphabet.sort();
console.log(sortingLabel, sortAlphabet);

let sortNums = [1, 9, 18, 20, 2, 15, 55, 8, 3];
sortNums.sort();
console.log(sortingLabel, sortNums);

sortNums.sort((a, b) => a - b);
console.log(sortingLabel, sortNums);

sortNums.sort((a, b) => b - a);
console.log(sortingLabel, sortNums);

let sortObjectsSample = [{fruitName: "apple", color: "red", calories: 95},
                     {fruitName: "banana", color: "yellow", calories: 110},
                     {fruitName: "peach", color: "pink", calories: 75},
                     {fruitName: "durian", color: "shit", calories: -10},
];
sortObjectsSample.sort((a, b) => a.calories - b.calories);
console.log(sortingLabel, sortObjectsSample);

sortObjectsSample.sort((a, b) => a.fruitName.localeCompare(b.fruitName));
console.log(sortingLabel, sortObjectsSample);

// SHUFFLE AN ARRAY🃏

//utilize the Fisher-Yates algorithm

const shuffleLabel = "SHUFFLE AN ARRAY🃏:";

const shuffleCards = ["A",2,3,4,5,6,7,8,9,"J","Q","K"];
shuffle(shuffleCards);
console.log(shuffleLabel, shuffleCards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]]
    }
}

// DATES💖

//Date Objects = Objects that contain values that represent dates and times

const datesLabel = "DATES💖:";

const date = new Date();
console.log(datesLabel, date);

//Date(year, monthIndex, day, hour, minute, second, ms) - default settings for date constructor
const date1 = new Date(2020, 0, 2, 3, 4, 5, 1000);
console.log(datesLabel, date1);

const date2 = new Date("2024-01-02T12:00:00Z");
console.log(datesLabel, date2);

let date3 = new Date(0); //putting only a number in outputs the time computers think time started plus the inputted number in ms
console.log(datesLabel, date3);
date3 = new Date(1700000000000);
console.log(datesLabel, date3);

const date4 = new Date();
const dateYear = date4.getFullYear();
const dateMonth = date4.getMonth();
const dateDay = date4.getDate();
const dateHour = date4.getHours();
const dateMinutes = date4.getMinutes();
const dateSeconds = date4.getSeconds();
const dateDoW = date4.getDay();
console.log(datesLabel, dateDoW, dateYear, dateMonth, dateDay, dateHour, dateMinutes, dateSeconds);

const date5 = new Date();

date5.setFullYear(2020);
date5.setMonth(11);
date5.setDate(32);
date5.setHours(23);
date5.setMinutes(59);
date5.setSeconds(59);
console.log(datesLabel, date5);

if(date2 < date4){
    console.log(datesLabel, "BUSSSSSSS");
}
else{
    console.log(datesLabel, "IM ABOUT TO BLOWWW");
}

// CLOSURES🫱🏿‍🫲🏻

//  closure = A function defined inside of another function, the inner function has access to the variables
//            and scope of the outer function. Allow for private variables and state maintenance.
//            Used frequently in JS frameworks: React, Vue, Angular

const closureLabel = "CLOSURES🫱🏿‍🫲🏻:";

function outer(){
    let message = "Hello";

    function inner(){
        console.log(closureLabel, message);
    }

    inner();
}
let message = "Goodbye";
outer();

function createCounter(){
    
    let count = 0;

    function increment(){
        count++;
        console.log(closureLabel, `Count increased to ${count}.`);
    }

    function getCount(){
        return `The current count is ${count}.`;
    }

    return {increment, getCount};

}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(closureLabel, counter.getCount());

// setTimeout()⏱️

//  setTimeout() = function in JS that allows you to schedule the execution
//                 of a function after an amount of time (ms). Times are approximate
//                 (varies based on the workload of the JS runtime environment).
//                 
//                 setTimeout(callback, delay);
//
//  clearTimeout() = can cancel a timeout before it triggers
//
//                   clearTimeout(timeoutID)

const timeoutLabel = "setTimeout()⏱️:"; // CANT USE JS FUNCTIONS WITH IMPORT

/*
const timeoutID = setTimeout(() => window.alert("BIG GOTH MOMMIES"), 3000)
clearTimeout(timeoutID);

function startTimer(){
    anotherID = setTimeout(() => window.alert("💣BOOM💣"), 3000);
}
function stopTimer(){
    clearTimeout(anotherID);
}
*/

// ES6 MODULES6️⃣

//  ES6 Module = An external file that contains reusable code that can be imported into other JS files.
//               Write reusable code for many different apps. Can contain variables, classes, functions, etc.
//               Introduced as part of ECMAScript 2015 update.

const ES6Label = "ES6 MODULES6️⃣:";

/*
import {PI, getCircumference} from "./importModule.js";

console.log(ES6Label, PI);
console.log(ES6Label, getCircumference(30));
*/

// ASYNCHRONOUS CODE🅰️

//  synchronous = Executes line by line consecutively in a sequential manner. Code that waits for an operation to complete.
//
//  asynchronous = Allows multiple operations to be performed concurrently without waiting. Doesn't block the execution flow
//                 and allows the program to continue.
//                 (I/O operations, network requests, fetching data)
//                 Handled with: Callbacks, Promises, Async/Await

const asyncLabel = "ASYNCHRONOUS CODE🅰️:";

function func1(callback){
    setTimeout(() => {console.log(asyncLabel, "Task 1"); callback()}, 1000);
}

function func2(){
    console.log(asyncLabel, "Task 2");
    console.log(asyncLabel, "Task 3");
    console.log(asyncLabel, "Task 4");
}

//func1(func2);

// ERROR HANDLING🚫

//  Error = An object that is created to represent a problem that occurs. 
//          Occurs often with user input or establishing a connection.
//
//  try { } = Eoncloses code that might potentially cause an error
//  catch { } = Catch and handle any thrown errors from try { }
//  finally { } = (optional) Always executes. Used mostly for clean up.
//                ex. close files, close connections, release resources

const errorLabel = "ERROR HANDLING🚫:";

try{
    console.log(aoisufpoawnfpaiowenfi);
}
catch(error){
    console.error(errorLabel, error);
}
finally{
    console.log(errorLabel, "This always executes.");
}
console.log(errorLabel, "This is the end of the line kiddo.");

/*
try{
    const dividend = window.prompt("Enter a dividend: ");
    const divisor = window.prompt("Enter a divisor: ");

    if(divisor == 0){
        throw new Error("You can't divide by zero homie!");
    }

    const result = dividend / divisor;
    console.log(errorLabel, result);
}
catch(error){
    console.error(errorLabel, error);
}
console.log(errorLabel, "This is also the end of the line kiddo.");
*/

// What is the DOM?🤔

//  DOM = DOCUMENT OBJECT MODEL
//        Object() that represents the page you see in the web browser and provides you with an API to interact with it.
//        Web browser constructs the DOM when it loads an HTML document, and structues all the elements in a tree-like
//        representation. JS can access the DOM dynamically (change the content, structure, and style of a web page)

const DOMLabel = "What is the DOM?🤔:";

document.title = "getHackedHAHAHAH";
console.log(DOMLabel);
console.dir(document);

// ELEMENT SELECTORS🔥

//  element selectors = Methods used to target and manipulate HTML elements. They allow you to select one or multiple
//                      HTML elements from the DOM (Document Object Model)
//
//  1. document.getElementById()        // ELEMENT OR NULL
//  2. document.getElementByClassName() // HTML COLLECTION
//  3. document.getElementByTagName()   // HTML COLLECTION
//  4. document.querySelector()         // FIRST ELEMENT OR NULL
//  5. document.querySelectorAll()      // NODELIST

const elementLabel = "ELEMENT SELECTORS🔥:";

const myHeading = document.getElementById("elementSelector1");
myHeading.style.backgroundColor = "aqua";
console.log(elementLabel, myHeading);

const fruits = document.getElementsByClassName("fruits"); //can't use forEach()
fruits[1].style.fontSize = "3rem";
for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}
Array.from(fruits).forEach(fruit => {
    fruit.style.fontFamily = "monospace";
})
console.log(elementLabel, fruits);

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
for(let h4Element of h4Elements){
    h4Element.style.color = "red";
}
Array.from(liElements).forEach(liElements => {
    liElements.style.color = "orange";
})
console.log(elementLabel, h4Elements);

const element = document.querySelector("ul");
element.style.backgroundColor = "black";
console.log(elementLabel, element);

const vegetables = document.querySelectorAll("li");
vegetables[5].style.backgroundColor = "blue";
vegetables.forEach(vegetable => {
    vegetable.style.fontStyle = "italic";
})
console.log(elementLabel, vegetables);

// DOM NAVIGATION🧭

//  DOM Navigation = The process of navigating through the structure of an HTML document using JS
//
//  .firstElementChild
//  .lastElementChild
//  .nextElementSibling
//  .previousElementSibling
//  .parentElement
//  .children

const DOMNavLabel = "DOM NAVIGATION🧭:";

const example1 = document.getElementById("DOMNavID");
const firstChild = example1.firstElementChild;
firstChild.style.backgroundColor = "orange";

const exampleUl = document.querySelectorAll("ul");
exampleUl.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.fontSize = "2rem";
})

const lastChild = example1.lastElementChild;
lastChild.style.backgroundColor = "purple";

const example2 = document.getElementById("RanNav2");
const nextEleSib = example2.nextElementSibling;
nextEleSib.style.color = "black";

const example3 = document.getElementById("JJKNavID");
const previousEleSib = example3.previousElementSibling;
previousEleSib.style.backgroundColor = "pink";

const example4 = document.getElementById("JJKNav2");
const parEl = example4.parentElement;
parEl.style.backgroundColor = "gray";

const example5 = document.getElementById("DOMNavID");
const childrenEx = example5.children;
Array.from(childrenEx).forEach(child => {
    child.style.fontFamily = "Tahoma";
})
childrenEx[1].style.fontSize = "0.5rem";
console.log(DOMNavLabel, childrenEx);

// ADD & CHANGE HTML⚙️

// ----- EXAMPLE (h1) -----//

// STEP 1 - Create the element
const newH1 = document.createElement("h1");

// STEP 2 - Add attributes/properties
newH1.textContent = "This is a created h1.";
newH1.id = "myH1";
newH1.style.textAlign = "center";

// STEP 3 - Append element to DOM
//document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("box1").append(newH1);
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);

// Remove HTML element (optional)
//document.body.removeChild(newH1);

// MOUSE EVENTS🐁

//  eventListener = Listens for specific events to create interactive web pages
//                  Events: click, mouseover, mouseout
//                  .addEventListener(event, callback/anonymous function/arrow function);

const mouseLabel = "MOUSE EVENTS🐁:";

const mouseEventBox = document.getElementById("mouseEventBox");
const myButton = document.getElementById("myButton");

function changeColor(event){
    console.log(mouseLabel, event);
    mouseEventBox.style.backgroundColor = "tomato";
    mouseEventBox.textContent = "OUCH 🤕";
    event.target.style.backgroundColor = "red";
}
myButton.addEventListener("click", changeColor);

myButton.addEventListener("mouseover", event => {
    mouseEventBox.style.backgroundColor = "yellow";
    mouseEventBox.textContent = "Don't do it 😲";
})

myButton.addEventListener("mouseout", function(event){
    mouseEventBox.style.backgroundColor = "lightgreen";
    mouseEventBox.textContent = "Click Me 🙂";
})

// KEY EVENTS🗝️

//  eventListener = Listens for specific events to create interactive web pages
//                  Events: keydown, keyup, keypress (avoid using this one since it's not compatible with all browsers)

const keyLabel = "KEY EVENTS🗝️:";

const keyBox = document.getElementById("keyBox");
const moveAmount = 10;
let posX = 0;
let posY = 0;
document.addEventListener("keydown", event => {
    keyBox.textContent = "💦";
    keyBox.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", event => {
    keyBox.textContent = "🍆";
    keyBox.style.backgroundColor = "lightblue";
});
document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                posY -= moveAmount;
                break;
            case "ArrowDown":
                posY += moveAmount;
                break;
            case "ArrowRight":
                posX += moveAmount;
                break;
            case "ArrowLeft":
                posX -= moveAmount;
                break;
        }

        keyBox.style.top = `${posY}px`
        keyBox.style.left = `${posX}px`

    }

});

// HIDE/SHOW HTML🪄

const hideButton = document.getElementById("hideButton");
const myImg = document.getElementById("myImg");

hideButton.addEventListener("click", event => {

    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        hideButton.textContent = "Good Boy";
    }
    else{
        myImg.style.visibility = "hidden";
        hideButton.textContent = "Touch Me";
    }

});

// NODELISTS📃

//  NodeList = Static collection of HTML elements by (id, class, element)
//             Can be created by using querySelectorAll()
//             Similar to an array, but no (map, filter, reduce), but does have forEach()
//             NodeList won't automatically update to reflect changes

const nodeLabel = "NODELISTS📃:";

let nodeButtons = document.querySelectorAll(".nodeButton");

nodeButtons.forEach(button => {
    button.style.backgroundColor = "green";
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "blue";
    });
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "green";
    });

});

//ADDING AN ELEMENT
const newButton = document.createElement("button"); //STEP 1
newButton.textContent = "THE Button"; //STEP 2
newButton.classList = "nodeButton";
//document.body.appendChild(newButton); //STEP 3

console.log(nodeLabel, nodeButtons); //the new button doesn't show up in the NodeList
nodeButtons = document.querySelectorAll(".nodeButton");
console.log(nodeLabel, nodeButtons);

// CLASSLIST👨‍🏫

//  classList = Element property in JS used to interact with an element's list of classes (CSS classes).
//              Allows you to make reusable classes for many elements across your webpage.
//
//  add()
//  remove()
//  toggle(remove if present, add if not)
//  replace(old class, new class)
//  contains()

let classButtons = document.querySelectorAll(".classButton");

classButtons.forEach(button => {
    button.classList.add("enabled");
});
classButtons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});
classButtons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});
classButtons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
        
    });
});

// CALLBACK HELL?🔥

//  Callback Hell = Situation in JS where callbacks are nested within other callbacks to the degree
//                  where the code is difficult to read. 
//                  Old pattern to handle asynchronous functions.
//                  Use promises + async/await to avoid Callback Hell.

const callbackLabel = "CALLBACK HELL?🔥:";

function task1(callback){
    setTimeout(() => {
        console.log(callbackLabel, "Task 1 complete.");
        callback();
    }, 2000);
}
function task2(callback){
    setTimeout(() => {
        console.log(callbackLabel, "Task 2 complete.");
        callback();
    }, 1000);
}
function task3(callback){
    setTimeout(() => {
        console.log(callbackLabel, "Task 3 complete.");
        callback();
    }, 3000);
}
function task4(callback){
    setTimeout(() => {
        console.log(callbackLabel, "Task 4 complete.");
        callback();
    }, 1500);
}
/*
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => console.log(callbackLabel, "All tasks complete!")); //PYRAMID OF HELL
        });
    });
});
*/

// PROMISES💍

//  Promise = An object that manages asynchronous operations.
//            Wrap a Promise Object around {async code}
//            "I promise to return a value"
//            PENDING -> RESOLVED or REJECTED
//            new Promise((resolve, reject) => {async code})

// EXAMPLE: Do the following in order:
//          1. Walk the dog
//          2. Clean the kitchen
//          3. Take out the trash

const promisesLabel = "PROMISES💍:";

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;
            if(dogWalked){
                resolve("You walk the dog 🐕.");
            }
            else{
                reject("You DIDN'T walk the dog 😡.");
            }

        }, 1500);
    });

}
function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const kitchenCleaned = false;
            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹.");
            }
            else{
                reject("You DIDN'T clean the kitchen 😡.");
            }
            
        }, 2000);
    });

}
function takeTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const trashTaken = true;
            if(trashTaken){
                resolve("You take out the trash 🚮.");
            }
            else{
                reject("You DIDN'T take out the trash 😡.");
            }
            
        }, 500);
    });

}
/*
walkDog().then(value => {console.log(promisesLabel, value); return cleanKitchen()})
         .then(value => {console.log(promisesLabel, value); return takeTrash()})
         .then(value => {console.log(promisesLabel, value); console.log(promisesLabel, "You finished the chores!")})
         .catch(error => console.error(promisesLabel, error));
*/

// ASYNC/AWAIT🫸

//  Async/Await = Async = makes a function return a promise
//                Await = makes an async function wait for a promise
//
//                Allows you to write async code in a sync manner
//                Async doesn't have resolve or reject parameters
//                Everything after Await is placed in an event queue

const awaitLabel = "ASYNC/AWAIT🫸:";

async function doChores(){
    
    try{
        const walkDogResult = await walkDog();
        console.log(awaitLabel, walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(awaitLabel, cleanKitchenResult);

        const takeTrashResult = await takeTrash();
        console.log(awaitLabel, takeTrashResult);

        console.log(awaitLabel, "You finished all the chores. Good boy!");
    }
    catch(error){
        console.error(awaitLabel, error);
    }

}
//doChores();

// JSON FILES📁

//  JSON = (JavaScript Object Notation) data-interchange format
//         Used for exchanging data between a server and a web application
//         JSON files {key:value} OR [value1, value2, value3] OR [{}, {}, {}]
//
//         JSON.stringify() = converts a JS object to a JSON string
//         JSON.parse() = converts a JSON string to a JS object

const JSONLabel = "JSON FILES📁:";

const theCrew = [
{
    name: "Meliodas",
    "age": 67,
    "isAlive": true
},
{
    "name": "Ban",
    "age": 9999999,
    "isAlive": true

},
{
    "name": "King",
    "age": 45,
    "isAlive": true
}];
console.log(JSONLabel, theCrew);
let theCrewJSON = JSON.stringify(theCrew);
console.log(JSONLabel, theCrewJSON);

theCrewJSON = `[{"name": "Meliodas","age": 67,"isAlive": true},
                {"name": "Ban","age": 9999999,"isAlive": true},
                {"name": "King","age": 45,"isAlive": true}]`;

console.log(JSONLabel, theCrewJSON);
const theCrewJSONtoJS = JSON.parse(theCrewJSON);
console.log(JSONLabel, theCrewJSONtoJS);

fetch("moreJSArrayOfObjects.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(JSONLabel, value.age)))
    .catch(error => console.error(JSONLabel, error));

// Fetch data from an API🐕

//  fetch = Function used for making HTTP requests to fetch resources
//          (JSON style data, images, files)
//          Simplifies async data fetching in JS and used for interacting with APIs
//          to retrieve and send data async over the web
//          fetch(url, {options}) - options include the following:
//              method: "GET" (default) - get data
//              method: "POST" - send data
//              method: "PUT" - replace data
//              method: "DELETE" - delete data

const fetchLabel = "Fetch data from an API🐕:";

async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){

            throw new Error("Could not fetch resource.");

        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    }

    catch(error){

        console.error(fetchLabel, error);

    }

}
