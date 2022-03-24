//ELEMENTOS ÚNICOS

// console.log(document.querySelector('li:last-child').innerText);

// console.log(document.querySelector('li:first-child').innerText);

// console.log(document.querySelector('li:nth-child(2)').innerText);

// console.log(document.querySelector('li:first-child').innerText);

//nth - número ordinal

//ELEMENTOS MÚLTIPLOS
// console.log(document.getElementsByClassName('collection-item'));

// const itens = document.getElementsByClassName('collection-item');

// itens[3].style.color = 'blue';

//OU
              

// const itens = document.getElementsByTagName('li');
// itens[2].style.color = 'blue';

//pegando o elemento pela tag 'li'
//cria um vetor com os itens usando a classe Array
//looping 
//forEach

/*const itens = document.getElementsByTagName('li');

let itensArray = Array.from(itens);

// itensArray.forEach(function(li, indice){
//     console.log(indice + ': ' + li.innerText);
// });

//odd - impar; even - par

let itensImpares = document.querySelectorAll('li:nth-child(odd)');

// console.log(itensImpares);


let mudaCor = Array.from(itensImpares);

mudaCor.forEach(function(item){
    item.style.background = '#dedede';
});*/

//AULA 23-03-2022
/*
const ITENS = document.querySelector('ul.collection');//quando for const, deixar em maiusculo

//let valor = ITENS.children.textContent = 'Adicionar item';

console.log(ITENS.children[2].firstChild);

//ITENS.children[2].firstChild.textContent = 'Estudar mais' - isso muda meu item na lista, mas faz a mesma coisa
ITENS.children[2].firstChild.textContent.data = 'Vamos ver agora'//isso recoloca meu item na lista
*/

/*PEGAR E MOSTRAR NO CONSOLE O NOVA TAREFA
const LABEL = document.querySelector('form div label');

console.log(LABEL.textContent);
*/

const MUDAR = document.querySelector('a.clear-tasks');
console.log(MUDAR.textContent);

MUDAR.textContent = 'APAGAR';