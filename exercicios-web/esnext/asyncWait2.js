function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros) {
    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()) {
        numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        throw " OPA"
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)