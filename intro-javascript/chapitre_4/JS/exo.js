// JavaScript source code
var saisie = Number(prompt("Saisir un chiffre entre 1 et 9"))
console.log("Voici la table de multiplication du chiffre " + saisie)
for (var i = 1; i <= 10; i++)
{
    console.log(saisie + " X " + i + " = " + (saisie*i) );
}