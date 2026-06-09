// Menu Mobile

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Tema Escuro

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Contador Animado

const contadores = document.querySelectorAll(".contador");

function iniciarContadores() {

    contadores.forEach(contador => {

        const alvo = +contador.dataset.target;
        let valor = 0;

        const incremento = alvo / 100;

        const atualizar = () => {

            valor += incremento;

            if(valor < alvo){
                contador.innerText = Math.floor(valor);
                requestAnimationFrame(atualizar);
            } else {
                contador.innerText = alvo;
            }
        };

        atualizar();
    });
}

let executado = false;

window.addEventListener("scroll", () => {

    const impacto = document.getElementById("impacto");

    const posicao = impacto.getBoundingClientRect().top;

    if(posicao < window.innerHeight && !executado){
        iniciarContadores();
        executado = true;
    }
});