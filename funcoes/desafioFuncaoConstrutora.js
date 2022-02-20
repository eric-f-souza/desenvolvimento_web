class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}


function creatPerson01(name){
    return{
        nome: ()=>`The name is ${name}`
    }
}

pedro = new creatPerson01("Pedro")
console.log(pedro.nome())

//Resposta professor

function creatPerson02(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}

const person01 = new creatPerson02("Jozé")
person01.falar()