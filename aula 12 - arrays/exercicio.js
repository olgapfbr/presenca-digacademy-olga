// Criar um array com 5 números diferentes e imprimir todos.
// Calcular a soma e a média dos elementos de um array.
// Encontrar os números maior e menor de um array.
// Crie um array de 5 números sem declarar diretamente na variável (usando for)

let numbers = [10, 20, 30, 40, 50]
let sum = (numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4])
let media = ((numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4])/numbers.length)

console.log(sum)
console.log(media)

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log("Sum of array elements = " + sum)

let average = sum / numbers.length
console.log(average)



