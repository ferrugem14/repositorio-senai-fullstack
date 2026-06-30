class carro {
   constructor(modelo, cor, ano) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }
    mostrarCarro() {
        console.log(`Modelo: ${this.modelo}, Cor: ${this.cor}, Ano: ${this.ano}`);
    }
}
    let carro1 = new carro(
        "Fusca",
         "Rosa",
          2000);
    carro1.mostrarCarro();