
const numeros = [5,50,10,98,23,]
let i = 0 ;

function get(){
    const valor = numeros [i];
    i++;
    return valor;
};

function print(texto){
    console.log(texto);

}

module.exports = {get , print} ;