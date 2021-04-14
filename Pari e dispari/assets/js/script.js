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

//console.log('parametri inseriti nel programma', num, num_computer)

 var s = somma(num, num_computer, pari_dispari);

 //console.log(pari_dispari)
 //console.log(num)

function somma(numero_utente, numero_computer, scelta) {
  console.log('Questo è il numero scelto dall utente: ' + numero_utente);
  console.log('Questo è il numero del computer: ' + numero_computer );
  console.log('Questa è la scelta dell utente: ' + scelta);

  //Sommiamo i due numeri 
   var risultato = numero_computer + numero_utente;

   console.log(risultato);
 
  //Controlliamo se il risultato è pari o dispari 

  var risPari = risultato % 2 == 0;
  var risDispari = risultato %2 != 0;
  
  //Varie opzioni

  if(risPari && scelta == "pari"){
    console.log('hai vinto');
  }else if( risDispari && scelta == "dispari"){
    console.log('hai vinto');
  }else{
    console.log('hai perso');
  }
  

  return;
}
  


