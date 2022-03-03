/*olaMundoNoLog(`Carol`);

function olaMundoNoLog(nome){

    console.log(`Olá, ${nome}!`);
}

const SOMA = function(a, b){

    return a + b;

};

let resultado = SOMA(2, 2);

console.log(resultado);

(function(a, b){
    console.log(a + b);
})(3, 3);
*/

/*EXERCICIO VETOR PARA PEGAR O ULTIMO

let vetor = [5, 4, 3, 2, 1];



function ultimoElemento(vet){

    let last = vet.length - 1;
    return vet[last];
}

let novoVetor = ultimoElemento(vetor);

console.log('Último elemento = ' + novoVetor);
*/


/* E É ASSIM QUE SEU BANCO DE DADOS VAI SE FORMANDO...
let aluno = {   nome: "Amanda",
                matricula: 827302,
                setNome: function (n){
                console.log('Muda para ' + n);
            }};

            aluno.setNome('blabla')
            */

  
            

/* NEW PEGA UMA INSTANCIA E ELEVA AO OBJETO HOJE, SEM ISSO AS CLASSES NÃO FAZEM NADA 

let hoje = new Date;

console.log( hoje.getUTCHours());
*/


/* EXIBIR MÊS CORRENTE

function mesCorrente(){

    let mes = ['Jan', 
               'Fev', 
               'Mar', 
               'Abr', 
               'Mai', 
               'Jun', 
               'Jul', 
               'Ago', 
               'Set', 
               'Nov', 
               'Dez'];

    let objDate = new Date;

    let atual = objDate.getMonth();

    return mes[atual];
};


console.log(mesCorrente());

*/

let hoje = new Date;

console.log(hoje.getHours() + ':' + hoje.getMinutes());