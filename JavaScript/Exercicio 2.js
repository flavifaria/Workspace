/*
Calcule o IMC = peso /(altura*altura)
- 18,5 Abaixo do peso
-Abaixo de 17	Muito abaixo do peso
-Entre 17 e 18,49	Abaixo do peso
-Entre 18,5 e 24,99	Peso normal
-Entre 25 e 29,99	Acima do peso
-Entre 30 e 34,99	Obesidade I
-Entre 35 e 39,99	Obesidade II (severa)
-Acima de 40	Obesidade III (mórbida)
*/ 

console.log("***CALCULADORA DE IMC ***")

const peso =50.5;
const altura = 1.70;

const imc = peso/(altura * altura);

if (imc < 17) {
    console.log("Muito abaixo do peso!")
} else if(imc >= 17 && imc<= 18){
    console.log("Abaixo do peso!")
    }if (imc > 18 && imc <= 25) {
        console.log("Peso normal!")
        } else if(imc >= 26 && imc<= 29){
                 console.log("Acima do peso!")
                     }if (imc > 30) {
                        console.log("Obesidade!")
                    } 