let idade = 16;
let temIngresso = true;
let ehAlunoSENAI = true;
let horaChegada = 19;
let vagasDisponiveis = 5;
let codigoIngresso = "PADRAO";

let decisaoFinal = "";

// Verificação de entrada
if (idade < 14) {
    decisaoFinal = "Entrada negada: idade mínima não atingida.";
} else if (!temIngresso) {
    decisaoFinal = "Entrada negada: é necessário comprar ingresso.";
} else if (vagasDisponiveis <= 0) {
    decisaoFinal = "Entrada negada: evento lotado.";
} else if (horaChegada > 20) {
    decisaoFinal = "Entrada negada: entrada encerrada.";
} else {
    decisaoFinal = "Entrada liberada.";
}

// Tipo de ingresso
switch (codigoIngresso) {
    case "VIP":
        console.log("Ingresso VIP.");
        break;

    case "PADRAO":
        console.log("Ingresso Padrão.");
        break;

    case "CONVIDADO":
        console.log("Ingresso de Convidado.");
        break;

    default:
        console.log("Tipo de ingresso inválido.");
}

// Benefício para aluno SENAI
if (ehAlunoSENAI && codigoIngresso === "PADRAO") {
    console.log("Benefício SENAI aplicado ao ingresso padrão.");
}

// Resultado
console.log(decisaoFinal);

console.log("----- RESUMO -----");
console.log("Idade:", idade);
console.log("Tipo de ingresso:", codigoIngresso);
console.log("Decisão final:", decisaoFinal);