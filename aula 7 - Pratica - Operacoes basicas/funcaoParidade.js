// function ehPar(num) {
//    return num % 2 == 0
//}

//let x = 2
//let y = 5
//console.log(ehPar(y))
// posso declarar o x e o y antes ou depois da função, mas se definir dentro dela, só dentro dela a variável vai ser connhecida
// a função é algo que posso usar globalmente

// Função com if-else dentro

function paridade(num) {
    if (num % 2 === 0) {
        console.log("é par")
    } else {
        console.log("é ímpar")
    }
}

paridade(22)