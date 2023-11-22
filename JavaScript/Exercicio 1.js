/*Faça um algoritmo que calcule a média e imprima a classificação;
-Classificação;
1-menor que 5 : reprovação;
2-media entre 5 - 7 :recuperação;
3-media maior de 7 : aprovado;*/

const n1 = 1;
const n2 = 4;
const n3 = 5;

const media = (n1 + n2 + n3)/3;

if (media < 5){
    console.log("Reprovado!")
}if (media >=5 && media <= 7) {
    console.log("Recuperação!")
} 
else {
    console.log("Aprovado!")
}
console.log(media)