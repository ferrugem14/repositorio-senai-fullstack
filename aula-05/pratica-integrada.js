let nomes = ["Fernanda", "Davi", "Gustavo", "Kethelyn", "Valentina"];
let notas = [10,5,2,0,10];
let frequencias = [90,65,10,0,100];


for (let i = 0; i < nomes.length; i++) {
    console.log("--------------------");
    console.log(`Aluno: ${nomes[i]}`);
    console.log(`Nota: ${notas[i]}`);
    console.log(`Frequencia: ${frequencias[i]}%`)

   if (notas[i] >= 7 && frequencias[i] >= 75) {
        console.log("Status: Aprovado");
    } else {
        console.log("Status: Reprovado");
    }
    console.log("--------------------");
}
    
let opcao = 1;
switch(opcao){
    case 1:
        console.log("Listando alunos...");
        break;
    case 2:
        console.log("Mostrando a média...");
        break;
    default:
        console.log("Opção inválida");
}
    

   