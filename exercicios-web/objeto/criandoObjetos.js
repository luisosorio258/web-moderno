// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
//console.log(typeof Object, typeof new Object)
const  obj2 = new Object
console.log(obj2)



// Funçao construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Carro', 55.999, 0.15)
const p2 = new Produto('Monitor', 799.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


// Fução factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Luís', 1903, 4)
const f2 = criarFuncionario('Lilian', 1700, 1)
console.log(f1.getSalario(), f2.getSalario())


// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "OEEE"}')
console.log(fromJSON.info)

