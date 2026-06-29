function calcularMedia(nota1: number, nota2: number, nota3: number): number {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

function verificarSituacao(media: number): string {
    if (media >=7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}
function exibirBoletim(nome: string, media: number, situacao: string): void {
    console.log("Aluno:", nome);
    console.log("Média:", media);
    console.log("Situação:", situacao);
}


exibirBoletim("Fernanda", calcularMedia(8, 9, 9), verificarSituacao(calcularMedia(8, 9, 9)));