
//? Crie um programa, que leia dois valores numericos do usuário e em seguida calcule a sua soma.
//? Em seguida, valide se o resultado da soma for > 18, exiba a mensagem "Maior de Idade"
//? Senão escreva a mensagem "Menor de Idade"



//ENTRADA 
//! 1- Obter um valor em guardar uma variável chamada valor1
//! 2- Obter um valor em guardar uma variável chamada valor2

const valor1 = Number(prompt("Primeiro Valor"));
const valor2 = Number(prompt("Segundo  Valor"));
console.log(valor1, valor2);

//PROCESSAMENTO 
//! 3- Somar os valore das variáveis valor1 e valor2 e guardar em uma variável chamada resultado

const resultado = valor1 + valor2;
console.log(resultado);
//! 4- Validar se o resultado da soma for maior que 18 e escrever a mensagem "Maior de Idade"
let mensagem = ""

if (resultado > 17) {
    mensagem = "Maior de Idade"

//! Senão, escrever a mensagem "Menor de Idade"
} else {
    mensagem = "Menor de Idade"
}


const percentual = (valor1 * 0.10) / valor2

//!Se o percentual for maior ou igual a 10 
//!então, mude a mensagem para o Percentual OK
//!senão, mude a mensagem para Percentual Alterado 

if (percentual >= 10) {
    mensagem = "Percentual ok"
} else {
    mensagem = "Percentual Alterado"
}







//SAÍDA
//! Imprimir a mensagem de acordo 
const divRoot = document.getElementById("root")
divRoot.appendChild(document.createTextNode(mensagem))