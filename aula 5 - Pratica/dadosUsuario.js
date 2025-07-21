const nome = "Luiz Otavio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const altura = 1.80;
let anoAtual = 2024;

const IMC = peso / (altura * altura);
const anoNasc = anoAtual - idade;

console.log(`${nome}${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`Ele tem ${altura}m de altura, e o IMC dele é de ${IMC}.`);
console.log(`${nome.split("z")[0].toLowerCase()} ${sobrenome.toLowerCase()} nasceu em ${anoNasc}.`);
// se eu quiser que ele divida no espaço, coloco ${nome.split(" ")
