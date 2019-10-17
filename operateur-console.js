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
});

