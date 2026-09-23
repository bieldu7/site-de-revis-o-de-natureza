```javascript
// ==============================
// MENU DO SITE
// ==============================

function mostrarSecao(id, botao) {

    // Esconde todas as seções
    var secoes = document.getElementsByClassName("section");

    for (var i = 0; i < secoes.length; i++) {
        secoes[i].classList.remove("active");
    }

    // Mostra a seção escolhida
    var secao = document.getElementById(id);

    if (secao) {
        secao.classList.add("active");
    }


    // Remove o destaque dos botões
    var botoes = document.querySelectorAll("nav button");

    for (var j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove("active");
    }


    // Destaca o botão clicado
    if (botao) {
        botao.classList.add("active");
    }

    // Volta para o topo
    window.scrollTo(0, 0);
}



// ==============================
// QUIZ
// ==============================

function corrigirQuiz() {

    var respostasCorretas = {
        q1: "b",
        q2: "a",
        q3: "a",
        q4: "a",
        q5: "b"
    };

    var pontos = 0;
    var total = 5;


    // Pergunta 1
    var q1 = document.querySelector(
        'input[name="q1"]:checked'
    );

    if (q1 && q1.value === respostasCorretas.q1) {
        pontos++;
    }


    // Pergunta 2
    var q2 = document.querySelector(
        'input[name="q2"]:checked'
    );

    if (q2 && q2.value === respostasCorretas.q2) {
        pontos++;
    }


    // Pergunta 3
    var q3 = document.querySelector(
        'input[name="q3"]:checked'
    );

    if (q3 && q3.value === respostasCorretas.q3) {
        pontos++;
    }


    // Pergunta 4
    var q4 = document.querySelector(
        'input[name="q4"]:checked'
    );

    if (q4 && q4.value === respostasCorretas.q4) {
        pontos++;
    }


    // Pergunta 5
    var q5 = document.querySelector(
        'input[name="q5"]:checked'
    );

    if (q5 && q5.value === respostasCorretas.q5) {
        pontos++;
    }


    // Resultado
    var resultado = document.getElementById("resultado");


    if (pontos === 5) {

        resultado.innerHTML =
            "🎉 Parabéns! Você acertou 5 de 5!";

        resultado.style.color = "green";

    } else if (pontos >= 3) {

        resultado.innerHTML =
            "👏 Muito bem! Você acertou " +
            pontos +
            " de 5.";

        resultado.style.color = "#15803d";

    } else {

        resultado.innerHTML =
            "📚 Continue estudando! Você acertou " +
            pontos +
            " de 5.";

        resultado.style.color = "red";
    }
}
```
