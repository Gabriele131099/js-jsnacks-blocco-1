var numUtente= prompt("numero")
var arraynum = []

for (var i = 0; i < numUtente; i++) {
    arraynum.push(i*i*i)
}
document.getElementById("stampa").innerHTML += arraynum
   



