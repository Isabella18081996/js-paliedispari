/* **Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */



//chiedo con prompt pari/dispari
//chiedo numero da 1 a 5


 var pari_dispari = prompt('Pari o dispari');
 var num = parseInt(prompt('Inserisci un numero da 1 a 5'));
 var stringValue = pari_dispari;

 console.log(stringValue);

 var s = somma();

 console.log(pari_dispari)
 //console.log(num)

function somma(num_utente, num_computer) {
  var num_utente = num;
  var num_computer=Math.round(Math.random()*4+1);

  

  var pari = (pari_dispari % 2 === 0);
  var dispari = (pari_dispari % 2 != 0);
  
  console.log("numero computer " + num_computer)
  console.log("numero utente " + num_utente)


  var res = num_computer + num_utente;

  var sommaPari = (res % 2 === 0);
  var sommaDispari = (res % 2 != 0 );

 console.log("Questa è la somma " + res)

  if(stringValue === sommaPari){
    document.getElementById("risultato").innerHTML = "Complimenti hai vinto";
  }else if(stringValue === sommaDispari){
    sommaDispari
    document.getElementById("risultato").innerHTML = "Complimenti hai vinto";
  }
  else{
    document.getElementById("risultato").innerHTML = "Hai perso";
  }
};
/* for (var i = 0; i < n; i++){
  a = parseInt(prompt('inserisci il primo numero'));
  if (a % 2 == 0) {
    sommaPari += a;
  } else {
    sommaDispari += a;
  }
}

console.log(sommaPari);
console.log(sommaDispari); */

