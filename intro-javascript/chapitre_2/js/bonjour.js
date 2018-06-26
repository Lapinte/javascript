// JavaScript source code
var heure = Number(prompt("Entrez une heure"));
var minute = Number(prompt("Entrez une minute"));
var seconde = Number(prompt("Entrez une seconde"));

if ((heure > 23) || (heure < 0) || (minute > 59) || (minute < 0) || (seconde > 59) || (seconde < 0))
    console.log("Erreur de saisie");

else if ((heure === 23) && (minute === 59) && (seconde === 59)) {
    heure = 0;
    minute = 0;
    seconde = 0;
    console.log("Dans une seconde il sera " + heure + "H" + minute + "M" + seconde + "S");
}
else if ((heure < 23) && (minute === 59) && (seconde === 59)) {
    heure++;
    minute = 0;
    seconde = 0;
    console.log("Dans une seconde il sera " + heure + "H" + minute + "M" + seconde + "S");
}
else if ((heure < 23) && (minute < 59) && (seconde === 59)) {
    minute++;
    seconde = 0;
    console.log("Dans une seconde il sera " + heure + "H" + minute + "M" + seconde + "S");
}
else if ((heure < 23) && (minute < 59) && (seconde < 59)) {
    seconde++;
    console.log("Dans une seconde il sera " + heure + "H" + minute + "M" + seconde + "S");
}

