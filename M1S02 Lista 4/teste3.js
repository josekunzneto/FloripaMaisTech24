const prompt = require('prompt-sync')();
let limite = Number(prompt('Qual o limite? '));
let velocidade = Number(prompt('Qual sua velocidade atual? '));

if(velocidade > limite) {
    console.log(`Limite Excedido em ${velocidade}`) 
} else if (velocidade < limite) {
    console.log(`Dentro do Limitee`)
};
