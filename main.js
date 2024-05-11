//elementos capturados do HTML
const divRelogio = document.querySelector('.relogio');
const inputNome = document.querySelector('.inputNome');
const inputPeso = document.querySelector('.inputPeso'); //ou document.getElementsByClassName(inputPeso);
const inputAltura = document.querySelector('.inputAltura');
const botao = document.querySelector('button');

// Aula 11/05
let numeroAleatorio;

numeroAleatorio = Math.floor(Math.random() * 10);  // colocar um número inteiro dentro dos aleatórios

console.log(`Número aleatório: ${numeroAleatorio}`); 

let numeroPiso;

numeroPiso = Math.floor(4.87);
console.log(`Número piso: ${numeroPiso}`);

botao.addEventListener('click', function(evento){
    evento.preventDefault();
})

const dataInicial = new Date(); //sem parâmetro, retorna a data atual.
console.log(dataInicial);
console.log(dataInicial.getHours());
console.log(dataInicial.getMonth());


// Para criar um relógio que atualize linha a linha:
function atualizaRelogio() {
    const dataAtual = new Date();
    let horas = dataAtual.getHours();
    horas = adicionaZero(horas);
    let minutos = dataAtual.getMinutes();
    minutos = adicionaZero(minutos);
    let segundos = dataAtual.getSeconds();
    segundos = adicionaZero(segundos);
    
    console.log(`${horas}:${minutos}:${segundos}`);
    divRelogio.innerHTML = (`${horas}:${minutos}:${segundos}`); //ISSO AQUI FAZ ABRIR O CONTEUDO NO HTML
    
}

atualizaRelogio();

const relogio = setInterval(function(){
    atualizaRelogio();
}, 1000);

/*setTimeout(function(){
    clearInterval(relogio);
}, 10000);*/

//customizando com o zero à esquerda
function adicionaZero(numero){
    if(numero < 10){
        numero = "0"+numero;
        }
        return numero;
}

adicionaZero();