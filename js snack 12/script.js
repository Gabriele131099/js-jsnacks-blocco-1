var arrayName = ["Pippo" , "Paperino" , "Topolino", "Minnie" , "Pluto" , "Gabriele"]

var arrayCognome = ["Sanna" , "Casu" , "Aguilera" , "Patermo" , "Riccioli" , "D'Agata"]
var numInvitati = 3
for (let i = 0; i < numInvitati; i++) {
    document.getElementById("stampa").innerHTML += "<li>" + arrayName[parseInt(Math.floor(Math.random()*5))] + " " + arrayCognome[parseInt(Math.floor(Math.random()*5))] + "</li>"  
}