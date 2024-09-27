// Escreva  um programa que diga se o numero informado pelo usuário é Par ou Impar 
// Imprima o numero e o resultado 

const divRoot = document.getElementById("root")

const numero = Number(prompt('Informe o Numero:'))

const resto = numero % 2

console.log(resto)

let mensagem = ""

if (resto === 0) {
    mensagem = `${numero} E PAR`
} else {
    mensagem =  `${numero} E INPAR`
}

divRoot.appendChild(document.createTextNode(mensagem))