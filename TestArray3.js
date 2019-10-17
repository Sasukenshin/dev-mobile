let tab=[1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
affichage(tab);
trierBrutforce(tab);
affichage(tab);


function trierBrutforce(tableau) 
{
    let changement=true, temp;
    while(changement){
        changement =false;
        for(i=0;i<tableau.length-1;i++){
            if (tableau[i]>tableau[i+1]) {
                temp = tableau[i+1];
                tableau[i+1]=tableau[i];
                tableau[i] =temp;
                changement = true;
            }
        }
    }
}
function affichage(tableau) 
{
    console.log(" Affichage du tableau dans l'ordre");
    for (i = 0; i < tableau.length; i++) {
        console.log(`${tableau[i]}`);
    }
}