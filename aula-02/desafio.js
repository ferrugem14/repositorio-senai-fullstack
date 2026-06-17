let nome = "Fernanda";
let nota1 = 8;
let nota2 = 7;
let frequencia = 80;
let atividadesEntregues = true;
let estaBloqueado = false;

let media = (nota1 + nota2) / 2;

let aprovado = media >= 6 && frequencia >= 75 && atividadesEntregues === true;
let aprovadoDestaque = media >= 9 && frequencia >= 60;

let situacao;

if (estaBloqueado) {
    situacao = "Reprovado";
} else if (aprovadoDestaque) {
    situacao = "Aprovado por destaque";
} else if (aprovado) {
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
}

console.log("Nome:", nome);
console.log("Média:", media);
console.log("Frequência:", frequencia + "%");
console.log("Entregou as atividades?", atividadesEntregues);
console.log("Situação final:", situacao);