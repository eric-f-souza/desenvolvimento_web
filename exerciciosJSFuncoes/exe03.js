//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
function baseExpoente(base, expoente){
    return Math.pow(base,expoente)
}


//fiz assim pq queria tentar fazer sem a função Math 
function baseExpoenteBruto(base02, expoente02){
    let contador = 1;
    let baseInicial = base02;
    while(contador != expoente02){
        base02 = baseInicial * base02;
        contador ++
    }
    return base02;
}

console.log(baseExpoente(2,5));
console.log(baseExpoenteBruto(2,5));
console.log(baseExpoente(5,5));
console.log(baseExpoenteBruto(5,5));