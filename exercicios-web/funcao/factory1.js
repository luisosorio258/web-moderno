/*const prod1 = {
    nome: '..'
    preco: 45
}

const prod2 = {
    nome: '...'
    preco: 453
}*/

//Factory simples
function criarPessoa(){
    return {
        nome: 'Luís',
        idade: 25
    }
}

console.log(criarPessoa())