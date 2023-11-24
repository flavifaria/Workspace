class carro{
    cor;
    ano;
    modelo;

           descrever() {
                console.log('Carro ano :', this.ano ,', /Cor : ' , this.cor, "/Modelo :",this.modelo);
            }
          
};

const gol = new carro();
gol.cor = "Cinza";
gol.ano = "2005";
gol.modelo = "gol";

const uno = new carro();
uno.cor = "vermelha";
uno.ano = "1997";
uno.modelo = "uno";

console.log(gol,uno)

gol.descrever();
uno.descrever();