var arrayName = ["Pippo" , "Paperino" , "Topolino", "Minnie" , "Pluto" , "Gabriele"]
var arrayCognome = ["Sanna" , "Casu" , "Aguilera" , "Patermo" , "Riccioli" , "D'Agata"]
var numInvitati = 3
var listaArray = []
for (var i = 0; i < numInvitati; i++) {
    var name = parseInt(Math.floor(Math.random()*5))
    var cognome = parseInt(Math.floor(Math.random()*5))
    document.getElementById("stampa").innerHTML += "<li>" + arrayName[name] + " " + arrayCognome[cognome] + "</li>"  
    listaArray.push(arrayName[name] + " " + arrayCognome[cognome])
}
