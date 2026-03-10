// LÓGICA DE FELICIDADE E TRISTE , ALTERAR HUMOR
var titulo = document.querySelector("#titulo");
var btnFeliz = document.querySelector("#botaoFeliz");
var btnTriste = document.querySelector("#botaoTriste");
function mudarParaFeliz() {
    if (titulo) {
        titulo.textContent = "Estou feliz agora!";
        titulo.style.color = "orange";
    }
}
function mudarParaTriste() {
    if (titulo) {
        titulo.textContent = "Estou triste agora";
        titulo.style.color = "blue";
    }
}
btnFeliz.addEventListener("click", mudarParaFeliz);
btnTriste.addEventListener("click", mudarParaTriste);
// LÓGICA DE FELICIDADE E TRISTE , ALTERAR HUMOR
//--------------------------------------------------------------------------------------------
//LÓGICA DE CONTADOR DOM
var contador = document.querySelector("#valorContador");
var btnAumentar = document.querySelector("#btnAumentar");
var btnDiminuir = document.querySelector("#btnDiminuir");
var numeroAtual = 0;
var atualizarTela = function () {
    if (contador) {
        contador.textContent = numeroAtual.toString();
        if (numeroAtual === 0) {
            contador.style.color = "black";
        }
        else if (numeroAtual > 0) {
            contador.style.color = "green";
        }
        else {
            contador.style.color = "red";
        }
    }
};
var somar = function () {
    numeroAtual++;
    atualizarTela();
};
var subtrair = function () {
    numeroAtual--;
    atualizarTela();
};
btnAumentar.addEventListener("click", somar);
btnDiminuir.addEventListener("click", subtrair);
//LÓGICA DE CONTADOR DOM
var nomeInput = document.querySelector("#inputNome");
var saudar = document.querySelector("#btnSaudar");
var saudarNome = function () {
    var nomeParaSaudar = nomeInput.value.trim();
    if (!nomeParaSaudar) {
        alert("Digite um nome v\u00E1lido, por favor!");
        return;
    }
    titulo.textContent = "Ol\u00E1, ".concat(nomeParaSaudar, "! Seja bem-vindo(a)!");
    nomeInput.value = "";
    nomeInput.focus();
};
saudar.addEventListener("click", saudarNome);
