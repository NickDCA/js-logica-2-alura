// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
let reiniciarBt = document.getElementById('reiniciar');

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroAleatorio) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);
    reiniciarBt.removeAttribute('disabled');
  } else if (chute < numeroAleatorio) {
    exibirTextoNaTela('p', `O número é maior que ${chute}`);
  } else {
    exibirTextoNaTela('p', `O número é menor que ${chute}`);
  }
  tentativas++;
  limparChute();
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparChute() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  limparChute();
  reiniciarBt.toggleAttribute('disabled');
  numeroAleatorio = gerarNumeroAleatorio();
  exibirMensagemInicial();
  tentativas = 1;
}
