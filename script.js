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
var contador = document.querySelector("#valorContador");
var btnAumentar = document.querySelector("#btnAumentar");
var btnDiminuir = document.querySelector("#btnDiminuir");
var numeroAtual = 0;
var atualizarTela = function () {
    if (contador) {
        contador.textContent = numeroAtual.toString();
        contador.style.color = numeroAtual < 0 ? "red" : "green";
    }
};
var somar = function () {
    numeroAtual = numeroAtual + 1;
    atualizarTela();
};
var subtrair = function () {
    numeroAtual = numeroAtual - 1;
    atualizarTela();
};
btnAumentar === null || btnAumentar === void 0 ? void 0 : btnAumentar.addEventListener("click", somar);
btnDiminuir === null || btnDiminuir === void 0 ? void 0 : btnDiminuir.addEventListener("click", subtrair);
