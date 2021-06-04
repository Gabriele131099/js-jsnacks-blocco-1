var firstWord = prompt("digita una parola")
var secondWord = prompt("digita una parola")
var stampa =   document.getElementById("stampa")

if ( firstWord.length > secondWord.length) {
    stampa.innerHTML= firstWord +" "+ secondWord;
} else {
    stampa.innerHTML= secondWord +" "+ firstWord;

}