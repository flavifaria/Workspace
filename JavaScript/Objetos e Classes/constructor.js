class carro{
    cor;
    ano;
    modelo;

    constructor(cor,ano,modelo){
        this.cor = cor ;
        this.ano = ano ;
        this.modelo = modelo ;
    };

           descrever() {
                console.log('Carro ano:', this.ano ,',/Cor:' , this.cor, "/Modelo:",this.modelo);
            }
          
};

const gol = new carro ("Cinza","2005","Gol");
const uno = new carro ("Vermelho","1997","Uno");



gol.descrever();
uno.descrever();