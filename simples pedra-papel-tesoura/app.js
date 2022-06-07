const escolhaComputadorDisplay = document.getElementById('escolha-computador');
const escolhaUsuarioDisplay = document.getElementById('escolha-usuario');
const resultadoDisplay = document.getElementById('resultado');
const possiveisEscolhas = document.querySelectorAll('button');
let escolhaUsuario;
let escolhaComputador;
let resultado;

possiveisEscolhas.forEach(possivelEscolha => possivelEscolha.addEventListener('click', (e) =>{
    escolhaUsuario = e.target.id;
    escolhaUsuarioDisplay.innerHTML = escolhaUsuario;
    gerarEscolhaComputador();
    pegarResultado();
}))

function gerarEscolhaComputador () {
    const numeroAleatorio = Math.floor(Math.random() * possiveisEscolhas.length + 1);
    
    if (numeroAleatorio === 1) {
        escolhaComputador = 'pedra'   
    }
    if (numeroAleatorio === 2) {
        escolhaComputador = 'tesoura'   
    }
    if (numeroAleatorio === 3) {
        escolhaComputador = 'papel'   
    }
    escolhaComputadorDisplay.innerHTML = escolhaComputador;
}

function pegarResultado() {
    if (escolhaComputador === escolhaUsuario) {
        resultado = 'é um empate!'
    }
    if (escolhaComputador === 'pedra' && escolhaUsuario === 'papel') {
        resultado = 'vitória do usuário!'
    }
    if (escolhaComputador === 'pedra' && escolhaUsuario === 'tesoura') {
        resultado = 'vitória do computador!'
    }
    if (escolhaComputador === 'papel' && escolhaUsuario === 'tesoura') {
        resultado = 'vitória do usuário!'
    }
    if (escolhaComputador === 'papel' && escolhaUsuario === 'pedra') {
        resultado = 'vitória do computador!'
    }
    if (escolhaComputador === 'tesoura' && escolhaUsuario === 'pedra') {
        resultado = 'vitória do usuário!'
    }
    if (escolhaComputador === 'tesoura' && escolhaUsuario === 'papel') {
        resultado = 'vitória do computador!'
    }
    resultadoDisplay.innerHTML = resultado;
}