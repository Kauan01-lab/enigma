// =====================================================
// 🧩 SEUS ENIGMAS
// =====================================================
//
//
//          👇👇👇 EDITE SOMENTE AQUI 👇👇👇
//
//
//
// Cada enigma possui:
//
// titulo  = título que aparece na tela
//
// texto   = pergunta / desafio
//
// resposta = resposta que precisa ser digitada
//
// imagem  = imagem opcional
//
//
//
// Se não quiser imagem:
//
// imagem: ""
//
//
//
// Se quiser imagem:
//
// imagem: "imagens/pista1.jpg"
//
// =====================================================


const enigmas = [

    {
        texto:  "50.15748281060472, 29.65790444045449",
        resposta: "380",
        imagem: "imagens/IMAGEM6.png"
    },
];


// =====================================================
// ⚙️ CONTROLE DO JOGO
// =====================================================

let enigmaAtual = 0;


// =====================================================
// 🚀 INICIAR
// =====================================================

carregarEnigma();


// =====================================================
// 📖 CARREGAR ENIGMA
// =====================================================

function carregarEnigma() {


    const enigma =
        enigmas[enigmaAtual];


    // -------------------------------------------------
    // TÍTULO
    // -------------------------------------------------

    document.getElementById("titulo")
        .textContent =
        enigma.titulo;


    // -------------------------------------------------
    // TEXTO
    // -------------------------------------------------

    document.getElementById("texto")
        .textContent =
        enigma.texto;


    // -------------------------------------------------
    // LIMPAR CAMPO
    // -------------------------------------------------

    const campo =
        document.getElementById("resposta");


    campo.value = "";

    campo.focus();


    // -------------------------------------------------
    // IMAGEM
    // -------------------------------------------------

   const areaImagem = document.getElementById("imagem");

areaImagem.innerHTML = "";

if (enigma.imagem && enigma.imagem.trim() !== "") {
    const imagem = document.createElement("img");

    imagem.src = enigma.imagem;

    imagem.onload = function () {
        areaImagem.appendChild(imagem);
    };

    imagem.onerror = function () {
        areaImagem.innerHTML = "";
    };
}

}


// =====================================================
// 🔍 VERIFICAR RESPOSTA
// =====================================================

function verificarResposta() {


    const campo =
        document.getElementById("resposta");


    const respostaDigitada =
        normalizar(
            campo.value
        );


    // -------------------------------------------------
    // Se estiver vazio, não faz nada
    // -------------------------------------------------

    if (
        respostaDigitada === ""
    ) {

        return;

    }


    // -------------------------------------------------
    // Resposta correta
    // -------------------------------------------------

    const respostaCorreta =
        normalizar(
            enigmas[
                enigmaAtual
            ].resposta
        );


    // -------------------------------------------------
    // SE ACERTOU
    // -------------------------------------------------

    if (
        respostaDigitada ===
        respostaCorreta
    ) {


        proximoEnigma();


    }


    // -------------------------------------------------
    // SE ERROU
    // -------------------------------------------------
    //
    // Não acontece absolutamente nada.
    //
    // O jogador permanece neste enigma.
    //
}


// =====================================================
// ➡️ PRÓXIMO ENIGMA
// =====================================================

function proximoEnigma() {


    enigmaAtual++;


    // -------------------------------------------------
    // Ainda existem enigmas?
    // -------------------------------------------------

    if (
        enigmaAtual <
        enigmas.length
    ) {


        carregarEnigma();


        return;

    }


    // -------------------------------------------------
    // Acabaram os enigmas
    // -------------------------------------------------

    finalizarJogo();

}


// =====================================================
// 🏁 FINALIZAR JOGO
// =====================================================

function finalizarJogo() {


    document.getElementById("jogo")
        .style.display =
        "none";


    document.getElementById("final")
        .classList.add("ativo");

}


// =====================================================
// 🔤 NORMALIZAR RESPOSTA
// =====================================================
//
// Permite que:
//
// mapa
// MAPA
// Mapa
//
// sejam consideradas iguais.
//
// Também ignora acentos.
//
// Exemplo:
//
// relógio
// relogio
//
// =====================================================

function normalizar(texto) {


    return texto

        .toLowerCase()

        .normalize("NFD")

        .replace(
            /[\u0300-\u036f]/g,
            ""
        )

        .trim();

}


// =====================================================
// ⌨️ ENTER PARA RESPONDER
// =====================================================

document.getElementById("resposta")
    .addEventListener(
        "keydown",
        function(event) {


            if (
                event.key === "Enter"
            ) {


                verificarResposta();


            }

        }
    );