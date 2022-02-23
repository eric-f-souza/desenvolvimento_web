let valor;// não inicilizada
console.log(valor);

valor = null;//ausência de valor
console.log(valor);
//console.log(valor.toString()); essa parte da erro

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco= 3.50;
console.log(produto)

produto.preco = undefined; // evitar atribuir undefined
console.log(!!produto.preco);
//delete produto.preco (para deletar o valor atribuido a "preco" nesse caso)
console.log(produto);

produto.preco = null
console.log(produto)