
console.log("***CALCULADORA DE IMC ***")

function calcularImc (peso,altura){
    return peso / Math.pow(altura,2);
}

//main
(function (){
    function classificarImc(imc){
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
    
    const peso =70.5;
    const altura = 1.70;
    
    const imc = calcularImc(peso ,altura);
    console.log(classificarImc(imc));
    
})();

