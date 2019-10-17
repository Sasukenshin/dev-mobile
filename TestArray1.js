let tab=[1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
affichage();
affichageInverse();
affichageSuperieur(3);
affichageModulo(2);
affichageMax();
affichageMin();

function affichage() 
{
    console.log(" Affichage du tableau dans l'ordre");
    for (i = 0; i < tab.length; i++) {
        console.log(`${tab[i]}`);
    }
}
function affichageInverse() 
{
    console.log(" Affichage du tableau dans l'ordre inverse");
    for (i = tab.length-1; i >= 0; i--) {
        console.log(`${tab[i]}`);
    }
}
function affichageSuperieur(seuil) 
{
    console.log(" Affichage des entier supérieur à 3 du tableau");
    for (i = 0; i < tab.length; i++) {
        if (tab[i]>seuil) {
            console.log(`${tab[i]}`);
        }
    }
}
function affichageModulo(seuil) 
{
    console.log(" Affichage des entier pair du tableau");
    for (i = 0; i < tab.length; i++) {
        if (tab[i]%seuil == 0) {
            console.log(`${tab[i]}`);
        }
    }
}
function affichageMax() 
{
    let max=tab[0];
    for (i = 0; i < tab.length; i++) {
        if (max <= tab[i]) {
            max=tab[i];
        }
    }
    console.log(`Le max du tableau est  ${max}`);
}
function affichageMin() 
{
    let min=tab[0];
    for (i = 0; i < tab.length; i++) {
        if (min >= tab[i]) {
            min=tab[i];
        }
    }
    console.log(`Le min du tableau est  ${min}`);
}
/*
console.log("***** Application Opérateurs *****");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Veuillez saisir le premier nombre…', (a) => {
    rl.question('Veuillez saisir le second nombre…', (b) => {
        a=parseInt(a);
        b=parseInt(b);
        console.log(`${a}+${b}=${a+b}`);
        console.log(`${a}-${b}=${a-b}`);
        console.log(`${a}*${b}=${a*b}`);
        console.log(`${a}/${b}=${a/b}`);
        console.log(`${a}%${b}=${a%b}`);
        rl.close();
    });
});*/

