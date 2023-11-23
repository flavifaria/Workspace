/*Boolean
 -Igualdade ===
 -Calculo de valor da viagem    
 1-Preço do Etanol
 2-Preço da Gasolina
 3-O tipo de combustivel do seu carro
 4-Gasto medio do combustivel do carro por Km
 5-Distancia Km da viagem
*/ 

const precoEtanol = 3.92;
const precoGasolina = 5.33;
const kmPorLitro = 10;
const distancia = 100;

const tipoDeCombustivel = "gasolina";
const litrosConsumidos  = distancia/kmPorLitro ;

if (tipoDeCombustivel === "etanol"){
    const gasto =litrosConsumidos * precoEtanol;
    console.log("R$", gasto.toFixed(2));
}else if(tipoDeCombustivel === "gasolina"){
    const gasto = litrosConsumidos * precoGasolina;
    console.log("R$" , gasto.toFixed(2));
}else{ 
    console.log("Tipo de combustivel inválido !")
}
