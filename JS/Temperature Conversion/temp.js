
const tempInput = document.getElementById("tempInput");
const tempFtoC = document.getElementById("tempFtoC");
const tempCtoF = document.getElementById("tempCtoF");
const result = document.getElementById("result");

function convert(){
    if(isNaN(Number(tempInput.value))){
        result.textContent = "How tf you manage to do that?";
    }
    else if(!(tempFtoC.checked || tempCtoF.checked)){
        result.textContent = "Select a conversion type."
    }
    else{
        if(tempFtoC.checked){
            result.textContent = `${((Number(tempInput.value) - 32) * 5/9).toFixed(1)}°C`
        }
        else{
            result.textContent = `${((Number(tempInput.value) * 9/5) + 32).toFixed(1)}°F`
        }
    }
}