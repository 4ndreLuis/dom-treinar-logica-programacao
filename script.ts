// LÓGICA DE FELICIDADE E TRISTE , ALTERAR HUMOR
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
// LÓGICA DE FELICIDADE E TRISTE , ALTERAR HUMOR
//--------------------------------------------------------------------------------------------

const contador = document.querySelector("#valorContador") as HTMLSpanElement;
const btnAumentar = document.querySelector("#btnAumentar") as HTMLButtonElement;
const btnDiminuir = document.querySelector("#btnDiminuir") as HTMLButtonElement;

let numeroAtual = 0;

const atualizarTela = () => {
  if (contador) {
    contador.textContent = numeroAtual.toString();
    if (numeroAtual === 0) {
      contador.style.color = "black";
    } else if (numeroAtual > 0) {
      contador.style.color = "green";
    } else {
      contador.style.color = "red";
    }
  }
};

const somar = () => {
  numeroAtual++;
  atualizarTela();
};

const subtrair = () => {
  numeroAtual--;
  atualizarTela();
};

btnAumentar.addEventListener("click", somar);
btnDiminuir.addEventListener("click", subtrair);
