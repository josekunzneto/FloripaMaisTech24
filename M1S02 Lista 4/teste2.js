const prompt = require('prompt-sync')();
let limite = prompt('Qual o limite? ');
let velocidade = prompt('Qual sua velocidade atual? ');

if(velocidade > limite) {
    console.log(`Limite Excedido em ${velocidade}`) 
} else if (velocidade < limite) {
    console.log(`Dentro do Limite`)
}
