// novo recusrso do es2015

const pessoa = {
    nome: 'Luis',
    idade: 25,
    endereco: {
        logradouro: 'rua',
        numero: 123
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobrenome, oi = true} = pessoa
console.log(sobrenome, oi)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

