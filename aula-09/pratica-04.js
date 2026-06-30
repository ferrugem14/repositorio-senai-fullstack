class Aluno {
    constructor(nome, nota1, nota2) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

calcularMedia() {
    return (this.nota1 + this.nota2) / 2;
}

verificarSituacao() {
    if (this.calcularMedia() >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
    }

    exibirInformacoes() {
        console.log("Nome: " + this.nome);
        console.log("Média: " + this.calcularMedia());
        console.log("Situação: " + this.verificarSituacao());
    }
}
      
    
    //criando os alunos
    let aluno1= new Aluno("Davi", 6, 7);
    let aluno2= new Aluno("Gustavo", 3, 6);
    let aluno3= new Aluno("Fernanda", 10, 10);
    
    aluno1.exibirInformacoes();
    aluno2.exibirInformacoes();
    aluno3.exibirInformacoes();
console.log("--------------------------------------------------");
    //Extra: usando for...of
    let alunos = [aluno1, aluno2, aluno3];
    console.log("Lista de alunos:");
    for (let aluno of alunos) {
        aluno.exibirInformacoes();
    }
