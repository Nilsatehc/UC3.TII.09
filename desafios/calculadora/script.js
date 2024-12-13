const display = document.getElementById("dis");
const buttons = document.querySelectorAll(".botao");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("x");

// Função para usar a lista de botões marcados com a classe 'btn'
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        // atualiza o display numérico com os valores dos botões
        display.value += btn.getAttribute("data-value");
    })
});

clearButton.addEventListener("click", () => {
    display.value = "";
});

equalsButton.addEventListener("click", () => {
    // o valor do display utiliza a função eval()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
    // Essa função executa uma string como código JavaScript
    display.value =  eval(display.value);
});