
/* =====================================
   GOLD BOLOS - CHUVA DOURADA
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const fundo = document.querySelector(".brilhos-esquerda");

    if (fundo) {

        const reduzirMovimento = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const celular = window.matchMedia(
            "(max-width: 600px)"
        ).matches;

        const quantidade = celular ? 85 : 200;

        const fragmento = document.createDocumentFragment();

        for (let i = 0; i < quantidade; i++) {

            const particula = document.createElement("span");

            particula.classList.add("particula");

            const tamanho = Math.random() * 2 + 0.5;

            const posicao = Math.random() * 100;

            const duracao = Math.random() * 9 + 7;

            // O atraso negativo faz os brilhos começarem
            // em diferentes pontos do percurso.
            const atraso = -Math.random() * duracao;

            const opacidade = Math.random() * 0.55 + 0.2;

            const deslocamento = (Math.random() - 0.5) * 30;

            // Brilhos mais discretos no centro da página.
            const distanciaCentro = Math.abs(posicao - 50);

            const intensidade =
                distanciaCentro < 25
                    ? opacidade * 0.55
                    : opacidade;

            particula.style.setProperty(
                "--tamanho",
                `${tamanho}px`
            );

            particula.style.setProperty(
                "--posicao",
                `${posicao}%`
            );

            particula.style.setProperty(
                "--duracao",
                `${duracao}s`
            );

            particula.style.setProperty(
                "--atraso",
                `${atraso}s`
            );

            particula.style.setProperty(
                "--opacidade",
                intensidade
            );

            particula.style.setProperty(
                "--deslocamento",
                `${deslocamento}px`
            );

            // Respeita a preferência por movimento reduzido.
            if (reduzirMovimento) {

                particula.style.animation = "none";

                particula.style.top =
                    `${Math.random() * 100}%`;

                particula.style.opacity =
                    intensidade * 0.5;
            }

            fragmento.appendChild(particula);
        }

        fundo.appendChild(fragmento);
    }


    /* =====================================
       DETALHES DOS BOLOS
    ===================================== */

    const janela = document.getElementById("janela-sabor");

    const titulo = document.getElementById("titulo-janela");

    const descricao = document.getElementById(
        "descricao-janela"
    );

    const produtos = document.querySelectorAll(
        ".produto-vitrine"
    );

    // A página inicial não tem janela de sabores.
    if (!janela || !titulo || !descricao) {
        return;
    }

    // Abre os detalhes do produto selecionado.
    produtos.forEach((produto) => {

        produto.addEventListener("click", () => {

            titulo.textContent =
                produto.dataset.sabor || "Nome do sabor";

            descricao.textContent =
                produto.dataset.descricao ||
                "Descrição em breve.";

            janela.showModal();
        });

    });

    // Fecha a janela ao clicar ou tocar nela.
    janela.addEventListener("click", () => {
        janela.close();
    });

});
