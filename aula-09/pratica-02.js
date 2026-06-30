let mouse = {
     nome: "Mouse",
     preco: 50,
     quantidade: 4,


     calcularTotal: function() {
         return this.preco * this.quantidade;
     }
};


console.log(mouse.nome);
console.log("↓VALOR↓");
console.log(mouse.preco);
console.log(mouse.quantidade);
console.log(mouse.calcularTotal());