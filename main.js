document.querySelector('.parametro-senha__botao');
const numerosenha = document.querySelector('.parametro-senha__texto');

let tamanhoSenha = 12;

numeroSenha.textContent = 5;

const botoes = document.querySelectorAll('.prametro-senha__botao');
botoes[0]. onclick = diminuirTamanho;

console.log(botoes);

function diminuirTamanho(){
    tamanhoSenha = tamanhoSenha - 1;
}