const imprimirResultado = function(nota) {
   if (typeof nota == "number"){
        if(nota >=7){
            console.log("Aprovado")
        }else {
            console.log("Reprovado")
        }
    }else{
        console.log(nota + " is a not number");
    }
}

imprimirResultado(8);
imprimirResultado(6);
imprimirResultado("Epa!");//ele compara se nao tiver um validador, executando o else


