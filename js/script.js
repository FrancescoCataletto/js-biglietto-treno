/* 
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

const howManyKm = prompt("Quanti chilometri vuoi percorrere?");
const age = prompt("Quanti anni hai?");

const totalCost = parseInt(howManyKm) * 0.21;

let finalCost;

if(age < 18){
    finalCost = (totalCost * 0.8).toFixed(2);
    document.getElementById("price").innerHTML = finalCost +" " + "euro";
    document.getElementById("discount").innerHTML = "Il biglietto è scontato del 20% in quanto hai meno di 18 anni";
}else if(age > 65){
    finalCost = (totalCost * 0.6).toFixed(2);
    document.getElementById("price").innerHTML = finalCost +" " + "euro";
    document.getElementById("discount").innerHTML = "Il biglietto è scontato del 40% in quanto hai più di 65 anni";
}else{
    finalCost = (totalCost).toFixed(2);
    document.getElementById("price").innerHTML = finalCost +" " + "euro";
    document.getElementById("discount").innerHTML = "Il biglietto non è scontato";
}



