/*

let valor = prompt();

console.log(valor);

*/

const p = document.getElementById('paragrafo');

//p.innerText = 'Meu texto!';

if(confirm('Quer entrar com um valor?')){

let entrada = prompt('Digite alguma coisa entre 0 e 10');



if (entrada >= 0 && entrada <= 10){

    p.innerText = '';

    for(i = 0; i < entrada ; i++){

    
        p.innerText =  p.innerText + "Olá, Carol\n"; 

    }

   
} else{
 
    p.innerText = 'Valor inválido';
}

}else{

    p.innerText = 'Que pena.';

}
