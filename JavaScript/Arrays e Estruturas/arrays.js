const alunos = ["João","Maria","José"];
console.log(alunos);

alunos.push("Thomas");
console.log(alunos);

alunos[3] ="Boris";
console.log(alunos);

console.log(alunos.pop());


console.log("_________________________________");

const notas = [];

notas.push(5);
notas.push(7);
notas.push(4);
notas.push(10);

const soma = notas[0] + notas[1] + notas[2] + notas[3] ;

console.log(soma/notas.length);