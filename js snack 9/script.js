var stampa =  document.getElementById("stampa")
arraynum=[]
var media=0
var somma =0
var nUtili =10
for (var i = 0; i < 100; i++) {
    arraynum.push(i)
}
for (var i = 0; i <= nUtili; i++) {
   media += arraynum[i] /nUtili
   somma += arraynum[i]
}

   
stampa.innerHTML += arraynum + "</br>" + media + "</br>" + somma

