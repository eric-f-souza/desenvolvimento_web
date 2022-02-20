const pessoa = {
    nome: "ana",
    idade: 25,
    endereco: {
        logadouro: "rua nova",
        numero: 001
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n,i)

const {sobrenome, humor = true} = pessoa;
console.log(sobrenome, humor);

const {endereco: {logadouro, numero, cep} } = pessoa;
console.log(logadouro, numero, cep);
