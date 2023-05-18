// ============= OBJETIVO 1 ===================

// passo 1 = Pegar no JS o elemento HTML correspondente ao botão de troca de tema:
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 = Dar um jeito de pegar no JS o elemento HTML correspondente ao body:
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// passo 3 = Dar um jeito de indentificar o clique do usuário no botão de troca de tema:
botaoAlterarTema.addEventListener("click", () => {

    // Passo 6 = Verificar e o body já tem a classe modo-escuro:
    const modoEscutoEstaAtivo = body.classList.contains("modo-escuro");

    if(modoEscutoEstaAtivo){
        // passo 7 = Remover a classe do modo-escuro do body:
        body.classList.remove("modo-escuro");

        // passo 8 = Trocar a imagem do botão de alterar tema para sol:
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    }

    else{
        // passo 4 = Adicionar a classe modo-escuro no body:
        body.classList.add("modo-escuro");

        // passo 5 = Trocar a imagem do botão do alterar tema para a lua:
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }

// ================= OBJETIVO 2 ====================
/* Quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudade pro modo-claro e mudar a imagem pro sol*/

})
