let valorCompra = 180;
let temCupom = true;
let ehAlunoSENAI = false;
let formaPagamento = "pix";

// Constantes
const FRETE = 20;
const DESCONTO_CUPOM = 0.10;
const DESCONTO_PIX = 0.05;
const DESCONTO_BOLETO = 0.02;

let valorFinal = valorCompra;
let descontoAplicado = 0;

// Desconto por cupom ou aluno SENAI
if (temCupom || ehAlunoSENAI) {
    let desconto = valorCompra * DESCONTO_CUPOM;
    descontoAplicado += desconto;
    valorFinal -= desconto;
}

// Forma de pagamento
switch (formaPagamento) {
    case "pix":
        let descontoPix = valorFinal * DESCONTO_PIX;
        descontoAplicado += descontoPix;
        valorFinal -= descontoPix;
        break;

    case "boleto":
        let descontoBoleto = valorFinal * DESCONTO_BOLETO;
        descontoAplicado += descontoBoleto;
        valorFinal -= descontoBoleto;
        break;

    case "credito":
        break;

    default:
        console.log("Forma de pagamento inválida.");
        break;
}

// Frete
let frete = valorFinal >= 200 ? 0 : FRETE;

// Total a pagar
let totalPagar = valorFinal + frete;

// Exibição
console.log("Valor original: R$ " + valorCompra.toFixed(2));
console.log("Desconto aplicado: R$ " + descontoAplicado.toFixed(2));
console.log("Frete: R$ " + frete.toFixed(2));
console.log("Total a pagar: R$ " + totalPagar.toFixed(2));