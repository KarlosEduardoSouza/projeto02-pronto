console.clear();
const prompt = require('prompt-sync')();

let respostaFinal = 'sim'

let elementos = ['pedra', 'papel', 'tesoura'];

let pontosUsuario = 0
let pontosPc = 0

console.log('Seja bem vindo ao jogo do Jokenpô!');

console.log();

console.log(`Regras:
Pedra ganha da Tesoura, mas perde para o Papel;
Tesoura ganha do Papel, mas perde para a Pedra;
Papel ganha da Pedra, mas perde para a Tesoura.`)

console.log();

while (respostaFinal == 'sim') {

console.log();

console.log('Para inciar pressione ENTER');

prompt();

let rodadas = +prompt('Quantas rodadas deseja jogar? ')

console.log();

    for (let i = 0; i < rodadas; i++){

console.log(`Você pode escolher 1, entre 3 opções: 
Pedra, Papel ou Tesoura`);

console.log();

let escolhaUsuario = prompt('Qual você escolhe? ').toLowerCase();

    while (escolhaUsuario != 'pedra' && escolhaUsuario != 'papel' && escolhaUsuario != 'tesoura'){
        console.log('Resposta inválida')
        console.log()
        escolhaUsuario = prompt('Qual você escolhe? ').toLowerCase()
    } 

let numeroAleatorio = Math.random() * 3;

let escolhaPC = Math.floor(numeroAleatorio);

console.log();

console.log(`Você escolheu ${escolhaUsuario}!`)

console.log();

console.log(`O Pc escolheu ${elementos[escolhaPC]}!`)

let escolhaAleatoria = elementos[escolhaPC]

console.log();

    if (escolhaUsuario == 'tesoura' && escolhaAleatoria == 'papel' || escolhaUsuario == 'pedra' && escolhaAleatoria == 'tesoura' || escolhaUsuario == 'papel' && escolhaAleatoria == 'pedra') {
        console.log('Parabéns! Você ganhou essa rodada!!!');
        console.log();
        pontosUsuario++

    }   else if (escolhaAleatoria == 'tesoura' && escolhaUsuario == 'papel' || escolhaAleatoria == 'pedra' && escolhaUsuario == 'tesoura' || escolhaAleatoria == 'papel' && escolhaUsuario == 'pedra') {
            console.log('Que pena, o Pc ganhou essa rodada.');
            console.log();
            pontosPc++
        
        }   else if (escolhaUsuario == 'tesoura' && escolhaAleatoria == 'tesoura' || escolhaUsuario == 'pedra' && escolhaAleatoria == 'pedra' || escolhaUsuario == 'papel' && escolhaAleatoria == 'papel') {
                console.log('Deu empate nessa rodada, mas vamos para a proxima.');
                console.log();
            }

console.log();
console.log();
console.log();

console.log(`Quantas partidas o Usuario ganhou: ${pontosUsuario}`);

console.log();

console.log(`Quantas partidas o Pc ganhou: ${pontosPc}`);

console.log();

}
console.log();


    if (pontosUsuario > pontosPc) {
        console.log('Parabéns!!! Você ganhou o JOGO! Você ganhou do Pc')
    }       else if (pontosUsuario < pontosPc) {
            console.log('Uma pena, você perdeu o JOGO para o Pc')
        }       else {
            console.log('O JOGO ficou empatado')
                }

console.log();


respostaFinal = prompt('Deseja jogar novamente? ').toLowerCase();

    if (respostaFinal == 'sim'){
        pontosUsuario = 0
        pontosPc = 0
    }

console.log();
 
} 