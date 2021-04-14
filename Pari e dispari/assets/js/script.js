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
 var num_computer = Math.round(Math.random()*4+1);

 var s = somma(num, num_computer, pari_dispari);


function somma(numero_utente, numero_computer, scelta) {
  document.getElementById("utente_scelta").innerHTML = scelta;
  document.getElementById("utente_numero_scelto").innerHTML = numero_utente;
  document.getElementById("computer_numero_generato").innerHTML = numero_computer;


  //Sommiamo i due numeri 
   var risultato = numero_computer + numero_utente;

   document.getElementById("somma_finale").innerHTML = risultato;
   
 
  //Controlliamo se il risultato è pari o dispari 

  var risPari = risultato % 2 == 0;
  var risDispari = risultato %2 != 0;
  
  //Varie opzioni

  if(risPari && scelta == "pari"){
  document.getElementById('vittoria_sconfitta').innerHTML = "HAI VINTO!"
  document.getElementById('vittoria_sconfitta').style.color = '#800000';

  }else if( risDispari && scelta == "dispari"){
    document.getElementById('vittoria_sconfitta').innerHTML = "HAI VINTO!"
    document.getElementById('vittoria_sconfitta').style.color = '#800000';

  }else{
    document.getElementById('vittoria_sconfitta').innerHTML = "HAI PERSO!";
    document.getElementById('vittoria_sconfitta').style.color = '#000000';

  }
  
  return;
}
  
//FUNZIONE LAMPEGGIANTE

function blink_one() {
  document.getElementById('vittoria_sconfitta').style.visibility='visible';
  setTimeout('blink_two()',1000);
  }
  function blink_two() {
  document.getElementById('vittoria_sconfitta').style.visibility='hidden';
  setTimeout('blink_one()',400);
  }
  blink_one();