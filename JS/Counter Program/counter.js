
let counterNum = 0;

document.getElementById("number").textContent = counterNum;

document.getElementById("decrease").onclick = function(){
    counterNum--;
    document.getElementById("number").textContent = counterNum;
}

document.getElementById("increase").onclick = function(){
    counterNum++;
    document.getElementById("number").textContent = counterNum;
}

document.getElementById("reset").onclick = function(){
    counterNum = 0;
    document.getElementById("number").textContent = counterNum;
}