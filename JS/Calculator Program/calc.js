
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    if(display.value === "Infinity"){
        display.value = "#/0!";
    }
    if(display.value === "67"){
        display.value = "67 JACOB 67";
    }
}

// WARNING: Executing JS from a string is an enormous security risk. 
//          It's far too easy for a bad actor to run arbitrary code when you use eval().
