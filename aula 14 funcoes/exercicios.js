// Exercício 1
// Crie uma função que receba dois números e uma operação matemática ("+", "-", "*", "/")
// e retorne o resultado da operação entre os dois números.

function calcular (a, b, operacao) {
    if (operacao === "+" ) {
        return a + b;
    } else if (operacao === "-") {
        return a - b;
    } else if (operacao ===  "*" ) {
        return a * b;
    } else if (operacao ===  "/" ) {
        return a / b;
    } else {
        return "Operação inválida" ;
    }
}
