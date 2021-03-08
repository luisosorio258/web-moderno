//par nome/valor
const saudacao = 'opa' //contexto léxico 1

function exec(){
    const saudacao = 'Falaa' //contexto léxico 2
    return saudacao
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Luis',
    idade: 25,
    peso: 90,
    endereco: {
        logradouro: 'Rua',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)