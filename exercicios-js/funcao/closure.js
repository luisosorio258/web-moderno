// closure é o escopo criado quando uma função é declarada
// esse escopo permite a função a acessar e manipular as variaveis externas a função

// contexto lexico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())