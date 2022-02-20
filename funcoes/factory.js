function criandoProduto(produto, valor){
    desconto = valor*0.10
    valor = valor - desconto;
       
    return{
        produto,
        valor,
        desconto,
    }
}

console.log(criandoProduto("Bolacha", 1.98));