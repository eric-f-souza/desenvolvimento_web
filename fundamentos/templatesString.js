const nome = "Rebeca";
const concatenacao = " Olá" + nome + "!";
const template = /*crase*/`
    ola
    ${nome}!`;
console.log(concatenacao, template)

// Expressoes...

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei ... ${up("Cuidado")}! `)