let dobro = function (a){
    return 2 * a; 
}

//mesma função no formato arrow

dobro = (a) =>{
    return 2 * a;
}

// se você tiver somente um unico parametro você pode reduzir, e ai você tem um retorno implicito

dobro = a => 2 * a;

console.log(dobro(Math.PI));

let ola = function() {
    return "olá";
}

ola = () => "Ola";
ola = _ => "Ola"// o parametro nesse caso e passado como _
console.log(ola());