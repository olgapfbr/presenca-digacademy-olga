// João está colhendo maçãs. Ele colheu maçãs por 7 dias. Cada dia, ele conta quantas colheu.
// Imprima quantas maçãs João colheu em cada dia.

// para dia de 1 a 7 faça
//    perguntar quantas maçãs João colheu no dia
//    imprimir "No dia [dia], João colheu [qtd] maçã"
// fim para

const prompt = require("prompt-sync") {
    for (let dia = 1; dia <= 7; dia++) 
        let quant = prompt(`Quantas maçãs João colheu no dia ${dia}?`);
        console.log(`No dia ${dia}, João colheu ${quant} maçãs.`);
} 