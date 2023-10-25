// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio;
gerarNumeroAleatorio();
let tentativas = 1;
let reiniciarBt = document.getElementById('reiniciar');
alert(
  'Para uma melhor experiência, utilize o Chrome como navegador. A integração com a API ResponsiveVoice funciona corretamente lá.'
);

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
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
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let qntdElementosLista = listaDeNumerosSorteados.length;

  qntdElementosLista == numeroLimite ? (listaDeNumerosSorteados = []) : null;

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    // console.log('numero repetido gerado, gerando novamente');
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.table(listaDeNumerosSorteados);
    numeroAleatorio = numeroEscolhido;
  }
}

function limparChute() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  reiniciarBt.toggleAttribute('disabled');
  limparChute();
  gerarNumeroAleatorio();
  exibirMensagemInicial();
  tentativas = 1;
}
