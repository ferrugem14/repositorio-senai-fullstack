// Criando o objeto jogador
let jogador = {
  nickname: "Bielzera",
  nivel: 1,
  moedas: 100,
  energia: 50,
  premium: false
};

// Status inicial
console.log("=== STATUS INICIAL ===");
console.log("Jogador:", jogador.nickname);
console.log("Nível:", jogador.nivel);
console.log("Moedas:", jogador.moedas);
console.log("Energia:", jogador.energia);
console.log("Premium:", jogador.premium);

// Alterações (evolução do jogador)
jogador.nivel = 2;        // subiu de nível
jogador.moedas = 70;      // gastou ou comprou algo
jogador.energia = 35;     // perdeu energia
jogador.premium = true;   // virou premium

// Status final
console.log("\n=== STATUS FINAL ===");
console.log("Jogador:", jogador.nickname);
console.log("Nível:", jogador.nivel);
console.log("Moedas:", jogador.moedas);
console.log("Energia:", jogador.energia);
console.log("Premium:", jogador.premium);