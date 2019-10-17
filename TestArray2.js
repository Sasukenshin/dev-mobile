let tab=[1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
moyenne(tab);
firstIndexOfInt(tab,15);
findDoublon(tab);


function moyenne(tableau) 
{
    let somme=0;
    for (i = 0; i < tableau.length; i++) {
        somme+=tableau[i];
    }
    moy = somme/ tableau.length
    console.log(`La moyenne des élements du tableau est égale à ${moy}`);
}
function firstIndexOfInt(tableau,valeur) 
{
    let check =true ,i=0;
    while (check && i<tableau.length) {
        if(tab[i] == valeur) {
            check = false;
            console.log(`l'index de l'entier ${valeur} est ${i}`);
        }  
        i++;     
    }
}
function findDoublon(tableau) 
{
    let nbDoublons, tabDoubl=[], check=true, j=0, k=0;
    for (i = 0; i < tableau.length; i++) {
        for(j=i+1; j<tableau.length; j++) {
            if (tableau[i]==tableau[j]) {
                while(check && k<tabDoubl.length){
                    if(tabDoubl[k]==tableau[i]){
                        check =false;
                    }
                    k++;
                }
                if(check){
                    tabDoubl[tabDoubl.length]=tableau[i];
                }else{
                    check = true;
                }
            }
        }
    }
    nbDoublons=tabDoubl.length;
    console.log(`Il y a ${nbDoublons} doublons dans le tableau`);
}
