const produto = new Object
produto.nome = 'cadeira'
produto['marca'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca']
console.log(produto)









const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Luís',
        idade: 25,
        endereco: {
            rua: 'rua 1',
            nuemro: 1,
        }
    },
    condutores: [{
        nome: 'Lilian',
        idade: 24
    }, {
        nome: 'Irineu',
        idade: 00
    }],
    calcularSeguro: function(){
        //.....
    }
}

carro.proprietario.endereco.nuemro = 1000
carro['proprietario']['endereco']['rua'] = 'av 2'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)