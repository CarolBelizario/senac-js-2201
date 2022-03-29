const p = document.getElementById('paragrafo');//vai pegar o conteúdo digitado pelo usuário
const titulo = document.querySelector('h1');//vai varrer o código em busca de h1 

console.log(titulo);

p.innerText = 'Meu texto!';

if(confirm('Quer entrar com um valor?')){

    let valor = prompt('Digite um número de 0 a 10');

    if(valor >= 0 && valor<=10){

        p.innerText = '';

        for(i=1; i <= valor; i++){
            p.innerText = p.innerText + 'Carol\n';//repete o texto pela quantia de vezes digitado pela inserção do usuário
        }

        titulo.style.background = 'salmon';

    }else{
        p.innerText = 'Valor inválido';
        titulo.style.background = 'yellow';
    }
}else{
    p.innerText = 'Que pena que você não entrou com um valor :c';
    titulo.style.background = 'red';
}
   
