
const sigma = document.getElementById("sigmaID");
const prius = document.getElementById("priusID");
const supra = document.getElementById("supraID");
const miata = document.getElementById("miataID");
const submit = document.getElementById("submitID");
const result = document.getElementById("resultID");

submit.onclick = function(){

    if(prius.checked){
        result.textContent = "Nah you drive a PRIUS? That's some cuck shit.";
    }

    else if(supra.checked){
        result.textContent = "You're the pinnacle of sigma men if you drive that!";
    }

    else if(miata.checked){
        if(sigma.checked){
            result.textContent = "Hmmmm. Sigma? idk about that...";
        }
        else{
            result.textContent = "At least it's better than the Toyota Prius.";
        }
    }
    else if(sigma.checked){
        result.textContent = "Aight buddy, you ain't him.";
    }
    else{
        result.textContent = "Bro answer the survey >:(";
    }

}