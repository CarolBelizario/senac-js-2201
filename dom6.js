//aqui criou mais uma tarefa
const LI = document.createElement('li');

LI.className = 'collection-item';

LI.id = 'nova-tarefa-qualquer';

LI.setAttribute('title', 'Pare o mouse');
//criamos o elemento li

//criamos um texto para colocar na li
const TEXTO = document.createTextNode('Tarefa inserida dinamicamente');

LI.appendChild(TEXTO);//colocamos o texto em li

console.log(LI);



//criando o xizinho
//criamos o elemento a
const A = document.createElement('a');

A.className = 'delete-item secondary-content';

A.setAttribute('href', '#');
//FIM criamos o elemento a


//criamos o elemento i
const I = document.createElement('i');

I.className = 'fa fa-remove';
//FIM criamos o elemento i

A.appendChild(I);//colocamos o i no a

LI.appendChild(A);//colocamos o a no li

console.log(LI);

//capturamos o elemento UL para poder inserir o li
const UL = document.querySelector('ul.collection');

UL.appendChild(LI);


/*outra maneira
const A = document.createElement('a');
A.href = '#';
A.className = 'delete-item secondary-content';
LI.appendChild(A);
const I = document.createElement('i');
I.className = 'fa fa-remove';
A.appendChild(I);
*/

const novoTitulo = document.createElement('h2'); //criar o elemento pelo qual vou substituir

novoTitulo.id = 'task-title'; //isso define o id da coisa substituta

const novoTexto = document.createTextNode('Listinha');//isso nomeia a coisa nova

novoTitulo.appendChild(novoTexto);//insere texto dentro de título

const antigoTitulo = document.querySelector('h5');//aqui eu pego o que vai ser substituido

const elementoPai = document.querySelector('div.card-action');//pega o que está na div

elementoPai.replaceChild(novoTitulo, antigoTitulo);//aqui é a substituição

console.log(antigoTitulo);//impressão