//First class
//Higher order


function falarMeuNome(){
    console.log("Meu nome é Renan")
}

const referenciaNova = falarMeuNome

referenciaNova()

function funcao1 (){
    console.log(this)
}

function funcao2( ) => {
 console.log(this)
}
