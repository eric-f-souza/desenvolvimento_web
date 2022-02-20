//12) Faça um algoritmo que calcule o fatorial de um número.

function factorializ(num){
    for(let conter = num - 1; conter >= 1 ; conter--){
        num = num * conter;
    }
    return num;
}
console.log(factorializ(5))
