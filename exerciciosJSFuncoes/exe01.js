//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.
function arithmetcFunctions(valor01, valor02){
    console.log(valor01 + valor02);

    if(valor01 > valor02){
        console.log(valor01 - valor02);
    } else{
        console.log(valor02 - valor01);
    }

    console.log(valor01 * valor02);

    console.log(valor01 / valor02);
}

arithmetcFunctions(10,3)