/*Calculo de preço de produto 

1 - Débito a vista 10% de desconto;
2 - Dinheiro ou pix 15% de desconto;
3 - 2 x sem juros;
4 - 3x ou mais juros de 10%;

*/

function aplicarDesconto(valor0 , desconto){
    return (valor-(valor * (desconto/100)));
}
function aplicarJuros(valor0 , juros){
    return (valor+(valor * (juros/100)));
}



const valor = 100;
let formaPagamento = 2;

function main(){
    if(formaPagamento === 1){
        console.log(aplicarDesconto(valor,10));
    }else if(formaPagamento === 2){
        console.log(aplicarDesconto(valor,15));
    }else if(formaPagamento === 3){
        console.log(valor);
    }else if(formaPagamento === 4){
        console.log(aplicarJuros(valor,10));
    }
}


function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

console.log(calcularMedia(5, 5));