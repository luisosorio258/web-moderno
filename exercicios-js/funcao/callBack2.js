const notas = [8, 4, 5, 6.6, 2, 9, 9.8]

// Sem callback
const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota <=7
})

console.log(notasBaixas2)

const notasMenor = nota => nota <7
const notasBaixas3 = notas.filter(notasMenor)
console.log(notasBaixas3)