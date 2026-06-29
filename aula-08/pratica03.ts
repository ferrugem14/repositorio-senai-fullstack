function calcularDesconto(preço, desconto) {
    let valorDesconto = preço * (desconto / 100);
    let preçoFinal = preço - valorDesconto;
    return preçoFinal;
}
console.log(calcularDesconto(100, 50)); // 50
console.log(calcularDesconto(300, 20)); // 240 