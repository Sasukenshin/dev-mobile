console.log("***** Menu *****");
console.log(" 1 - Ajouter un nombre au tableau ");
console.log(" 2 - Afficher les nombres");
console.log(" q - Quittez le programme");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answer="e", tab=[];

var recursiveAsyncReadLine = function () {
    rl.question('Faites votre choix : ', (answer) => {
        switch (answer) {
            case '1':
                rl.question('Veuillez saisir le nombre :', (nombre) => {
                    tab[tab.length]=nombre;
                    recursiveAsyncReadLine();
                });
                
              break;
            case '2':
                affichage(tab);
                recursiveAsyncReadLine();
              break;
            case 'q':
              console.log('Au revoir');
              rl.close();
              break;
            default:
              console.log('Mauvais choix veuillez réessayer');
              recursiveAsyncReadLine();
              break;
          }
          
    });
  };
  
  recursiveAsyncReadLine();
    

function affichage(tableau) 
{
    if(tableau.length==0) {
        console.log("le tableau est vide");
    }
    console.log(" Affichage du tableau dans l'ordre");
    for (i = 0; i < tableau.length; i++) {
        console.log(`${tableau[i]}`);
    }
}