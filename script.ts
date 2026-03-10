// LÓGICA DE FELICIDADE E TRISTE , ALTERAR HUMOR
const titulo = document.querySelector("#titulo") as HTMLHeadElement;
const btnFeliz = document.querySelector("#botaoFeliz") as HTMLButtonElement;
const btnTriste = document.querySelector("#botaoTriste") as HTMLButtonElement;

let nomeGlobal = "";

function mudarParaFeliz() {
  if (titulo) {
    nomeGlobal = nomeInput.value.trim();
    if (!nomeGlobal) {
      alert(`Digite um nome válido!`);
      return;
    }
    titulo.textContent = `${nomeGlobal} está feliz agora!`;
    titulo.style.color = "orange";
  }
}
function mudarParaTriste() {
  if (titulo) {
    nomeGlobal = nomeInput.value.trim();
    if (!nomeGlobal) {
      alert(`Digite um nome válido!`);
      return;
    }
    titulo.textContent = `${nomeGlobal} está triste agora.`;
    titulo.style.color = "blue";
  }
}

btnFeliz.addEventListener("click", mudarParaFeliz);
btnTriste.addEventListener("click", mudarParaTriste);
// LÓGICA DE FELICIDADE E TRISTE , ALTERAR HUMOR
//--------------------------------------------------------------------------------------------

//LÓGICA DE CONTADOR DOM
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
//LÓGICA DE CONTADOR DOM

//LÓGICA PARA TROCAR O TITULO H1 PARA O VALOR DO INPUT COM SAUDAÇÃO!
const nomeInput = document.querySelector("#inputNome") as HTMLInputElement;

const saudar = document.querySelector("#btnSaudar") as HTMLButtonElement;

const saudarNome = () => {
  nomeGlobal = nomeInput.value.trim();
  if (!nomeGlobal) {
    alert(`Digite um nome válido!`);
    return;
  }
  titulo.style.color = "";
  titulo.textContent = `Olá, ${nomeGlobal}! Seja bem-vindo(a)!`;
  nomeInput.focus();
};

saudar.addEventListener("click", saudarNome);

//LÓGICA PARA TROCAR O TITULO H1 PARA O VALOR DO INPUT COM SAUDAÇÃO!
