function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook', 1999.99))
console.log(criarProduto('celular', 999.99))