/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

var a = 32;
var b = 54;
var c = 44;
var d = 54;
var e = -8;
var f = -6;
var g = 15;
var tempM = 0;
var tempK = 0;

if (a>=b) { tempM = tempM + a;}
  else {
    tempM = tempM+b;
  }
  if (tempM>c) {tempM;}
    else {
      tempM = c;
    }
    if (tempM>d) {tempM;}
      else {
        tempM = d;
      }
      if (tempM>e) {tempM;}
        else {
          tempM = e
        }if (tempM>f) {tempM;}
          else {
            tempM = f;
            if (tempM>g) {tempM;}
              else {
                tempM = g;

              }

    } console.log('La Temperatura massima è' + tempM);

    if (a<=b) { tempK = tempK + a;}
      else {
        tempK = tempK+b;
      }
      if (tempK<c) {tempK;}
        else {
          tempK = c;
        }
        if (tempK<d) {tempK;}
          else {
            tempK = d;
          }
          if (tempK<e) {tempK;}
            else {
              tempK = e
            }if (tempK<f) {tempK;}
              else {
                tempK = f;
                if (tempK<g) {tempK;}
                  else {
                    tempK = g;

                  }

        } console.log('La temperatura minima è' + tempK);
