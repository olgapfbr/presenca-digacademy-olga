// Exercício 2
// Crie um array chamado listaDeTarefas que será usado para guardar as tarefas que o usuário adicionar.
// Crie uma função chamada adicionarTarefa().
// Pense: 
// 1) De quais parâmetros essa função precisa para funcionar?
// 2) O que deve acontecer no corpo da função para que a nova tarefa seja incluída na lista?
// Depois, teste seu código:
// 1) Adicione pelo menos uma tarefa usando a função.
// 2) Mostre a lista completa no console para verificar se deu certo.

let listaDeTarefas = []
function adicionarTarefa(item) {
    listaDeTarefas.push(item)
}

adicionarTarefa("Criar projeto")
adicionarTarefa("Incluir arquivos")

console.log(listaDeTarefas)