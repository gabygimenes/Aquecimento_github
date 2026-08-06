const capitais = ["Brasília", "Salvador", "Manaus", "Recife"]
const capitalM = capitais.find (capital => capital === "Manaus");

if (capitalM){
    console.log ("Manaus encontrado!");
} else {
    console.log ("Manaus não encontrado!");
}