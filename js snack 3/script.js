var stampa =  document.getElementById("stampa")
var risultato =0;
for (var i = 0; i < 10; i++) {
   
    var numero = parseInt(prompt("digita un numero"))
     risultato +=  parseInt(numero);    
}

stampa.innerHTML= risultato;



