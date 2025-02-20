// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar o nome do amigo à lista
function adicionarAmigo() {
    // Pega o valor digitado no campo de texto
    const nomeAmigo = document.getElementById("amigo").value.trim();
    
    // Verifica se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    // Adiciona o nome à lista
    amigos.push(nomeAmigo);

    // Limpa o campo de texto
    document.getElementById("amigo").value = "";

    // Atualiza a lista de amigos visível
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    // Pega o elemento da lista onde os amigos vão aparecer
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpa a lista antes de atualizar
    listaAmigos.innerHTML = "";

    // Para cada nome na lista de amigos, cria um item na lista HTML
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se a lista de amigos está vazia
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear!");
        return;
    }

    // Sorteia um número aleatório com base no tamanho da lista de amigos
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Pega o nome sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o nome sorteado
    mostrarResultado(amigoSorteado);
}

// Função para exibir o nome sorteado na tela
function mostrarResultado(amigoSorteado) {
    const resultado = document.getElementById("resultado");

    // Limpa o resultado anterior
    resultado.innerHTML = "";

    // Cria um novo item de lista com o resultado
    const li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    
    // Adiciona o item na lista de resultados
    resultado.appendChild(li);
}
