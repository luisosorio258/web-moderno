function tratarErroELancar(erro){
    //throw new Error("IRINEU")
   // throw 10
   //throw true
   //throw 'message'
   throw{
       nome: erro.name,
       msg: erro.message,
       date: new Date
   }
}


function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally{
        console.log('final')
    }
}

const obj = {name: 'Luis'}
imprimirNomeGritado(obj)