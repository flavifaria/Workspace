/*Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 -100.
Faça um programa que receba os 5 números para os alune e mostro o maior número sorteado .

Dados de entrada :
5
50
10
98
23


Saída :
98

*/ 

const {get , print} = require("./funcoesAuxiliares");


let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = get();
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
    
}

print(maiorValor);