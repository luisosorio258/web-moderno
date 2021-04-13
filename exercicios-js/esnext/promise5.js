function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('ERRO!!!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('teste.....', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('FIM'))
