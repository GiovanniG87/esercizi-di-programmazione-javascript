/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var a = 1987;
var m = 1;
var g = 8;

if (m>2) {a = 2021-a-1;
  console.log('la tua età è di' +  a  + 'anni');

} else { a = 2021-a;
  console.log('la tua età è di' + a + 'anni');

} console.log('per arrivare a 100 anni ti mancano ancora' + (100-a) + 'anni');
