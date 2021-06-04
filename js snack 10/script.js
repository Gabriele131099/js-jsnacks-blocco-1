var num 
var arraynumb = []
var sommaFor = 0
var sommaWhile = 0

for (var i = 0; i < 4; i++) {
    num= parseInt(prompt("numero"))
    arraynumb.push(num)
    
}
for (var i = 0; i < arraynumb.length; i++) {
    sommaFor += arraynumb[i]
}
// var x = 0
// while (x < 4) {
    
//     num= parseInt(prompt("numero"))
//     arraynumb.push(num)
//     i++
// }

var y = 0
while (y < arraynumb.length) {
    
    sommaWhile += arraynumb[i]
    y++
}

document.getElementById("stampa").innerHTML= sommaFor + "</br>" + sommaWhile