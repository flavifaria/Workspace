/*Calculo de preço de produto 

Débito a vista 10% de desconto
Dinheiro ou pix 15% de desconto
2 x sem juros 
3x ou mais juros de 10%

*/

const valor = 1500;
var formaPagamento = "pix";

if(formaPagamento === "debito"){
    const valor1 = (1500 * 10) /100 ;
    console.log(valor - valor1);
}else if(formaPagamento === "dinheiro"){
    const valor1 = (1500 * 15) /100 ;
    console.log(valor - valor1);
}else if(formaPagamento === "2x"){
    console.log(valor);
}else if(formaPagamento === "pix"){
    const valor1 = (1500 * 15) /100 ;
    console.log(valor - valor1);
}else{
    const valor1 = (1500 * 10) /100 ;
    console.log(valor + valor1);
}