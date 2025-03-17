//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// Função para dicionar amigos
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo");
    let nome = nomeAmigo.value.trim();// Remove espaços em branco.

    // Validando a entrada

    if (nomeAmigo === "") {
        console.log("Por favor, digite um nome.");
    } else {
        alert("Por favor, digite um nome.");
    }    

    // Atualizando  o array de amigos
    amigos.push(nome); // Adiciona o nome ao array

    //Adicionando o amigo à lista na interface.
    let lista = document.getElementById("listaAmigos");
    let novoItem = document.createElement("li"); // Cria um novo item <li>
    novoItem.textContent = nome; // Define o texto do item como o nome.
    lista.appendChild(novoItem); // Adiciona o item à lista.

    // Limpando o campo de entrada
    nomeAmigo.value = ""; // Limpa o campo para a próxima entrada.
    nomeAmigo.focus(); // Foca de volta no campo de entrada.
} 


// (Opcional) Função para sortear amigo  
function sortearAmigo() {  
    if (amigos.length === 0) {  
        alert("Adicione amigos antes de sortear!");  
        return; // Sai se a lista estiver vazia  
    }  

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];  
    const resultadoLista = document.getElementById("resultado");  

    // Limpa a lista anterior e adiciona o sorteado  
    resultadoLista.innerHTML = ''; // Limpa resultados anteriores  
    const resultadoItem = document.createElement("li"); // Cria um novo item para o resultado  
    resultadoItem.textContent = amigoSorteado; // Define o texto do item como o amigo sorteado  
    resultadoLista.appendChild(resultadoItem); // Adiciona o resultado à lista de resultados  
}  

