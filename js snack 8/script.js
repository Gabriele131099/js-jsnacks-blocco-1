var tot = 0;
var num = prompt("scrivi un numero di 4 cifre");
var lung = num.length

if (lung!==4) {
    alert("devi mettere 4 numeri")
} else if (isNaN(num)) {
    alert("devi mettere un valore numerico")
}else{

    for (var i = 0; i < lung; i++) {
        tot += parseInt(num[i])
    }
}
document.getElementById("stampa").innerHTML = tot

function fungi()
{
    
}

