//Tamanho da tela
const tamanho = 'A:' + window.innerHeight + ' x L:' + window.innerWidth;//tamanho em pixels da tela de navegação incluindo barra lateral

const paragrafo = document.getElementById('paragrafo');

const navegador = window.navigator; //somente leitura, vai retornar insformações do script

console.log(navegador);

paragrafo.innerText = navegador;

//document.write(tamanho);
//querySelector ou getElementById - pegar um elemento do html

// const p = document.querySelector('p');
// p.style.background = 'pink';
