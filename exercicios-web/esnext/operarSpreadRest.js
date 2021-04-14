//operador ... rest(juntar)/ spread(espalhar)
// usar rest com paramentro de funcao

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12000.00}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['Maria', ...grupoA, 'rafaela']
console.log(grupoFinal)