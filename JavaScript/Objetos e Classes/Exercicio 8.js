/*Crie uma classe para representar pessoas 
-peso
-altura
-nome
Valor do imc */

class Pessoas{

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    };

    calcularImc(){
        return this.peso / (this.altura*this.altura);
        
    }
    classificarImc(){

        const imc = this.calcularImc();

        if (imc < 17) {
            return("Muito abaixo do peso!")
        } else if(imc >= 17 && imc<= 18){
                return("Abaixo do peso!")
            }if (imc > 18 && imc <= 25) {
                return("Peso normal!")
                } else if(imc >= 26 && imc<= 29){
                         return("Acima do peso!")
                             }if (imc > 30) {
                                return("Obesidade!")
                            } 
    }   
};



const jose = new Pessoas ("Jose",70.5,1.70);
console.log(jose);
console.log(jose.calcularImc().toFixed(2));
console.log(jose.classificarImc())

const mario = new Pessoas ("Mario",97.53,1.67);
console.log(mario);
console.log(mario.calcularImc().toFixed(2));
console.log(mario.classificarImc())