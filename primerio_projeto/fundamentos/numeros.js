const peso1 = 1.0;
const peso2 = Number(2.0);

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));


const avalaiacao1 = 9.871;
const avalaiacao2 = 6.871;

const total = avalaiacao1 * peso1 + avalaiacao2 * peso2;
const media = total/(peso1 + peso2);

console.log(media.toFixed(2));//toFixed(2) para mostrar so 2 casas decimais pos a virgula 
console.log(media.toString());//se colocar o 2 nos parentes ele faz  o numero binario 
console.log(typeof media);


