const p = document.getElementById('paragrafo');

p.innerText = 'Meu texto!';

const colors = ["red","green", "cyan", "yellow"];

for(i=0, c = 0 ; i < 100; i++, c++) {

    p.style.background = colors[c];
    
    console.log(c + ': ' + p.style.background);

    if(c>= 6) c = -1;

}

console.log(p);