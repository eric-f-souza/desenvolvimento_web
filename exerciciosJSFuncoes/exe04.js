/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores
*/
function divisao(a, b){
    let divi = a / b;
    let rest = a % b;
    return [rest, divi.toFixed(2)]

}

console.log(divisao(4,2));
console.log(divisao(5,3));
