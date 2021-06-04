var firstNum = prompt("digita un numero")
var secondNum = prompt("digita un numero")
var stampa =   document.getElementById("stampa")

if (firstNum>secondNum) {
    stampa.innerHTML= firstNum;
} else {
    stampa.innerHTML= secondNum;

}