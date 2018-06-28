/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

//Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var saisie = Number(prompt("Choisissez un nombre entre 0 et 100"));

for (var i = 0; i < 6; i++) {

    if (saisie === solution) {
        console.log(`Félicitations! La solution était ${saisie}`);
        break;
    }
    else if (saisie < solution) {
        console.log(`${saisie} est trop petit`);
        saisie = prompt("Choisissez un nombre entre 0 et 100");
    }
    else {
        console.log(`${saisie} est trop grand`);
        saisie = prompt("Choisissez un nombre entre 0 et 100");
    }
}

