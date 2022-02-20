const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1 , 9.0];

//sem usar o callback

let notasBaixas01 = []
for (let i in notas){
    if (notas[i]<7){
        notasBaixas01.push(notas[i]);
    }
}

console.log(notasBaixas01)

//com callback
notasBaixas02 = notas.filter(function(nota){
    return nota < 7;
})

console.log(notasBaixas02);

//Com callback e arrow

const notasBaixas03 = notas.filter(nota => nota < 7);
console.log(notasBaixas03)
