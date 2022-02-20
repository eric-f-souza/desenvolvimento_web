const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    //console.log(posicao)
    //console.log(indice)
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach(function(a){
    console.log(fabricantes);
})
fabricantes.forEach(fabricante => console.log(fabricante));