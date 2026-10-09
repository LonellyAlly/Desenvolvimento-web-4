# Manipulação de Arrays, DOM e Eventos em JavaScript (Sprint 4)

Este projeto aplica na prática as principais ferramentas do JavaScript moderno (ES6+) para manipulação estruturada de dados (Arrays), interação com a interface da página (DOM) e resposta a ações do usuário (Eventos).

## 🗃️ Manipulação de Arrays (High-Order Functions)
Para percorrer e transformar as listas de dados, abandonamos o `for` clássico e adotamos os métodos modernos de arrays:
- **`forEach()`**: Utilizado para iterar sobre os elementos e executar uma ação (como imprimir no console ou criar elementos HTML), sem retornar nada.
- **`map()`**: Utilizado para transformar dados. Ele pega um array original e retorna um **novo array** com o mesmo tamanho, mas com os dados modificados (ex: pegar apenas os nomes dos objetos).
- **`filter()`**: Avalia uma condição para cada elemento. Retorna um **novo array** contendo apenas os elementos que passaram no teste (ex: preços menores que 50).
- **`reduce()`**: Acumula valores em cada iteração, reduzindo o array a um **único valor** final (ex: somar todos os preços de um carrinho).

## 🎨 Manipulação do DOM
O *Document Object Model* (DOM) nos permite alterar a página dinamicamente:
- **`querySelector` / `querySelectorAll`**: Foram utilizados para capturar elementos específicos na tela utilizando sintaxe CSS (`#id`, `.classe`).
- **`createElement` e `append`**: Usados em conjunto para fabricar novas *tags* HTML puramente via JavaScript (ex: novos `<li>`) e injetá-las de forma segura no final da lista.
- **`classList`**: Permite gerenciar as classes CSS dos elementos. Usamos `.add()` para forçar estilos em elementos novos e `.toggle()` para criar um comportamento de liga/desliga (marcar item como feito/não feito).

## ⚡ Eventos e Event Delegation (Delegação de Eventos)
Um dos conceitos mais importantes aplicados no projeto foi a **Event Delegation**.
Ao invés de atrelar um `addEventListener('click')` individual para cada `<li>` da nossa lista, colocamos um único ouvinte na `<ul>` (pai). 

**Por que isso é importante?**
1. **Performance:** Apenas 1 *listener* é criado na memória, mesmo que a lista tenha milhares de itens.
2. **Escalabilidade (Elementos Dinâmicos):** Como usamos o `e.target.tagName === 'LI'`, qualquer novo `<li>` adicionado à lista via formulário **herda automaticamente** o comportamento do clique sem precisarmos configurar eventos adicionais. 

Além disso, utilizamos `e.preventDefault()` no formulário para evitar que o envio padrão recarregasse a página e limpasse nosso estado no navegador.
