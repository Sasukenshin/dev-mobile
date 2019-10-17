let tab=[1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
affichage(tab);
affichageInverse(tab);
affichageSuperieur(tab,3);
affichageModulo(tab,2);
affichageMax(tab);
affichageMin(tab);

function affichage(tableau) 
{
    console.log(" Affichage du tableau dans l'ordre");
    for (i = 0; i < tableau.length; i++) {
        console.log(`${tableau[i]}`);
    }
}
function affichageInverse(tableau) 
{
    console.log(" Affichage du tableau dans l'ordre inverse");
    for (i = tableau.length-1; i >= 0; i--) {
        console.log(`${tableau[i]}`);
    }
}
function affichageSuperieur(tableau,seuil) 
{
    console.log(" Affichage des entier supérieur à 3 du tableau");
    for (i = 0; i < tableau.length; i++) {
        if (tableau[i]>seuil) {
            console.log(`${tableau[i]}`);
        }
    }
}
function affichageModulo(tableau,seuil) 
{
    console.log(" Affichage des entier pair du tableau");
    for (i = 0; i < tableau.length; i++) {
        if (tableau[i]%seuil == 0) {
            console.log(`${tableau[i]}`);
        }
    }
}
function affichageMax(tableau) 
{
    let max=tableau[0];
    for (i = 0; i < tableau.length; i++) {
        if (max <= tableau[i]) {
            max=tableau[i];
        }
    }
    console.log(`Le max du tableau est  ${max}`);
}
function affichageMin(tableau) 
{
    let min=tableau[0];
    for (i = 0; i < tableau.length; i++) {
        if (min >= tableau[i]) {
            min=tableau[i];
        }
    }
    console.log(`Le min du tableau est  ${min}`);
}