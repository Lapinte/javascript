// JavaScript source code
/*
//premier exo table de multiplication
var saisie = Number(prompt("Saisir un chiffre entre 1 et 9"))
console.log("Voici la table de multiplication du chiffre " + saisie)
for (var i = 1; i <= 10; i++)
{
    console.log(saisie + " X " + i + " = " + (saisie*i) );
}


//deuxieme exo triangle
var hashtag = "#"
for (var i = 1; i <= 7; i++)
{
    console.log(hashtag);
    hashtag = hashtag + "#";
}
*/

//troisieme exo FizzBuzz

var mult3 = "Fizz";
var mult5 = "Buzz";
var mult15 = "FizzBuzz";

for (var i = 1; i <= 100; i++)
{
    if (i % 15 === 0)
        console.log(mult15);
    else if (i % 3 === 0)
        console.log(mult3);
    else if (i % 5 === 0)
        console.log(mult5);
    else 
        console.log(i);
}
