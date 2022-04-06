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

let totalCost = parseInt(howManyKm) * 0.21;

if(age < 18){
    console.log(totalCost * 0.8);
}else if(age > 65){
    console.log(totalCost * 0.6);
}else{
    console.log(totalCost);
}


