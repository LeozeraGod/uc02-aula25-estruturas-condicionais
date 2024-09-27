//Faça um programa que obtenha quatro notas de um aluno 
// Em seguida, calcule a média simples das notas;
// Se a média dor maior ou igual a 7, Imprima "Aluno Aprovado"
// Senão se a nota for maior ou igual a 5, "Aluno em Recuperação"
// Senão, imprima "Aluno Reprovado"


//ENTRADA 
 const nota1 = Number(prompt("Informe a primeira nota")) 
 const nota2 = Number(prompt("Informe a segunda nota")) 
 const nota3 = Number(prompt("Informe a terceira nota")) 
 const nota4 = Number(prompt("Informe a quarta nota"))
 
 
 //PROCESSAMENTO 
const media = (nota1 + nota2 + nota3 + nota4 ) / 4

let mensagem = ""

//SE a media é maior ou igual a 7, aluno aprovado 
//senão se a média for maior ou igual a 5, aluno em recuperação 
//senão, aluno reprovado 

 if (media >= 7) {
    mensagem = "Aluno Aprovado - MÉDIA: " + media
 } else {
    if (media >= 5) {
        mensagem = "Aluno em Recuperação: - MÉDIA " + media
    }else {
        mensagem = "Aluno Reprovado - MÉDIA: " + media
    }
 }
 document.body.appendChild(document.createTextNode(mensagem))