function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() *(max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Valor escolhido foi ${opcao}`)
}while (opcao !=-1);

console.log("FIM")