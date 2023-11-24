/*1 - Crie uma classe pra representar carros 
Marca 
Cor  
Gasto médio por Kilometro rodadados
Crie um Método para calcular o prço do combustivel gasto em uma viagem*/


class Carros{

    constructor(marca,modelo,kmLitro){
        this.marca = marca;
        this.modelo = modelo;
        this.kmLitro = kmLitro;
    };

calcularGasto(distancia,precoCombustivel){
    return distancia * this.kmLitro * precoCombustivel ;
}
    
};

const uno = new Carros ("Fiat","Prata",1/12)
console.log(uno)
console.log(uno.calcularGasto(70,5).toFixed(2));

const palio = new Carros ("Fiat","Branco",1/10)
console.log(palio)
console.log(palio.calcularGasto(70,5).toFixed(2));

const crossFox = new Carros ("Chevrolet","Preto",1/6)
console.log(crossFox)
console.log(crossFox.calcularGasto(70,5).toFixed(2));