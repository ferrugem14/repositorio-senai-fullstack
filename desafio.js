let nome = "João";
let peso = 80; //kg
let altura = 1.80; //metros

let imc = peso / (altura*altura);
let classificacao; 

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.5) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc <= 29.9){
    classificacao = "Acima do peso";
} else {
    classificacao = "Obesidade";
}



console.log("nome:", nome)
console.log("peso:", peso)
console.log("altura:", altura)
console.log("IMC:", imc)
console.log("classificacao:", classificacao)
