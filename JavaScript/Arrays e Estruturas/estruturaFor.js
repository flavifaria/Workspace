// Cria um array vazio para armazenar as notas
const notas = [];

// Adiciona valores numéricos ao array de notas
notas.push(5);
notas.push(7);
notas.push(4);
notas.push(10);

// Inicializa uma variável para a soma das notas
let soma = 0;

// Loop que percorre o array de notas
for (let i = 0; i < notas.length; i++) {
    // Obtém cada nota do array
    const nota = notas[i];
    // Soma cada nota ao valor atual de 'soma'
    soma = soma + nota;
}

// Calcula a média das notas dividindo a soma pelo número total de notas
const media = soma / notas.length;

// Imprime a média das notas no console
console.log(media);