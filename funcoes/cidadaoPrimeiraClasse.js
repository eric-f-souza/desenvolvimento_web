// Funcão em JS é First-Class Object (Citizent)
// Higher-order function

//Create literal form 
function fun01(){

}

//Armazenando em uma variavel
const fun02 = function() {

}

//Armazenando em um array
const array = [function (a,b) {return a + b}, fun01, fun02];
console.log(array[0](2, 3));

//Armazenar em um atribulto de objeto
const obj= {}
obj.falar = function () {return "Opa"};
console.log(obj.falar())


//função com parametro para outra função
function run(fun) {
    fun ()
}

function funcaoFuncao(){
    console.log("Executando2...")
}

run(function() {console.log("Executando...")})
run(funcaoFuncao);

// uma função pode retornar/conter uma função 
function soma(a, b){
    return function (c) {
        console.log(a + b + c);
    }
}

soma (2, 3)(4);


const cincoMais = soma(3,4);
cincoMais(4);
