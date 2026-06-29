function calcularDesconto(preco: number, desconto: number): number {
    let valorDesconto = preco * (desconto / 100);
    let precoFinal = preco - valorDesconto;
    return precoFinal;
}
console.log(calcularDesconto(100, 50)); // 50
console.log(calcularDesconto(300, 20)); // 240