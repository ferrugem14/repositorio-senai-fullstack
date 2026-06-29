function verificarMaioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log(verificarMaioridade(19));
console.log(verificarMaioridade(13));