/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

var parola_utente = prompt('Inserisci parola');
console.log(palindroma(parola_utente));

function palindroma (str){
  //prendere la parola, scomporla, reversarla e poi rincoporla
  if(str === str.split('').reverse().join('')){
    return str + " è una parola palindroma"
  }else{
    return str + " non è una parola palindroma"
  }
}