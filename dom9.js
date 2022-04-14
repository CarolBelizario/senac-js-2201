//quando clico no elemento mais interno em uma cadeia de elementos com
//Event Listener, todos eventos dos elementos mais externos aos acionados


document.querySelector('.card-title').addEventListener('click', function(e){

    console.log(e.target);//o alvo é apontar o título 'lista de tarefas'
});

document.querySelector('.card-content').addEventListener('click', function(e){
    console.log(e.target);//o alvo é pegar o conteúdo do cartão, o formulário, vai disparar 2 níveis

});

document.querySelector('.card').addEventListener('click', function(e){
    console.log(e.target);//o alvo é pegar o cartão todo o conteúdo, o formulário vai disparar 3 níveis de hierarquia
});