const soma = function(x,y){
    return x + y;
}

const imprimirResuldado = function(a, b, operacao = soma) {
    console.log(operacao(a,b));
}

imprimirResuldado(3, 4);
imprimirResuldado(3, 4, soma);
imprimirResuldado(3, 4, function(x,y){
    return x - y;
})

imprimirResuldado(3, 4, (x,y) => x * y);

const pessoa = {
    falar: function(){
        console.log("Opa");
    }
}

pessoa.falar()