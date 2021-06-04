var stampa =  document.getElementById("stampa")
var nome = prompt("nome?")
var check= false;
var nomi =["giulio", "jhon" ,"tony" , "dayron" , "giuseppe"]
for (var i = 0; i < nomi.length; i++) {

    if(nomi[i] ===nome)
    {
        check=true;
        break;
    }
}

if (check) {

    stampa.innerHTML= "Sei invitato"

    
} else {
    stampa.innerHTML= "Non sei invitato"

}
   



