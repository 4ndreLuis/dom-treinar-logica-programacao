const titulo = document.querySelector("#titulo") as HTMLHeadElement;
const btnFeliz = document.querySelector("#botaoFeliz") as HTMLButtonElement;
const btnTriste = document.querySelector("#botaoTriste") as HTMLButtonElement;

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
