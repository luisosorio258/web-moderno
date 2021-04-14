const escola = "Cod3r"

console.log(escola.charAt(4))//pegar determinado caracter dentro da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))// codigo do caracter da string
console.log(escola.indexOf('3'))//indice do caracter

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))// concatenando
console.log('Escola ' + escola + "!")// concatenando
console.log(escola.replace(3, 'e'))
console.log('Ana,Maria,Pedro'.split(','))