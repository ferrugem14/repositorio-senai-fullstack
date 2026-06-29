// Criando o objeto produto
let produto = {
  nome: "Teclado",
  preco: 120,
  estoque: 10,
  disponivel: true,
  categoria: "Periféricos"
};

// Exibindo o produto antes das alterações
console.log("=== PRODUTO ANTES DA VENDA ===");
console.log("Produto:", produto.nome);
console.log("Categoria:", produto.categoria);
console.log("Preço: R$", produto.preco);
console.log("Estoque:", produto.estoque);
console.log("Disponível:", produto.disponivel);

// Alterando o preço (desconto)
produto.preco = 99.90;

// Alterando o estoque (venda)
produto.estoque = 9;

// Verificando a disponibilidade
if (produto.estoque === 0) {
  produto.disponivel = false;
}

// Exibindo o produto depois das alterações
console.log("\n=== PRODUTO APÓS ALTERAÇÃO ===");
console.log("Produto:", produto.nome);
console.log("Categoria:", produto.categoria);
console.log("Novo preço: R$", produto.preco);
console.log("Novo estoque:", produto.estoque);
console.log("Disponível:", produto.disponivel);

// Respostas:
// 1) A propriedade que guarda o nome do produto é: nome.
// 2) A propriedade alterada para representar o desconto é: preco.
// 3) A propriedade alterada para representar a venda é: estoque.