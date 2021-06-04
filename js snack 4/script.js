var stampa =  document.getElementById("stampa")
var nomi=[];
for (var i = 0; i < 6; i++) {
    var num = prompt("numero?")

    if(num % 2)
    {
        nomi.push(num)
    }
}
stampa.innerHTML= nomi





