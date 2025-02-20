//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Vai armazenar os nomes que o usuário adicionar
let amigos = [];

// Função para adicionar um nome na lista
function adicionarNome() {
    // Pega o valor que foi digitado no campo de texto
    let nome = document.getElementById("nomeInput").value;

    // Verifica se o nome está vazio
    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nome);

    // Limpa o campo de texto
    document.getElementById("nomeInput").value = "";

    // Atualiza a lista de amigos na tela
    mostrarListaAmigos();
}

// Função para mostrar a lista de amigos na tela
function mostrarListaAmigos() {
    // Pega o elemento onde vamos mostrar a lista
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista antes de atualizar
    lista.innerHTML = "";

    // Para cada nome na lista de amigos, cria um item na lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Se não houver amigos, não faz nada
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear!");
        return;
    }

    // Sorteia um número aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Pega o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na tela
    document.getElementById("resultado").textContent = "O amigo secreto é: " + amigoSorteado;
}
