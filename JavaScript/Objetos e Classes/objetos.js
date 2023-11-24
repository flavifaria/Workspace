const pessoa = {

    nome: "Joao teste" ,
    idade: 100 ,

    descrever: function() {
        console.log('Meu nome é', this.nome ,'e minha idade é ' , this.idade);
    }

};

pessoa.descrever();
