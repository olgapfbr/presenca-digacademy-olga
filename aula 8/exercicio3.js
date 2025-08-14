// Faça um script que pergunte em que turno você estuda.
// Receba um valor para turno como M-matutino, V-vespertino ou N-noturno.
// Imprima a mensagem "Bom dia!", "Boa tarde!" ou "Boa noite" ou "Valor inválido!", conforme o caso.

var turno = prompt("Em qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno.");

if (turno == M) {
    console.log("Bom dia!")
    }

if (turno == V) {
    console.log("Boa tarde!")
    }

if (turno == N) {
    console.log("Boa noite!")
    }

else {
    console.log("Valor inválido.")
    }