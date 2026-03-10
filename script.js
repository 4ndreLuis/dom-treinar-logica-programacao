// LÓGICA DE FELICIDADE E TRISTE , ALTERAR HUMOR
var titulo = document.querySelector("#titulo");
var btnFeliz = document.querySelector("#botaoFeliz");
var btnTriste = document.querySelector("#botaoTriste");
var nomeGlobal = "";
function mudarParaFeliz() {
    if (titulo) {
        nomeGlobal = nomeInput.value.trim();
        if (!nomeGlobal) {
            alert("Digite um nome v\u00E1lido!");
            return;
        }
        titulo.textContent = "".concat(nomeGlobal, " est\u00E1 feliz agora!");
        titulo.style.color = "orange";
    }
}
function mudarParaTriste() {
    if (titulo) {
        nomeGlobal = nomeInput.value.trim();
        if (!nomeGlobal) {
            alert("Digite um nome v\u00E1lido!");
            return;
        }
        titulo.textContent = "".concat(nomeGlobal, " est\u00E1 triste agora.");
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
//LÓGICA PARA TROCAR O TITULO H1 PARA O VALOR DO INPUT COM SAUDAÇÃO!
var nomeInput = document.querySelector("#inputNome");
var saudar = document.querySelector("#btnSaudar");
var saudarNome = function () {
    nomeGlobal = nomeInput.value.trim();
    if (!nomeGlobal) {
        alert("Digite um nome v\u00E1lido!");
        return;
    }
    titulo.style.color = "";
    titulo.textContent = "Ol\u00E1, ".concat(nomeGlobal, "! Seja bem-vindo(a)!");
    nomeInput.focus();
};
saudar.addEventListener("click", saudarNome);
//LÓGICA PARA TROCAR O TITULO H1 PARA O VALOR DO INPUT COM SAUDAÇÃO!
