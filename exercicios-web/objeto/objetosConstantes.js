//pessoa -> 123 -> {...}
const pessoa = {nome: 'Luis'}
pessoa.nome = 'Joao'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'jose'})
pessoaConstante.nome = 'josyscleiton'
console.log(pessoaConstante)