const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona um elemento na ultima posição do array
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um elemento na primeira posição do array
console.log(pilotos)

//splice pode adicionar e remover elementos dentro de um array

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //adicionando no indice 2 e nao removendo ninguem
console.log(pilotos)

//remover
pilotos.splice(3, 1) //remover um elemento de indice 3
console.log(pilotos)

//slice retorna um novo array apartir do indice colocado

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)