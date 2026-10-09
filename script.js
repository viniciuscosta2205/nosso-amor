const botaoCarta = document.getElementById("botaoCarta");
const mensagemCarta = document.getElementById("mensagemCarta");

botaoCarta.addEventListener("click", function () {
    if (mensagemCarta.style.display === "block") {
        mensagemCarta.style.display = "none";
        botaoCarta.textContent = "❤️ Abrir minha carta ❤️";
    } else {
        mensagemCarta.style.display = "block";
        botaoCarta.textContent = "💌 Fechar minha carta";
    }
});
function atualizarContador() {
    const inicioNamoro = new Date(2026, 6, 8);
    const hoje = new Date();

    inicioNamoro.setHours(0, 0, 0, 0);
    hoje.setHours(0, 0, 0, 0);

    const diferenca = hoje.getTime() - inicioNamoro.getTime();
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    document.getElementById("diasJuntos").textContent =
        dias >= 0 ? dias : 0;
}

atualizarContador();

const botaoSurpresa = document.getElementById("botaoSurpresa");
const mensagemSurpresa = document.getElementById("mensagemSurpresa");

botaoSurpresa.addEventListener("click", function () {
    if (mensagemSurpresa.style.display === "block") {
        mensagemSurpresa.style.display = "none";
        botaoSurpresa.textContent = "💌 Clique para uma surpresa";
    } else {
        mensagemSurpresa.style.display = "block";
        botaoSurpresa.textContent = "❤️ Fechar minha surpresa";
    }
});