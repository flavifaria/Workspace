class Pessoas{

    constructor(nome,idade){
        this.nome = nome ;
        this.idade = idade;
    };


};


    function compararPessoas(p1 , p2){
        if (p1.idade > p2.idade){
            console.log(p1.nome , " é mais velho que" , p2.nome)
        } else if(p2.idade > p1.idade){
            console.log(p2.nome , " é mais velho que" , p1.nome)
        } else{
            console.log(p1.nome , " tem a mesma idade que" , p2.nome)
        }
    }

const ze = new Pessoas ("Zé",34)
const jao = new Pessoas ("Jao" ,1)


compararPessoas(ze,jao);