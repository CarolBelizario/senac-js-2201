let saida;
saida = document;

saida = document.head;
saida = document.body;
saida = document.body.firstElementChild;//chama a classe e primeiro filho
saida = document.body.firstElementChild.firstElementChild;//filho do filho
saida = document.body.firstElementChild.firstElementChild.firstElementChild;//e assim por diante
saida = document.doctype;
saida - document.domain; 
saida = document.URL;
saida = document.characterSet;
saida = document.forms; //formulário
saida = document.forms[0]; //vetor, mas de formulário
saida = document.forms[0][0]; //pegar o primeiro elemento dentro do primeiro formulário
saida = document.links;
saida = document.links[0];
saida = document.links[0].className;
saida = document.scripts;
saida = document.scripts[2];
saida = document.scripts[2].getAttribute('src');


console.log(saida);
