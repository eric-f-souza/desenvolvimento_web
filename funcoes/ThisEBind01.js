const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao);
    }
}


pessoa.falar()
const falar = pessoa.falar
falar()// gera conflito entre os paradigmas: funcional e OO(orientação objeto)

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

const falar2 = pessoa.falar.bind(pessoa);
falarDePessoa();