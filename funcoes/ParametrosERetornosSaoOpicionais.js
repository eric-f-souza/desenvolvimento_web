function area(largura, altura ){
    const area = largura * altura;
    if (area > 20){
        console.log(`Valor acima do permitido ${area}m2.`);
    }else{
        return area;
    }
}

console.log(area(2,2));//passando os 2 parametros 
console.log(area(2));//passando somente um dos parametros
console.log(area());//nenhum parametreo
console.log(area(2, 3, 17, 22, 44));// mais valores do que o solicitado
console.log(area(5, 5));
