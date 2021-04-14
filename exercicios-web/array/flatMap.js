const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Luis',
        nota: 8.1
    }, {
        nome: 'Lilian',
        nota:9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Jubileu',
        nota: 8.9
    }, {
        nome: 'Juditi',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatmap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatmap(getNotasDaTurma)
console.log(notas2)