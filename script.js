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
