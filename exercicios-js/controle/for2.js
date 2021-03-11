const notas = [6, 7, 9, 8, 7]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Luís',
    Sobrenome: 'Osório',
    idade: 25,
    peso: 90
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

