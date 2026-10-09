// ==========================================
// BLOCO 1 – Arrays e Métodos
// ==========================================
console.log("--- BLOCO 1: Arrays ---");

// 1. Array de nomes (forEach e map)
const nomes = ["Ana", "Bruno", "Carlos"];
nomes.forEach(nome => console.log(`Olá, ${nome}!`));

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas (map):", nomesMaiusculos);

// 2. Array de preços (filter e reduce)
const precos = [10, 25, 40, 5, 60];
const precosAcimaDe20 = precos.filter(preco => preco > 20);
console.log("Preços acima de 20 (filter):", precosAcimaDe20);

const somaPrecos = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log("Soma total dos preços (reduce):", somaPrecos);

// 3. Array de objetos produtos
const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 120 },
    { nome: "Caneta", preco: 5 },
    { nome: "Estojo", preco: 35 }
];

const nomesProdutos = produtos.map(produto => produto.nome);
console.log("Apenas nomes dos produtos (map):", nomesProdutos);

const produtosBaratos = produtos.filter(produto => produto.preco < 50);
console.log("Produtos com preço menor que 50 (filter):", produtosBaratos);

const somaProdutos = produtos.reduce((acc, produto) => acc + produto.preco, 0);
console.log("Soma dos preços dos produtos (reduce):", somaProdutos);

produtos.forEach(produto => console.log(`Nome: ${produto.nome} | R$ ${produto.preco}`));


// ==========================================
// BLOCO 2 – Manipulação do DOM
// ==========================================
console.log("\n--- BLOCO 2: DOM ---");

// 1. Alterar texto do h1
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Guilherme"; // Personalizado com seu nome

// 2. Selecionar parágrafos e imprimir
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => console.log("Texto do parágrafo:", p.textContent));

// 3. Inserir 2 itens com innerHTML (usando += para não apagar os 3 itens do HTML)
const lista = document.querySelector("#lista");
lista.innerHTML += "<li>Item inserido via innerHTML 1</li><li>Item inserido via innerHTML 2</li>";

// 4. Criar um <li> com createElement e append
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item (via createElement)";
lista.append(terceiroItem);

// 5. classList.add e classList.contains
terceiroItem.classList.add("destaque");
console.log("O item tem a classe 'destaque'?", terceiroItem.classList.contains("destaque"));

// 6. Array de tarefas no DOM
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach(tarefa => {
    const li = document.createElement("li");
    li.textContent = tarefa;
    lista.append(li);
});

// Adicionando a classe 'feito' ao primeiro <li> da lista
const primeiroLi = document.querySelector("li"); // Pega o primeiro que encontrar no documento
primeiroLi.classList.add("feito");

// Contagem total de LIs
const totalLis = document.querySelectorAll("li").length;
console.log("Quantidade total de itens <li> na tela:", totalLis);


// ==========================================
// BLOCO 3 – Eventos e Event Delegation
// ==========================================
console.log("\n--- BLOCO 3: Eventos ---");

// 1. Click no botão
const botao = document.querySelector("#botao");
botao.addEventListener("click", () => {
    console.log("Clicou!");
});

// 2. Mouseover no botão
botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});

// 3. Keyup no campo nome
const inputNome = document.querySelector("#nome");
inputNome.addEventListener("keyup", (e) => {
    console.log("Valor atual do input:", e.target.value);
});

// 4. Event Delegation na #lista
// Adicionamos apenas UM listener na UL (Pai). Ele escuta cliques em qualquer filho.
lista.addEventListener("click", (e) => {
    // Verifica se o elemento clicado foi realmente um LI
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log("Item clicado:", e.target.textContent);
    }
});

// 5. Listener de Submit do Formulário
const formulario = document.querySelector("#formulario");
const inputTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o recarregamento da página

    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa !== "") {
        const novoLi = document.createElement("li");
        novoLi.textContent = textoTarefa;
        lista.append(novoLi);
        
        // Limpa o input após adicionar
        inputTarefa.value = "";
        
        console.log(`Nova tarefa adicionada: "${textoTarefa}". Tente clicar nela na tela!`);
    } else {
        console.log("O campo não pode estar vazio.");
    }
});
