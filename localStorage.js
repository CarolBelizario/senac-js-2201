//de objeto JSON para string

const OBJ = { nome: "Bono", idade: 37};//string pura com JSON
            
console.log( JSON.stringify(OBJ) );        

//de string para objeto JSON

const STR = '{"nome": "Bono", "idade":37}';

console.log(JSON.parse(STR));

localStorage.setItem('nome', 'Bono');

const NOME = localStorage.getItem('nome');

console.log(NOME);

sessionStorage.setItem('idade', '37');//armazena em uma url
const IDADE = sessionStorage.getItem('idade');

console.log(IDADE);

document.querySelector('input.btn').addEventListener('click', function(e){
  e.preventDefault();

      const TAREFA = document.querySelector('#task').value;

      document.querySelector('#task').value = '';

      console.log( JSON.parse(TAREFA) );

      localStorage.setItem('tarefa', TAREFA);
});

const TRF = localStorage.getItem('tarefa');
if(TRF){
  document.querySelector('#exibe').innerText = TRF;
}